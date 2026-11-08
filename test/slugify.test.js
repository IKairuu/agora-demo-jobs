import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from '../src/slugify.js';

test('slugify > basic words', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
});

test('slugify > trims dashes', () => {
  assert.equal(slugify('  --Hi--  '), 'hi');
});
