let heading = document.getElementById("url");
let name  = document.getElementById("name");
let year  = document.getElementById("year");
let button  = document.getElementById("button");

button.addEventListener("click", function(event) {
	event.preventDefault();
	
	let nameValue = name.value.trim();
	let yearValue = year.value.trim();
	let baseUrl = "https://localhost:8080/";

	let params = [];

	if (nameValue) {
		params.push(`name=${nameValue}`);
	}

	if (yearValue) {
		params.push(`year=${yearValue}`);
	}

	let finalUrl = params.length > 0 ? `${baseUrl}?${params.join("&")}` : baseUrl;

	heading.innerHTML = `text ${finalUrl}`;
});
