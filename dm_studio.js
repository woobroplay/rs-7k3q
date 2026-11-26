// Private local DM desk. Reuses the original desk URL and its approval storage.
(function(){
 const name='디엠 답변모음';if(!SRC.includes(name))SRC.splice(SRC.indexOf('우브로보드')+1,0,name);
 const baseTabs=renderTabs;renderTabs=function(){baseTabs();const b=document.querySelector('[data-t="'+name+'"]');if(b)b.textContent=name;};
 const baseRender=render;render=function(){const isDM=tab===name;document.querySelectorAll('.bar > .chip,.bar > #sort,.bar > #q').forEach(el=>el.hidden=isDM);const credit=document.querySelector('.credit');if(credit)credit.hidden=isDM;if(!isDM)return baseRender();renderTabs();document.getElementById('dates').innerHTML='';const g=document.getElementById('grid');if(!g.querySelector('#dm-studio-frame'))g.innerHTML='<section style="grid-column:1/-1;min-width:0"><div style="padding:4px 0 12px;font-size:14px;color:#7a6a5a">공구와 일반문의를 따로 확인하고 수정·승인하세요. 기존 답변·승인 기록은 같은 답변실을 사용합니다. <a href="../DM답변실/인스타DM답변실.html" target="_blank" rel="noopener">답변실 크게 열기</a></div><iframe id="dm-studio-frame" title="디엠 답변모음 · 공구와 일반문의" src="../DM답변실/인스타DM답변실.html" style="display:block;width:100%;height:950px;border:1px solid #ece4dc;border-radius:16px;background:#fbf7f2"></iframe></section>';};
 if(new URLSearchParams(location.search).get('dm')==='1')tab=name;render();
})();
