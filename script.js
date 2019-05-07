$(function(){//для проверки, что все элементы страницы загрузились

	$('#calculate_button').click(function(){
		//забираем в переменные значения полей ввода с соответствующими идентификаторами и переводим полученные значения в числа
		var firstNumber = Number($('#first').val());
		var secondNumber = Number($('#second').val());
		var summ = firstNumber + secondNumber;
		
		//непосредственно вывод суммы через всплывающее окно
		alert("Результат:" + '\r\n' + summ);
	}
		)
});
