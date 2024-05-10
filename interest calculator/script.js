const btn1 = document.querySelector('button');
const text = document.querySelector('p');
const principle = document.querySelector('#principle');
const rate = document.querySelector('#rate');
const time = document.querySelector('#time');
let p = 0;
let r = 0;
let t = 0;
let interest = 0;
btn1.addEventListener('click',()=>{
	p = principle.value;
	r = rate.value;
	t = time.value;
	interest = (p*t*r)/100;
	text.innerHTML = `Interest = ${interest}`;
})