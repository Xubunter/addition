function displayResult(){
	var num1 = parseFloat(document.getElementById('num1').value);
	var num2 = parseFloat(document.getElementById('num2').value);
	/* Проверка корректности ввода*/
	document.getElementById('num1').style.backgroundColor = "#FFFFFF";
	document.getElementById('num2').style.backgroundColor = "#FFFFFF";
	/* Проверка корректности ввода*/
	var errInput = false;
	if (isNaN(num1)==true){
		document.getElementById('num1').style.backgroundColor = "#FF0000";
		errInput = true;
	} 
	if (isNaN(num2)==true){
		document.getElementById('num2').style.backgroundColor = "#FF0000";
		errInput = true;
	} 
	if (errInput == true) {
		document.getElementById('result').value = "Ошибка ввода"
		return;
	}
	/* Подсчет и вывод результата*/
	var sum = num1*1000 + num2*1000; // Умножение для корректного сложения float чисел  
	document.getElementById('result').value = sum/1000;
}