const btn = document.querySelector('button');
const input = document.querySelector('#myinput');
const text = document.querySelector('p');

function revString(value)
{
	let reversed = '';
	for (let i=value.length;i>0;i--)
	{
		reversed+=value[i-1];
	}
	return reversed;
}
btn.addEventListener('click',()=>{

	const inputValue = input.value;
	if (revString(inputValue)==inputValue)
	{
		text.innerHTML = 'It is a palindrome';
	}
	else
	{
		text.innerHTML = 'It is not a palindrome';
	}

})