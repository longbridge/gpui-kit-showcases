import assert from 'node:assert/strict';
import twitterText from 'twitter-text';
import { validateReadme } from './readme.ts';
import { readdir, readFile, realpath } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export async function validateCatalog(root) {
  const ids = [];
  const text = value => typeof value === 'string' && value.trim().length > 0;
  const date = value => typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T.*(?:Z|[+-]\d{2}:\d{2})$/.test(value) && Number.isFinite(Date.parse(value));
  for (const entry of await readdir(join(root, 'apps'), { withFileTypes: true })) {
    const id = entry.name;
    assert(entry.isDirectory() && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id), `Invalid app folder: ${id}`);
    const folder = join(root, 'apps', id);
    const app = JSON.parse(await readFile(join(folder, 'manifest.json'), 'utf8'));
    assert.equal(app.id, id, `${id}: manifest ID must match its folder`);
    assert(text(app.author), `${id}: author is required`);
    assert(text(app.name) && ['dev', 'terminal', 'system', 'work'].includes(app.category), `${id}: invalid name or category`);
    assert(Array.isArray(app.platforms) && app.platforms.length && app.platforms.every(text), `${id}: missing platforms`);
    assert(text(app.description), `${id}: English description required`);
    assert(twitterText.parseTweet(app.description).weightedLength <= 280, `${id}: description exceeds 280 weighted characters`);
    assert(app.website || app.source, `${id}: project link required`);
    for (const link of [app.website, app.source]) {
      if (link != null) assert(['http:', 'https:'].includes(new URL(link).protocol), `${id}: invalid project URL`);
    }
    for (const key of ['featured', 'building']) assert(app[key] === undefined || typeof app[key] === 'boolean', `${id}: invalid ${key}`);
    assert(date(app.publishedAt), `${id}: publishedAt must be an ISO 8601 timestamp with timezone`);
    assert(app.stars == null || (Number.isInteger(app.stars) && app.stars >= 0), `${id}: invalid stars`);
    assert(app.starsUpdatedAt == null || date(app.starsUpdatedAt), `${id}: invalid starsUpdatedAt`);
    assert(Array.isArray(app.previews) && app.previews.length, `${id}: preview required`);
    for (const name of app.previews) {
      assert(typeof name === 'string' && /^preview\d*\.(png|jpe?g|webp)$/i.test(name), `${id}: invalid preview filename`);
      const path = await realpath(join(folder, name));
      assert.equal(dirname(path), await realpath(folder), `${id}: preview outside app folder`);
      const data = await readFile(path);
      const valid = /\.png$/i.test(name) ? data.subarray(0, 8).equals(Buffer.from('89504e470d0a1a0a', 'hex'))
        : /\.jpe?g$/i.test(name) ? data[0] === 255 && data[1] === 216
        : data.toString('ascii', 0, 4) === 'RIFF' && data.toString('ascii', 8, 12) === 'WEBP';
      assert(valid, `${id}: incorrect image format for ${name}`);
    }
    let readme;
    try { readme = await readFile(join(folder, 'README.md'), 'utf8'); }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
    if (readme !== undefined) {
      const path = await realpath(join(folder, 'README.md'));
      assert.equal(dirname(path), await realpath(folder), id + ': README must stay in the app folder');
      for (const name of validateReadme(readme, app)) {
        const media = await realpath(join(folder, name));
        assert.equal(dirname(media), await realpath(folder), id + ': media must stay in the app folder');
        const bytes = await readFile(media);
        assert(bytes.length, id + ': empty media file ' + name);
      }
    }
    ids.push(id);
  }
  assert(ids.length, 'The catalog must not be empty');
  const order = JSON.parse(await readFile(join(root, 'order.json'), 'utf8'));
  assert(Array.isArray(order) && new Set(order).size === order.length && order.every(id => ids.includes(id)), 'Invalid order.json');
  return ids.length;
}

if (import.meta.main) {
  console.log(`Validated ${await validateCatalog(join(dirname(fileURLToPath(import.meta.url)), '..'))} app manifests and screenshots`);
}
