const d=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&p(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function p(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}};d();var h="./assets/uniparse-layout.9b16f6fc.avif 320w, ./assets/uniparse-layout.753dba3a.webp 320w, ./assets/uniparse-layout.cbb5271d.avif 375w, ./assets/uniparse-layout.fbeee986.webp 375w, ./assets/uniparse-layout.3544a108.avif 425w, ./assets/uniparse-layout.40346b33.webp 425w, ./assets/uniparse-layout.6be24d6a.avif 768w, ./assets/uniparse-layout.6519e457.webp 768w, ./assets/uniparse-layout.70bf227e.avif 1024w, ./assets/uniparse-layout.adcc2211.webp 1024w, ./assets/uniparse-layout.44aeb9aa.avif 1170w, ./assets/uniparse-layout.5c9106c8.webp 1170w";const l=document.createElement("img"),c=document.createElement("pre"),i=document.createElement("button"),o=document.createElement("div"),u=document.createElement("main");l.srcset=h;l.alt="UniParse keyboard layout";o.id="script";i.textContent="copy";o.appendChild(i);o.appendChild(c);u.appendChild(l);u.appendChild(o);document.body.appendChild(u);const f={keys:{"`":["`","",""],1:["!","","","Media_Prev","?",{"+":"{?}"}],2:["[","Media_Next",""],3:["]","Media_Play_Pause",""],4:['"',"Volume_Mute",""],5:["{","\u2192","","","",{"+":"\u2192"}],6:["}","\u2190","","","",{"+":"\u2190"}],7:["CapsLock","\u2605","","","",{"+":"\u2605"}],8:["*","","","*","\u25B6",{"+":"\u25B6"}],9:["/","","","/","\u25BA",{"+":"\u25BA"}],0:["'","\u25AC","","","",{"+":"\u25AC"}],"-":[")","\u2022","","","",{"+":"\u2022"}],"=":["(","","","\u203A","PgUp",{"+":"\u203A"}],Bs:["\\","\xBB","","","",{"+":"\xBB"}],q:["","@","F12"],w:["","#","\u03C0"],e:["f","$","\u2070"],r:["p","<","\u2264"],t:["b",">","\u2265"],y:["Bs"],u:["j","+","\xB1"],i:["l","","",7,"Home",{"<^<!":"^7"}],o:["u","","",8,"Up",{"<^<!":"^8","<^>!":"^{Up}","<!>!":"!{Up}","+>!":"+{Up}","<#>!":"#{Up}","<^<!>!":"^!{Up}"}],p:["y","","",9,"End",{"<^<!":"^9"}],"[":[":","`;","\u2248"],"]":["=","","\u2260","=","PgDn"],Enter:["Bs"],CapsLock:["LShift"],a:["","Bs","Browser_Back","","",{">#":"Bs"}],s:["r","Esc","Browser_Refresh"],d:["s","Volume_Down","Browser_Search"],f:["t","Volume_Up","Browser_Forward"],g:["","Del","","","",{"+!":"+{Del}"}],h:["Enter"],j:["m","-","\u221E"],k:["n","","",1,"Left",{"<^<!":"^1","<^>!":"^{Left}","<!>!":"!{Left}","+>!":"+{Left}","<#>!":"#{Left}"}],l:["e","","",2,"Down",{"<^<!":"^2","<^>!":"^{Down}","<!>!":"!{Down}","+>!":"+{Down}","<#>!":"#{Down}","<^<!>!":"^!{Down}"}],"`;":["i","","",3,"Right",{"<^<!":"^3","<^>!":"^{Right}","<!>!":"!{Right}","+>!":"+{Right}","<#>!":"#{Right}"}],"'":["o","","\xD8","0","Enter",{"<^<!":"^0"}],"\\":["RShift","",""],LShift:["LCtrl","",""],SC056:["LCtrl","",""],z:["x","\xD7","\u2717"],x:["c","``","\xA9","","",{"^!":"^{``}"}],c:["d","&","\u24B9"],v:["","|","\u2713"],b:["z","",""],n:["_","","\u2208"],m:["k","`%","\u32BF"],",":["h","","",4,"^",{"<^<!":"^4"}],".":[",","","",5,"~",{"<^<!":"^5","+":","}],"/":[".","","",6,"\u2026",{"<^<!":"^6","+":"."}],RShift:["RCtrl"],RCtrl:["LCtrl",""],Space:["","Space"],LAlt:["return"],RAlt:["return"],RWin:["return"]},output:"",switch(e){let s="";for(const r in this.keys[e][5])this.keys[e][5][r]?s+=`	${r}${e}::SendInput, ${this.keys[e][5][r]}
		return
`:s+=`	${r}${e}::BlockInput, on
		return
`;return s},show(){for(const e in this.keys)this.output+=`;\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC ${e}
${this.keys[e][0]?`	${e}::${this.keys[e][0]}
`:""}${this.keys[e][1]?`	!${e}::SendInput, {${this.keys[e][1]}}
		return
`:""}${this.keys[e][2]?`	<!>!${e}::SendInput, {${this.keys[e][2]}}
		return
`:""}${this.keys[e][3]?`	<!${e}::SendInput, {${this.keys[e][3]}}
		return
`:""}${this.keys[e][4]?`	>!${e}::SendInput, {${this.keys[e][4]}}
		return
`:""}${this.keys[e][5]?this.switch(e):""}
`;console.log(this.output),c.innerText=this.output,i.addEventListener("click",()=>{navigator.clipboard.writeText(this.output).then(()=>i.textContent="copied")},{once:!0})}};f.show();
