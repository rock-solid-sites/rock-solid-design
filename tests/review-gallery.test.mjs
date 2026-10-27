import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
const root=new URL('../',import.meta.url);
const read=p=>readFileSync(new URL(p,root),'utf8');
test('study gallery includes all five source examples, honest trial and mobile fallback',()=>{
 const page=read('studies/v0.2/review/gallery.html');
 for(const name of ['booking-relationship','architecture-pivot','independent-properties','hms-phase-two','adversarial-review'])assert.ok(page.includes(name));
 for(const x of ['cutaway','neutral','prose','aria-pressed','picture','booking-compact.svg','booking-detailed.svg','overflow-x:auto'])assert.ok(page.includes(x));
 assert.ok(!page.includes('https://cdn'));
 assert.ok(!page.includes('<iframe'));
 assert.ok(page.includes('Treatment C'));
 assert.ok(existsSync(new URL('docs/research/reader-test-record-template.csv',root)));
});
test('reader-test protocol is honest about missing participants and publication gates',()=>{
 const s=read('docs/research/reader-test-protocol-2026-10-27.md');
 assert.match(s,/No participant testing has been performed/);
 assert.match(s,/false-live/i);
 assert.match(s,/five seconds/);
 assert.match(s,/200% zoom/);
});

test('participant stimulus avoids pre-exposure subject explanation and hides evaluator controls',()=>{
  const page=read('studies/v0.2/review/participant.html');
  assert.match(page,/No pre-exposure title, warning or visible answer/);
  assert.match(page,/new URLSearchParams/);
  assert.match(page,/variant==='prose'/);
  assert.doesNotMatch(page,/id="subjectQuestion"|id="figcap"|data-variant="cutaway"/);
  assert.doesNotMatch(page,/<button/);
});
