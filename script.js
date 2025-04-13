let heading = document.getElementById("url");
let name  = document.getElementById("name");
let year  = document.getElementById("year");
let button  = document.getElementById("button");

button.addEventListener("click", function(event){
	event.preventDefault();

	let nameR = name.value.trim();
	let yearR = year.value.trim();
	let baseUrl =  https://localhost:8080/
	let params = [];
	
	if(nameR){
		params.push(`name=${nameR}`)
	}
	if(yearR){
		params.push(`year=${yearR}`)
	}
	
})