const btn = document.querySelector('button');
const slider = document.querySelector('#num');
const length = document.querySelector("#length");
const upperCase = document.querySelector('#uppercase');
const lowerCase = document.querySelector('#lowercase');
const number = document.querySelector('#number');
const symbol = document.querySelector('#symbols');
const text = document.querySelector("#yourPassword");
let c = '';
function updateSlider(){
	length.innerText ='Length: '+ slider.value;
}
slider.addEventListener('input',updateSlider);
function generateCapital(){
	a = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	num = Math.floor(Math.random()*25);
	return a[num];
}
function generateLower(){
	a = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	num = Math.floor(Math.random()*25);
	return a[num];
}
function generateNumber(){
	a = ['1','2','3','4','5','6','7','8','9','10'];
	num = Math.floor(Math.random()*9);
	return a[num];
}
function generateSymbol(){
	a = ['@','$','%','&','£'];
	num = Math.floor(Math.random()*4);
	return a[num];
}

function generatePassword()
{
	let password = '';

	while(password.length<=slider.value)
	{
		

		if (symbol.checked==true){

			if (password.length==slider.value){
				break;
			}
			else{
			password = password + generateSymbol();
			}
			
		}
		
		if (upperCase.checked==true){
			if (password.length==slider.value){
				break;
			}
			else{
			password = password + generateCapital();
			}
			
			
		}
		if (lowerCase.checked==true){
			if (password.length==slider.value){
				break;
			}
			else{
			password = password + generateLower();
			}
			
			
		}
		if (number.checked==true){
			if (password.length==slider.value){
				break;
			}
			else{
			password = password + generateNumber();
			}
			
		}

		
	}
	return password;
}
 btn.addEventListener('click',()=>{
 	text.innerHTML = generatePassword();
 	text.style.color = 'white';
 })


