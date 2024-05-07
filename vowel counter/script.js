const btn = document.querySelector('button');
const text = document.querySelector('p');
const input = document.querySelector('#myInput');
function check(string)
{
	let count = 0;
	for (let i=0;i<string.length;i++)
	{
		if (string[i]=='a' || string[i]=='e' || string[i]=='i' || string[i]=='o' || string[i]=='u' || string[i]=='A' || string[i]=='E' || string[i]=='I' || string[i]=='O' || string[i]=='U')
		{
			count = count +1;
		}
		else
		{
			continue;
		}
	}
	return count;
}
btn.addEventListener('click',()=>{
	const inputValue = input.value;
	text.innerHTML = 'It has '+check(inputValue)+' vowels';
})