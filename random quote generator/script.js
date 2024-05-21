const btn = document.querySelector("button");
const api = "https://api.quotable.io/random";
const author = document.querySelector(".author");
const quote = document.querySelector("#quote");
async function getQuote(url){
	const response = await fetch(url);
	var data = await response.json();
	quote.innerHTML = data.content;
	author.innerHTML = data.author;
	console.log(data);
}
btn.addEventListener('click',()=>{
	getQuote(api);
})