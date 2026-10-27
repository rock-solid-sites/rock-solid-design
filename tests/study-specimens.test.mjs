import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=(p)=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const manifest=JSON.parse(read('studies/v0.2/manifest.json'));
const cases=['booking-relationship','architecture-pivot','independent-properties','hms-phase-two','adversarial-review'];
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
  assert.deepEqual(manifest.studies.map(x=>x.truthMode),['reported-project','reported-project','reported-project','reported-project','generic-example']);
  assert.ok(manifest.status==='research-only');
});

test('neutral references use unbiased headings and do not stroke text by inheritance',()=>{
  const headings=['BOOKING RELATIONSHIP','ARCHITECTURAL PIVOT','INDEPENDENT EXPERIENCES','PROJECT PHASES','ADVERSARIAL REVIEW'];
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
  assert.match(read('studies/v0.2/booking-relationship.svg'),/>OFFERS<\/text>/);
  assert.match(read('studies/v0.2/booking-relationship.svg'),/>REQUIRES<\/text>/);
});

test('both booking-study treatments include the same locally visible relationship actions',()=>{
  for(const root of ['studies/v0.2','studies/v0.2/baselines']){
    const s=read(root+'/booking-relationship.svg');
    assert.match(s,/>OFFERS<\/text>/);
    assert.match(s,/>REQUIRES<\/text>/);
  }
});

test('each illustrated node and relation has an explicit evidence and lifecycle record',()=>{
  const statuses=new Set(manifest.lifecycleVocabulary);
  for(const study of manifest.studies){
    assert.ok(Array.isArray(study.nodes)&&study.nodes.length>0);
    const ids=new Set();
    for(const node of study.nodes){
      assert.ok(node.id&&!ids.has(node.id));
      ids.add(node.id);
      assert.ok(statuses.has(node.lifecycle),'Unknown node status: '+node.lifecycle);
      assert.ok(node.sourceStatus&&node.note);
    }
    for(const rel of study.relations){
      assert.ok(ids.has(rel.from)&&ids.has(rel.to),'Unknown endpoint in '+study.id);
      assert.ok(rel.label&&rel.transport);
      assert.equal(rel.transport,'not-asserted');
    }
    assert.equal(study.lifecycle,undefined,'Ambiguous study-wide lifecycle should not remain');
  }
});

test('bookings have independently authored scale tiers with text alternatives',()=>{
  const study=manifest.studies.find(s=>s.id==='booking-relationship');
  const tiers=study.variants;
  assert.deepEqual(Object.keys(tiers),['S','M','L']);
  assert.deepEqual([tiers.S.viewBox,tiers.M.viewBox,tiers.L.viewBox],['0 0 192 136','0 0 760 296','0 0 960 440']);
  for(const tier of ['S','M','L']){
    const s=read('studies/v0.2/'+tiers[tier].asset);
    assert.ok(s.includes('viewBox="'+tiers[tier].viewBox+'"'));
    assert.match(s,/<title id="title">/);
    assert.match(s,/<desc id="description">/);
    assert.ok(tiers[tier].shortCaption);
  }
  assert.match(read('studies/v0.2/adversarial-review.svg'),/>CHALLENGE<\/text>/);
  assert.match(read('studies/v0.2/baselines/adversarial-review.svg'),/>CHALLENGE<\/text>/);
});
