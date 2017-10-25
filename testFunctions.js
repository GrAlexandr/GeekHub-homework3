;(function () {

	console.log( 'визначити який варіант працює швидше: ' );
	console.log( "==============================================" );

	//performance
	function perform(f, arg1, arg2) {
		var timeLoop = performance.now();
		for (var i = 1; i < 10000; i++) f(arg1, arg2);

	return timeLoop = performance.now() - timeLoop;
	}


	//Benchmarking
	function bench(f, arg1, arg2) {
		for (var i = 0; i < 10000; i++) f(arg1, arg2);
	}

//1) factorial
	function factorial1(n) {
		var result = n;
		for (var i = 1; i < n; i++) {
			result *= (n - i);
		}
		return result;
	}

	function factorial2(n) {
		var counter = 1,
				result = 1;
		while (counter <= n) {
			result *= counter;
			counter++;
		}
		return result;
	}

	function factorialRec(num) {
		return (num !== 1) ? num * factorialRec(num - 1) : 1;
	}

	//performance
	console.log( "performance" );
	console.log( "factorial:" );

	console.log( "цикл варіант №1: " + perform(factorial1, 100) );
	console.log( "цикл варіант №2: " + perform(factorial2, 100) );

	console.log( "рекурсія: " + perform(factorialRec, 100)  );

	console.log("Варіант цикла №1, різниця в: " + (perform(factorialRec, 100) / perform(factorial1, 100)) + " раз");
	console.log("Варіант цикла №2, різниця в: " + (perform(factorialRec, 100) / perform(factorial2, 100)) + " раз");

	console.log( "==============================================" );

	//Benchmarking

	console.log( "Бенчмаркинг" );

	console.time("All Benchmarks");

	console.time("factorial1");
	bench(factorial1, 100);
	console.timeEnd("factorial1");

	console.time("factorial2");
	bench(factorial1, 100);
	console.timeEnd("factorial2");

	console.time("factorialRec");
	bench(factorialRec, 100);
	console.timeEnd("factorialRec");

	console.timeEnd("All Benchmarks");

	console.log( "==============================================" );

//2) power
	function power(x, n) {
		var result = x;

		for (var i = 1; i < n; i++) {
			result *= x;
		}
		return result;
	}


	function powerRec(x, n) {
		if (n !== 1) {
			return x * powerRec(x, n - 1);
		} else {
			return x;
		}
	}

	//performance
	console.log( "performance" );
	console.log( "power:" );

	console.log( "цикл: " + perform(power, 50, 7) );

	console.log( "рекурсія: " + perform(powerRec, 50, 7)  );

	console.log("Різниця в " + (perform(powerRec, 50, 7) / perform(power, 50, 7)) + " раз");

	console.log( "==============================================" );

	//Benchmarking

	console.log( "Бенчмаркинг" );

	console.time("All Benchmarks");

	console.time("power");
	bench(power, 50, 7);
	console.timeEnd("power");

	console.time("powerRec");
	bench(powerRec, 50, 7);
	console.timeEnd("powerRec");

	console.timeEnd("All Benchmarks");

	console.log( "==============================================" );


//3) sum of digits
	function sumDigits1(num) {
		var str = '' + num,
			result = 0;
		for (var i = 0; i < str.length; i++) {
			result += (+str[i]);
		}
		return result;
	}

	function sumDigits2(num) {
		var str = '' + num,
			arr = str.split(''),
			result = 0;
		for (var i = 0; i < arr.length; i++) {
			result += (+arr[i]);
		}
		return result;
	}

	function sumDigits3(n) {
		var sum = 0;
		while (n) {
			sum += n % 10;
			n = Math.floor(n / 10);
		}
		return sum;
	}

	function sumDigitsRec(n) {
		var rem = n % 10;
		if (n >= 10) {
			rem += sumDigitsRec(Math.floor(n / 10));
		}
		return rem;
	}

	//performance
	console.log( "performance" );
	console.log( "sum of digits:" );

	console.log( "цикл 1: " + perform(sumDigits1, 3742) );
	console.log( "цикл 2: " + perform(sumDigits2, 3742) );
	console.log( "цикл 3: " + perform(sumDigits3, 3742) );

	console.log( "рекурсія: " + perform(sumDigitsRec, 3742)  );

	console.log("цикл 1, різниця в: " + (perform(sumDigitsRec, 3742) / perform(sumDigits1, 3742)) + " раз");
	console.log("цикл 2, різниця в: " + (perform(sumDigitsRec, 3742) / perform(sumDigits2, 3742)) + " раз");
	console.log("цикл 3, різниця в: " + (perform(sumDigitsRec, 3742) / perform(sumDigits3, 3742)) + " раз")

	console.log( "==============================================" );

	//Benchmarking

	console.log( "Бенчмаркинг" );

	console.time("All Benchmarks");

	console.time("sumDigits1");
	bench(sumDigits1, 3742);
	console.timeEnd("sumDigits1");

	console.time("sumDigits2");
	bench(sumDigits2, 3742);
	console.timeEnd("sumDigits2");

	console.time("sumDigits3");
	bench(sumDigits3, 3742);
	console.timeEnd("sumDigits3");

	console.time("sumDigitsRec");
	bench(sumDigitsRec, 3742);
	console.timeEnd("sumDigitsRec");

	console.timeEnd("All Benchmarks");

})();