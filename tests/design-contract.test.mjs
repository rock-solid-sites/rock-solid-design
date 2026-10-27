import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
const read=(path)=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
const tokens=read('styles/tokens.css');
const foundations=read('styles/foundations.css');
const schematic=read('styles/schematic.css');
test('exact core site design tokens are preserved',()=>{
  for (const line of [
    '--color-primary: #111111;', '--color-background: #FAFAF8;',
    '--surface-service-1: #F0F0EE;', '--surface-service-4: #D8D8D5;',
    '--color-charcoal: #303034;', '--space-sm:  8px;',
    '--radius-md: 8px;', '--radius-lg: 12px;',
    '--font-heading: var(--font-geist), sans-serif;'
  ]) assert.ok(tokens.includes(line), 'Missing '+line);
  assert.match(foundations,/@import '\.\/tokens\.css'/);
  assert.match(foundations,/rgba\(0,0,0,0\.05\) 1px/);
  assert.match(foundations,/1120px/);
});
test('schematic extension uses stronger display strokes',()=>{
  assert.match(schematic,/--rss-schematic-stroke-primary: 3px/);
  assert.match(schematic,/--rss-schematic-stroke-support: 2px/);
  assert.match(schematic,/--rss-schematic-radius: 4px/);
});
test('examples have semantic alternatives and no scripts or external loads',()=>{
  const files=readdirSync(new URL('../schematics/',import.meta.url)).filter(x=>x.endsWith('.svg'));
  assert.ok(files.length>=2);
  for(const file of files){
    const s=read('schematics/'+file);
    assert.match(s,/<title id="title">/);
    assert.match(s,/<desc id="description">/);
    assert.match(s,/viewBox="0 0/);
    assert.doesNotMatch(s,/<script|<foreignObject|<image|(?:href|src)\s*=\s*["']\s*(?:https?:|data:)/i);
    assert.doesNotMatch(s,/Trip.?N|Chill Zone|Pink Bubble|Property [A-Z][a-z]+/i);
  }
});
