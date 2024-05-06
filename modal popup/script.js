const btn1 = document.querySelector('#clickme');
const box = document.querySelector('.popup');
const btn2 = document.querySelector('#ok')
btn1.addEventListener('click',()=>{
	box.style.visibility = 'visible';
})

btn2.addEventListener('click',()=>{
	box.style.visibility = 'hidden';
})