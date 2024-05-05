let array =  ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
let string = '';
let c = 0;
const btn = document.querySelector('button');
const text = document.querySelector('#text');
let new_string = '#'+string;
btn.addEventListener('click',()=>{
	for (let i=0;i<6;i++)
	{

		c = Math.floor(Math.random()*array.length);
		string+= array[c];
	}
	new_string = '#'+string;
	console.log(new_string);
	string = '';
	text.innerHTML = new_string;
	text.style.visibility = 'visible';
	document.body.style.backgroundColor = new_string;
})
