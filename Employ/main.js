let input = document.getElementById("myRange");
let output = document.getElementById("value");
output.innerHTML = input.value;

input.oninput = function () {
    output.innerHTML = this.value;
}




$('select').styler({
	selectSearch: true
});


