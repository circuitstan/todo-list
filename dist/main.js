(()=>{const e=document.getElementById("container"),t=document.getElementById("todo");t.addEventListener("click",(n=>{t.style.display="none",(()=>{let n=document.createElement("div"),l=document.createElement("textarea"),d=document.createElement("input"),c=document.createElement("input");n.className="todo",d.className="enter",l.className="input",c.className="cancel",l.type="text",d.type="submit",d.value="Add todo event",c.type="button",c.value="Cancel",n.appendChild(l),n.appendChild(d),n.appendChild(c),e.appendChild(n),d.onclick=()=>{n.style.display="none";let d=document.createElement("p");d.className="card",d.textContent=l.value,e.appendChild(d),t.style.display="block"},c.onclick=()=>{e.removeChild(n),t.style.display="block"}})()})),console.log("to do"),window.openForm=function(){document.getElementById("myForm").style.display="block"};const n=document.getElementById("myForm");document.getElementById("cancel").addEventListener("click",(()=>{n.style.display="none"}))})();