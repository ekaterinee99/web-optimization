const books = [
  {id:1,title:"The Secret Garden",author:"Frances Hodgson Burnett",genre:"Classic",color:"#718775",ink:"#ffffff"},
  {id:2,title:"The Hobbit",author:"J. R. R. Tolkien",genre:"Fantasy",color:"#b77a50",ink:"#ffffff"},
  {id:3,title:"Little Women",author:"Louisa May Alcott",genre:"Classic",color:"#b7a49c",ink:"#ffffff"},
  {id:4,title:"Educated",author:"Tara Westover",genre:"Non-fiction",color:"#d0c19d",ink:"#34382f"}
];
const grid=document.querySelector("#book-grid"), search=document.querySelector("#search"), genre=document.querySelector("#genre");
const status=document.querySelector("#status"), empty=document.querySelector("#empty"), count=document.querySelector("#favourite-count");
let selectedGenre="all", favourites=[];
try { const saved=JSON.parse(localStorage.getItem("booknest-favourites")||"[]"); if(Array.isArray(saved)) favourites=saved.filter(Number.isInteger); } catch {}
function render(){
  const query=search.value.trim().toLowerCase();
  const shown=books.filter(book=>(book.title+" "+book.author).toLowerCase().includes(query)&&(selectedGenre==="all"||book.genre===selectedGenre));
  grid.replaceChildren();
  shown.forEach(book=>{
    const card=document.createElement("article"); card.className="book-card";
    const cover=document.createElement("div"); cover.className="cover"; cover.style.backgroundColor=book.color; cover.style.setProperty("--ink",book.ink); cover.setAttribute("role","img"); cover.setAttribute("aria-label","Decorative cover for "+book.title);
    const coverTitle=document.createElement("span"); coverTitle.className="cover-title"; coverTitle.textContent=book.title;
    const coverAuthor=document.createElement("span"); coverAuthor.className="cover-author"; coverAuthor.textContent=book.author; cover.append(coverTitle,coverAuthor);
    const meta=document.createElement("div"); meta.className="book-meta";
    const label=document.createElement("span"); label.className="genre-label"; label.textContent=book.genre;
    const fav=document.createElement("button"); fav.className="fav"; fav.type="button"; fav.dataset.id=book.id; fav.textContent=favourites.includes(book.id)?"♥":"♡"; fav.setAttribute("aria-pressed",String(favourites.includes(book.id))); fav.setAttribute("aria-label",(favourites.includes(book.id)?"Remove ":"Add ")+book.title+" "+(favourites.includes(book.id)?"from":"to")+" favourites");
    meta.append(label,fav);
    const title=document.createElement("h3"); title.textContent=book.title;
    const author=document.createElement("p"); author.className="author"; author.textContent=book.author;
    card.append(cover,meta,title,author); grid.append(card);
  });
  status.textContent=shown.length+" "+(shown.length===1?"book":"books")+" found";
  empty.hidden=shown.length!==0; grid.hidden=shown.length===0; count.textContent=favourites.length;
  document.querySelectorAll(".chip").forEach(chip=>{const active=chip.dataset.genre===selectedGenre;chip.classList.toggle("active",active);chip.setAttribute("aria-pressed",String(active));});
  genre.value=selectedGenre;
}
function setGenre(value){selectedGenre=value;render();}
search.addEventListener("input",render);
genre.addEventListener("change",()=>setGenre(genre.value));
document.querySelector(".chips").addEventListener("click",e=>{const chip=e.target.closest("[data-genre]");if(chip)setGenre(chip.dataset.genre);});
grid.addEventListener("click",e=>{const button=e.target.closest(".fav");if(!button)return;const id=Number(button.dataset.id);favourites=favourites.includes(id)?favourites.filter(item=>item!==id):[...favourites,id];try{localStorage.setItem("booknest-favourites",JSON.stringify(favourites));}catch{}render();});
document.querySelector("#reset").addEventListener("click",()=>{search.value="";setGenre("all");});
const toggle=document.querySelector("#menu-toggle"), nav=document.querySelector("#nav");
toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.textContent=open?"Close":"Menu";});
nav.addEventListener("click",e=>{if(e.target.closest("a")){nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");toggle.textContent="Menu";}});
document.querySelector("#contact-form").addEventListener("submit",e=>{
  e.preventDefault();const form=e.currentTarget,feedback=document.querySelector("#feedback");
  const name=form.elements.name.value.trim(),email=form.elements.email.value.trim(),message=form.elements.message.value.trim();
  if(name.length<2){feedback.textContent="Please enter a name with at least 2 characters.";feedback.classList.remove("success");form.elements.name.focus();return;}
  if(!form.elements.email.validity.valid||!email){feedback.textContent="Please enter a valid email address.";feedback.classList.remove("success");form.elements.email.focus();return;}
  if(message.length<5){feedback.textContent="Please write a message with at least 5 characters.";feedback.classList.remove("success");form.elements.message.focus();return;}
  feedback.textContent="Thanks, "+name+"! The form is valid. No message was sent.";feedback.classList.add("success");form.reset();
});
render();