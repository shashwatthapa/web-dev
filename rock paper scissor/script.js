const btn1 = document.querySelector('#rock');
const btn2 = document.querySelector('#paper');
const btn3 = document.querySelector('#scissor');
const array = ['rock','paper','scissor'];
let value = 0;
let computerSelection;
let result;
const text1 = document.querySelector('#Userchoice');
const text2 = document.querySelector('#Computerchoice');
const text3 = document.querySelector('h1');
function Computer_Choice(){
	value = Math.floor(Math.random()*3);
	return array[value];
}
function check(userChoice,computerChoice)
{
	if (userChoice=='rock' && computerChoice == 'rock')
	{
		result = 'draw';

	}
	else if (userChoice=='rock' && computerChoice=='paper')
	{
		result = 'computer';
	}
	else if (userChoice=='rock'&& computerChoice=='scissor')
	{
		result = 'user';
	}
	else if (userChoice=='paper'&& computerChoice=='rock')
	{
		result = 'user';
	}
	else if (userChoice=='paper' && computerChoice=='paper')
	{
		result = 'draw';
	}
	else if (userChoice=='paper'&& computerChoice=='scissor')
	{
		result='computer';
	}
	else if (userChoice=='scissor'&& computerChoice=='rock')
	{
		result = 'computer';
	}
	else if (userChoice=='scissor' && computerChoice=='paper')
	{
		result = 'user';
	}
	else if (userChoice=='scissor' && computerChoice=='scissor')
	{
		result = 'draw';
	}
	else{
		return -1;
	}
	return result;

} 
btn1.addEventListener('click',()=>{
	computerSelection = Computer_Choice();
	if (check('rock',computerSelection)=='draw')
	{
		text1.textContent = 'rock';
		text2.textContent = computerSelection;
		text3.textContent = 'Its a draw';

	}
	else if (check('rock',computerSelection)=='user')
	{
		text1.textContent = 'rock';
		text2.textContent = computerSelection;
		text3.textContent = 'User win';

	}
	else
	{
		text1.textContent = 'rock';
		text2.textContent = computerSelection;
		text3.textContent = 'Computer win';

	}
	
})
btn2.addEventListener('click',()=>{
	computerSelection = Computer_Choice();
	if (check('paper',computerSelection)=='draw')
	{
		text1.textContent = 'paper';
		text2.textContent = computerSelection;
		text3.textContent = 'Its a draw';
	}
	else if (check('paper',computerSelection)=='user')
	{
		text1.textContent = 'paper';
		text2.textContent = computerSelection;
		text3.textContent = 'User win';
	}
	else
	{
		text1.textContent = 'paper';
		text2.textContent = computerSelection;
		text3.textContent = 'Computer win';
	}
})
btn3.addEventListener('click',()=>{
	computerSelection = Computer_Choice();
	if (check('scissor',computerSelection)=='draw')
	{
		text1.textContent = 'scissor';
		text2.textContent = computerSelection;
		text3.textContent = 'Its a draw';
	}
	else if (check('scissor',computerSelection)=='user')
	{
		text1.innerHTML = 'scissor';
		text2.innterHTML = computerSelection;
		text3.textContent = 'User win';
	}
	else
	{
		text1.innerHTML = 'scissor';
		text2.innterHTML = computerSelection;
		text3.textContent = 'Computer win';
	}
})
