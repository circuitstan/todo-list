(()=>{const e=document.getElementById("container"),t=document.getElementById("top-layer"),n=document.getElementById("to-do-column"),a=document.getElementById("doing-column"),l=document.getElementById("done-column"),d=document.getElementById("plusdiv");var o=-1;const c=document.getElementById("newtodobtn");c.addEventListener("click",(e=>{c.style.display="none",console.log("hey"),(()=>{o+=1;let e=document.createElement("div"),t=document.createElement("p"),a=document.createElement("textarea"),l=document.createElement("p"),m=document.createElement("textarea"),s=document.createElement("p"),r=document.createElement("input"),g=document.createElement("div"),u=document.createElement("input"),p=document.createElement("input");e.className="to-do-input",g.className="enter-and-cancel",u.className="enter",a.className="input1",m.className="input2",p.className="cancel",t.className="todo-title",l.className="todo-title",s.className="todo-title",r.className="date",r.type="date",a.type="text",m.type="text",u.type="submit",u.value="Add",p.type="button",p.value="Cancel",t.textContent="Title",l.textContent="Description",s.textContent="Due date",m.placeholder="Add more details..",g.appendChild(u),g.appendChild(p),e.appendChild(t),e.appendChild(a),e.appendChild(l),e.appendChild(m),e.appendChild(s),e.appendChild(r),e.appendChild(g),d.appendChild(e),a.focus(),a.addEventListener("keypress",(t=>{if("Enter"==t.key){d.removeChild(e);let t=document.createElement("div"),l=document.createElement("p"),m=document.createElement("button");t.className="card-div",m.className="done-btn",l.className="card",m.type="button",m.textContent=">",l.textContent=a.value,m.id=o,l.id=o,t.id=o,l.spellcheck=!1,t.appendChild(l),t.appendChild(m),n.appendChild(t),c.style.display="block",i()}})),u.onclick=()=>{d.removeChild(e);let t=document.createElement("div"),l=document.createElement("p"),m=document.createElement("button");t.className="card-div",m.className="done-btn",l.className="card",m.type="button",m.textContent=">",l.textContent=a.value,m.id=o,l.id=o,t.id=o,l.spellcheck=!1,t.appendChild(l),t.appendChild(m),n.appendChild(t),c.style.display="block",i()},p.onclick=()=>{d.removeChild(e),c.style.display="block"}})()})),e.addEventListener("keypress",(e=>{if("Enter"==e.key){var t=document.getElementsByClassName("card");for(let e=0;e<t.length;e++)t[e].id==e&&t[e].blur()}})),e.addEventListener("click",(e=>{"done-btn"==e.target.className&&("card"==e.target.parentElement.childNodes[0].className?(function(e){var t=document.getElementsByClassName("done-btn"),n=document.getElementsByClassName("card"),l=document.getElementsByClassName("card-div");for(let d=0;d<t.length;d++)t[d].id===e.target.id&&">"==t[d].textContent&&(n[d].className="card in-progress",t[d].textContent="🗸",a.appendChild(l[d]))}(e),i()):"card in-progress"==e.target.parentElement.childNodes[0].className?(function(e){var t=document.getElementsByClassName("done-btn"),n=document.getElementsByClassName("card"),a=document.getElementsByClassName("card-div");for(let d=0;d<t.length;d++)t[d].id===e.target.id&&"🗸"==t[d].textContent&&(n[d].className="card done-todo",t[d].textContent="x",l.appendChild(a[d]))}(e),i()):"card done-todo"==e.target.parentElement.childNodes[0].className&&(function(e){var t=document.getElementsByClassName("done-btn"),n=document.getElementsByClassName("card-div");for(let a=0;a<t.length;a++)t[a].id===e.target.id&&"x"==t[a].textContent&&l.removeChild(n[a])}(e),i()))}));const m=e=>{var n=document.getElementsByClassName("big-card");if(console.log("a"),0==n.length){let n=document.createElement("div"),a=document.createElement("div");n.className="big-div",a.className="big-card",n.appendChild(a),t.appendChild(n),a.id=e.target.id}for(let t=0;t<n.length;t++)e.target.id===n[t].id&&(n[t].style.display="block",n[t].onclick=e=>{s(e)})};function s(e){var t=document.getElementsByClassName("big-card");console.log("t");for(let n=0;n<t.length;n++)t[n].id===e.target.id&&(t[n].style.display="none")}function r(){var e=localStorage.getItem("count"),t=localStorage.getItem("cards1"),n=localStorage.getItem("cards2"),a=localStorage.getItem("cards3");document.getElementById("to-do-column").innerHTML=t,document.getElementById("doing-column").innerHTML=n,document.getElementById("done-column").innerHTML=a,o=Number(e)}function i(){localStorage.setItem("cards1",document.getElementById("to-do-column").innerHTML),localStorage.setItem("cards2",document.getElementById("doing-column").innerHTML),localStorage.setItem("cards3",document.getElementById("done-column").innerHTML),localStorage.setItem("count",o),r()}e.addEventListener("click",(e=>{console.log(e),"card"==e.target.className&&function(e){var t=document.getElementsByClassName("card");for(let n=0;n<t.length;n++)t[n].id===e.target.id&&m(e)}(e)})),function(e){var t;try{t=window.localStorage;var n="__storage_test__";return t.setItem(n,n),t.removeItem(n),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}}()?console.log("localStorage works"):console.log("Error: localStorage not working"),localStorage.getItem("cards1")||localStorage.getItem("cards2")||localStorage.getItem("cards3")?(console.log("load complete"),r()):(console.log("storage empty"),i())})();