document.getElementById('email').addEventListener("input", function () {
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	const errorText = document.getElementById("errorText");

	if(!emailRegex.test(this.value)){
		this.style.border = "1px solid hsl(354, 100%, 66%)";
		errorText.style.display = "block";
	} else {
		this.style.border = "1px solid hsl(0, 0%, 59%)";
		errorText.style.display = "none";
	}
});

