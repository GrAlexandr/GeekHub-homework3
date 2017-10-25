;(function () {

	/*
	 4. Зробіть, щоб в чисел з'явився метод sum(),
	 який отримує інше число і на виході дає їх суму,
	 наприклад x.sum(y) === x + y
	 */

	Number.prototype.sum = function (y) {
		if(isNaN(y)) {
			console.log('argument is not a number!');
		} else {
			return this + y;
		}

	};

	var x = 2;

	console.log( 'Method sum() of the number:' );
	console.log( x.sum(3) )

	console.log('===========================================');

})();