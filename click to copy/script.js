const btn = document.querySelector('button');

btn.addEventListener('click',()=>{
	const input = document.querySelector('input')
	const inputValue = input.value;
	input.select();
	input.setSelectionRange(0,9999);
	navigator.clipboard.writeText(inputValue);
	alert('Copied text: '+inputValue);
})