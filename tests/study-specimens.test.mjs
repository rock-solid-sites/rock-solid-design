import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=(p)=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const manifest=JSON.parse(read('studies/v0.2/manifest.json'));
const cases=['booking-relationship','architecture-pivot','independent-properties','hms-phase-two'];
test('v0.2 research studies map one-to-one to neutral controls',()=>{
  assert.deepEqual(manifest.studies.map(x=>x.id),cases);
  for(const id of cases){
    const s=read('studies/v0.2/'+id+'.svg');
    const neutral=read('studies/v0.2/baselines/'+id+'.svg');
    for(const xml of [s,neutral]){
      assert.match(xml,/<svg xmlns="http:\/\/www.w3.org\/2000\/svg"/);
      assert.match(xml,/viewBox="0 0 760 296"/);
      assert.match(xml,/<title id="title">/);
      assert.match(xml,/<desc id="description">/);
      assert.match(xml,/aria-labelledby="title description"/);
      assert.doesNotMatch(xml,/<script|<foreignObject|<image|(?:href|src)\s*=\s*["']\s*(?:https?:|data:)/i);
    }
    assert.ok(s.includes('data-study="'+id+'"'));
    assert.ok(neutral.includes('data-study="neutral-'+id+'"'));
    assert.ok(s.includes('#FAFAF8')&&s.includes('#111111'));
    const record=manifest.studies.find(x=>x.id===id);
    assert.ok(record.question.length>=20&&record.longDescription.length>=80);
    assert.ok(record.takeaway.length>=25);
    assert.ok(record.relations.length>0);
    for(const relation of record.relations){
      assert.ok(relation.from&&relation.to&&['technical-interface','process-step','business-association','dependency','comparison'].includes(relation.kind));
      assert.ok(['outbound','inbound','bidirectional','not-applicable'].includes(relation.direction));
    }
  }
});
test('truth caveats are visible and future features are not presented as already shipped',()=>{
  assert.match(read('studies/v0.2/booking-relationship.svg'),/TRANSPORT NOT SPECIFIED/);
  assert.match(read('studies/v0.2/architecture-pivot.svg'),/NOT A RELEASE CLAIM/);
  assert.match(read('studies/v0.2/independent-properties.svg'),/ACCOUNT 04/);
  assert.match(read('studies/v0.2/hms-phase-two.svg'),/PHASE 2 \/ IN DEVELOPMENT/);
  assert.match(read('studies/v0.2/hms-phase-two.svg'),/stroke-dasharray/);
  assert.ok(manifest.studies.every(x=>x.truthMode==='reported-project'));
  assert.ok(manifest.status==='research-only');
});

test('neutral references use unbiased headings and do not stroke text by inheritance',()=>{
  const headings=['BOOKING RELATIONSHIP','ARCHITECTURAL PIVOT','INDEPENDENT EXPERIENCES','PROJECT PHASES'];
  for(let i=0;i<cases.length;i++){
    const study=read('studies/v0.2/'+cases[i]+'.svg');
    const baseline=read('studies/v0.2/baselines/'+cases[i]+'.svg');
    const code=String(i+1).padStart(2,'0');
    assert.ok(study.includes('SCHEMATIC STUDY / '+code));
    assert.ok(baseline.includes('SCHEMATIC STUDY / '+code));
    assert.ok(study.includes('>'+headings[i]+'</text>'));
    assert.ok(baseline.includes('>'+headings[i]+'</text>'));
    assert.doesNotMatch(baseline,/RSS \/ STRUCTURAL CUTAWAY|NEUTRAL REFERENCE|<g stroke=/);
    assert.match(baseline,/<rect[^>]+stroke="#111111" stroke-width="1.5" fill="#FAFAF8"\/>/);
  }
  assert.doesNotMatch(read('studies/v0.2/architecture-pivot.svg'),/stroke-dasharray/);
  assert.match(read('studies/v0.2/booking-relationship.svg'),/>BOOKING<\/text>/);
  assert.match(read('studies/v0.2/booking-relationship.svg'),/>ACCOUNT<\/text>/);
});
