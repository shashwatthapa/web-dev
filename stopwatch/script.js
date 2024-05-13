var minutes = 0,seconds = 0,ms = 0
var start = document.querySelector('.start')
var stop = document.querySelector('.stop')
var reset = document.querySelector('.reset')
var time = document.querySelector('.time')
start.addEventListener('click',function(){
	setInterval(run,10)
	function run()
	{
		ms = ms + 1
		time.textContent = m + ": "+s +": " + ms
	}
})
