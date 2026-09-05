import assert from 'node:assert/strict';
import test from 'node:test';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { validateCatalog } from '../scripts/validate.mjs';

async function fixture(t, overrides = {}, id = 'my-app') {
  const root = await mkdtemp(join(tmpdir(), 'catalog-test-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const folder = join(root, 'apps', id);
  await mkdir(folder, { recursive: true });
  const app = { id, name: 'My App', author: 'Someone', category: 'dev', platforms: ['Linux'],
    website: 'https://example.com', source: null, description: 'An app',
    publishedAt: '2026-09-05T00:00:00Z', previews: ['preview0.png'], ...overrides };
  await writeFile(join(folder, 'manifest.json'), JSON.stringify(app));
  await writeFile(join(folder, 'preview0.png'), Buffer.from('89504e470d0a1a0a', 'hex'));
  await writeFile(join(root, 'order.json'), JSON.stringify([id]));
  return root;
}
test('accepts lowercase IDs, author, website, and local preview files', async t => {
  assert.equal(await validateCatalog(await fixture(t)), 1);
});
test('rejects uppercase folder names and mismatched manifest IDs', async t => {
  await assert.rejects(validateCatalog(await fixture(t, {}, 'Bad-App')), /folder/);
  await assert.rejects(validateCatalog(await fixture(t, { id: 'different' })), /ID/);
});
test('rejects external previews and paths escaping the app directory', async t => {
  for (const name of ['https://example.com/preview0.png', '/tmp/preview0.png', '../preview0.png']) {
    await assert.rejects(validateCatalog(await fixture(t, { previews: [name] })), /filename/);
  }
});
test('rejects missing previews, missing authors, and invalid publication dates', async t => {
  await assert.rejects(validateCatalog(await fixture(t, { previews: ['preview1.png'] })), /preview1.png/);
  await assert.rejects(validateCatalog(await fixture(t, { author: '' })), /author/);
  await assert.rejects(validateCatalog(await fixture(t, { publishedAt: 'yesterday' })), /publishedAt/);
});

test('enforces Twitter weighted description length', async t => {
  assert.equal(await validateCatalog(await fixture(t, { description: 'a'.repeat(280) })), 1);
  await assert.rejects(validateCatalog(await fixture(t, { description: 'a'.repeat(281) })), /280/);
  await assert.rejects(validateCatalog(await fixture(t, { description: '😀'.repeat(141) })), /280/);
});

test('validates optional READMEs and requires referenced media to exist', async t => {
  const root = await fixture(t);
  const path = join(root, 'apps/my-app/README.md');
  await writeFile(path, 'A product overview.\n\n![App](preview0.png)');
  assert.equal(await validateCatalog(root), 1);
  await writeFile(path, '<video controls src="missing.mp4"></video>');
  await assert.rejects(validateCatalog(root), /missing.mp4/);
  await writeFile(path, '[Other](https://evil.test)');
  await assert.rejects(validateCatalog(root), /README/);
});
