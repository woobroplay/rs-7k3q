/* Shared channel classification. Never duplicates the reference dataset. */
window.STUDIO_CHANNELS={
 insaeng:{name:'인생연습',file:'인생연습_레퍼런스스튜디오.html',web:'insaeng.html',description:'시니어 사연 · 명언 · 인간관계',accent:'#b54d67'},
 deungbul:{name:'등불야담',file:'등불야담_레퍼런스스튜디오.html',web:'deungbul.html',description:'야담 · 민담 · 옛날이야기',accent:'#93601e'}
};
window.studioClassify=function(r){
 if(r.studioChannel==='insaeng'||r.studioChannel==='deungbul')return r.studioChannel;
 if(r.platform!=='유튜브'||r.src!=='등불사연')return null;
 const t=String(r.title||r.caption?.split('\n')[0]||'').normalize('NFC');
 if(/컬투쇼|사랑이 온다|연예뉴스|예능/.test(t))return null;
 return /야담|민담|설화|전래동화|옛날이야기|조선시대|암행어사/.test(t)?'deungbul':'insaeng';
};
window.studioLink=function(k){return location.protocol==='file:'?STUDIO_CHANNELS[k].file:STUDIO_CHANNELS[k].web};
