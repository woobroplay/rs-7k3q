/* Shared channel classification. Never duplicates the reference dataset. */
window.STUDIO_CHANNELS={
 insaeng:{name:'인생연습',file:'인생연습_레퍼런스스튜디오.html',web:'insaeng.html',description:'위인·명언 · 고전 인생조언 (사연은 보관)',accent:'#b54d67'},
 deungbul:{name:'등불야담',file:'등불야담_레퍼런스스튜디오.html',web:'deungbul.html',description:'야담 · 민담 · 옛날이야기',accent:'#93601e'},
 kong:{name:'콩떡이',file:'콩떡이_레퍼런스스튜디오.html',web:'kong.html',description:'AI 아이 속마음 · 말하는 아이 영상 · @kongtteok_diary',accent:'#d9732f'}
};
window.studioClassify=function(r){
 if(r.studioChannel==='insaeng'||r.studioChannel==='deungbul'||r.studioChannel==='kong')return r.studioChannel;
 if(/^(yuna\.sokmaum|dodamsodam\.talk|yammy_tip|baby_power25|kongtteok_diary)$/.test(r.account||'')||r.cat==='AI 아이 속마음'||r.cat==='AI 육아 일상 공감')return 'kong';
 if(r.platform!=='유튜브'||r.src!=='등불사연')return null;
 const t=String(r.title||r.caption?.split('\n')[0]||'').normalize('NFC');
 if(/컬투쇼|사랑이 온다|연예뉴스|예능/.test(t))return null;
 return /야담|민담|설화|전래동화|옛날이야기|조선시대|암행어사/.test(t)?'deungbul':'insaeng';
};
window.studioLink=function(k){return location.protocol==='file:'?STUDIO_CHANNELS[k].file:STUDIO_CHANNELS[k].web};
