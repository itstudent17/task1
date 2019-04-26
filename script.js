$(function(){



	$('#calculate_button').click(function(){
		//забираем в переменные значения полей ввода
		//с соответствующими идентификаторами и переводим
		//полученные значения в числа
		var firstNumber = Number($('#first').val());
		var secondNumber = Number($('#second').val());
		var summ = firstNumber + secondNumber;
		//непосредственно вывод
		alert("Результат:" + '\r\n' + summ);


	}


		)




























});
