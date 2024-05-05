const btn = document.querySelector('button');
const num = document.querySelector('h1');
btn.addEventListener('click',()=>{
	num.innerHTML = Math.floor((Math.random()*100));
})