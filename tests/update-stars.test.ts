import assert from 'node:assert/strict';
import test from 'node:test';
import { refreshStars } from '../scripts/update-stars.ts';

test('fetches GitHub counts including zero and timestamps successful updates', async () => {
  const apps = [{ id: 'one', source: 'https://github.com/owner/project', stars: 20 }];
  const request = async url => {
    assert.equal(url, 'https://api.github.com/repos/owner/project');
    return { ok: true, json: async () => ({ stargazers_count: 0 }) };
  };
  await refreshStars(apps, { request, now: '2026-09-05T00:00:00Z', warn: () => {} });
  assert.equal(apps[0].stars, 0);
  assert.equal(apps[0].starsUpdatedAt, '2026-09-05T00:00:00Z');
});

test('retains prior data on API failure and leaves non-GitHub apps unknown', async () => {
  const apps = [
    { id: 'cached', source: 'https://github.com/owner/cached', stars: 42, starsUpdatedAt: '2026-01-01T00:00:00Z' },
    { id: 'unknown', source: 'https://github.com/owner/unknown' },
    { id: 'other', source: 'https://git.example.com/owner/project' },
    { id: 'commercial', source: null },
  ];
  let calls = 0;
  await refreshStars(apps, { request: async () => { calls++; return { ok: false, status: 403 }; }, warn: () => {} });
  assert.equal(calls, 2);
  assert.equal(apps[0].stars, 42);
  assert.equal(apps[0].starsUpdatedAt, '2026-01-01T00:00:00Z');
  assert.equal(apps[1].stars, null);
  assert.equal(apps[2].stars, null);
  assert.equal(apps[3].stars, null);
});
