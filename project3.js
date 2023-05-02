var tempInput = document.getElementById("temp");
var resultOutput = document.getElementById("result");

function clearText(){
	localStorage.removeItem("temp");
	document.getElementById("temp").value="";
}
function starter(){
	getTemp();
}


function getTemp(){
	var lastItem = localStorage.getItem("lastTemp");
	if (lastItem) {
		document.getElementById("temp").value = lastItem;
	}
}
function convertToFahrenheit() {
	  var temp = tempInput.value;
        var result = temp * 1.8 + 32;
        resultOutput.innerHTML = temp + " degrees Celsius is " + result + " degrees Fahrenheit.";
        saveTemp(temp);
}

function convertToCelsius() {
	  var temp = tempInput.value;
        var result = (temp - 32) / 1.8;
        resultOutput.innerHTML = temp + " degrees Fahrenheit is " + result + " degrees Celsius.";
        saveTemp(temp);
}

 function saveTemp(temp) {
        localStorage.setItem("lastTemp", temp);
 }
      
 var lastTemp = localStorage.getItem("lastTemp");
