;(function () {

	// 5. Рекурсія

	//5.1. Написати рекурсивну функцію для обчислення факторіалу

	function factorial(num) {
		return (num !== 1) ? num * factorial(num - 1) : 1;
	}

	console.log( 'factorial:' );
	console.log( factorial(5) );

	//5.2. Написати рекурсивну функцію для обчислення степені числа
	function power(x, n) {
		if (n !== 1) {
			return x * power(x, n - 1);
		} else {
			return x;
		}
	}

	console.log( 'power:' );
	console.log( power(5, 2) );

	//5.3. Написати рекурсивну функцію для обчислення суми цифр цілого
	//числа (наприклад, сума цифр числа 3742 буде 3+7+4+2 = 16)

	function sumDigitsRec(n) {
		var rem = n % 10;
		if (n >= 10) {
			rem += sumDigitsRec(Math.floor(n / 10));
		}
		return rem;
	}

	console.log( 'sum of digits:' );
	console.log( sumDigitsRec(3742) );

	/*
	 5.4. Виконати завдання 5.1 - 5.3 без використання рекурсії
	 і  визначити який варіант працює швидше
	 (наприклад, скільки часу треба на 10000 обчислень)
	 */

	//factorial
	//variant 1
	function factorial1(n) {
		var result = n;
		for (var i = 1; i < n; i++) {
			result *= (n - i);
		}
		return result;
	}

	console.log( 'factorial - variant 1:' );
	console.log( factorial(5) );

	//variant 2
	function factorial2(n) {
		var counter = 1,
			result = 1;
		while (counter <= n) {
			result *= counter;
			counter++;
		}
		return result;
	}

	console.log( 'factorial - variant 2' );
	console.log( factorial2(5) );

	//power
	function power2(x, n) {
		var result = x;
		for (var i = 1; i < n; i++) {
			result *= x;
		}
		return result;
	}

	console.log( 'power:' );
	console.log( power2(5, 2) );

	//sum of digits
	//variant1
	function sumDigits1(num) {
		var str = '' + num,
			arr = str.split(''),
			result = 0;
		for (var i = 0; i < arr.length; i++) {
			result += (+arr[i]);
		}
		return result;
	}

	console.log( 'sum of digits - variant 1' );
	console.log( sumDigits1(3742) );

	//variant2
	function sumDigits2(num) {
		var str = '' + num,
			result = 0;
		for (var i = 0; i < str.length; i++) {
			result += (+str[i]);
		}
		return result;
	}

	console.log( 'sum of digits - variant 2' );
	console.log( sumDigits2(3742) );

	//variant3
	function sumDigits3(n) {
		var sum = 0;
		while (n) {
			sum += n % 10;
			n = Math.floor(n / 10);
		}
		return sum;
	}

	console.log( 'sum of digits - variant 3' );
	console.log( sumDigits3(3742) );

	console.log('===========================================');

})();