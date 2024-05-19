const slider = document.querySelector('#slide');
const length = document.querySelector("#length");
function updateSlider(){
	length.innerHTML = slider.value;
}
slider.addEventListener('input',updateSlider);
