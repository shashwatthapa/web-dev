let counter = 0;
const incrementBtn = document.querySelector('#inc');
const decrementBtn = document.querySelector('#sub');
const resetBtn = document.querySelector('#res');
const text = document.querySelector('h1');

function colorChange(counter)
{
	if (counter == 0){
		text.style.color = 'black';
	}
	else if (counter>0)
	{
		text.style.color = 'green';
	}
	else
	{
		text.style.color = 'red';
	}
}

incrementBtn.addEventListener('click',()=>{
	counter++;
	colorChange(counter);
	text.innerHTML = counter;

}) 

decrementBtn.addEventListener('click',()=>{
	counter--;
	colorChange(counter);
	text.innerHTML = counter;
})

resetBtn.addEventListener('click',()=>{
	counter = 0;
	colorChange(counter);
	text.innerHTML = counter;
})

