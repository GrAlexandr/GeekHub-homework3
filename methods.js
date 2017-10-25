;(function () {

	/*
	 1. Створити об'єкт.
	 В цьому об'єкті написати власні реалізації
	 наступних методів масиву:
	 pop(), push(), slice(), join(), reverse()
	 */

	var arrayMethods = {

		popNew: function () {
			var lastItem = this[this.length-1];

			this.length = this.length-1;

			return lastItem;
		},

		pushNew: function (arg) {
			this[this.length] = arg;
		},

		sliceNew: function (start, end) {
			var newArr = [];

			if(end === null) end = this.length;
			if(start < 0) start = this.length+start;

			for (var j = 0; start < end; start++, j++) {
				newArr[j] = this[start];
			}
			return newArr;
		},

		joinNew: function (separator) {
			var str = '',
					endLine;

			for (var i = 0; i < this.length; i++) {
				str += this[i] + separator;
			}
			endLine = str.substring(0, str.length-2);

			return endLine;
		},

		reverseNew: function() {
			for(var i = 0; i < Math.floor(this.length / 2); i++) {
				var oldItem = this[i];

				this[i] = this[this.length-(1+i)];
				this[this.length-(1+i)] = oldItem;
			}
			return this;
		}
	};


	//2. Оголосити масив для тестування методів ['a', 'b', 'c', 4, 5, 6]

	var arr = ['a', 'b', 'c', 4, 5, 6];


	 //3. Продемонструвати роботу кожного методу двома способами:

	 //3.1. викликаючи метод цього об'єкту, в контексті масиву

	function message () {
		console.log( 'методи об\'єкту в контексті масиву:' );
	}
	message ();

	// pop()
	console.log( 'method pop' );

	console.log( arrayMethods.popNew.call(arr) );
	console.log( arr );

	//push()
	console.log( 'method push' );

	arrayMethods.pushNew.call(arr, 'newItem');
	console.log( arr );

	//slice()
	console.log( 'method slice' );

	console.log( arrayMethods.sliceNew.call(arr, -5, 4) );

	//join()
	console.log( 'method join' );

	console.log( arrayMethods.joinNew.call(arr, ',') );

	//reverse()
	console.log( 'method reverse' );

	console.log( arrayMethods.reverseNew.call(arr) );

	console.log('===========================================');

	 //3.2. перевизначивши метод прототипу масиву

	console.log('методи прототипу масиву');

	var arr_1 = ['a', 'b', 'c', 4, 5, 6];

	// pop()
	console.log( 'method pop' );

	Array.prototype.pop = arrayMethods.popNew;

	console.log( arr_1.pop() );
	console.log( arr_1 );

	//push()
	console.log( 'method push' );

	Array.prototype.push = arrayMethods.pushNew;

	arr_1.push('GeekHub');
	console.log( arr_1 );

	//slice()
	console.log( 'method slice' );

	Array.prototype.slice = arrayMethods.sliceNew;

	console.log( arr_1.slice(-5, 4) );

	//join()
	console.log( 'method join' );

	Array.prototype.join = arrayMethods.joinNew;

	console.log( arr_1.join('; ') );

	//reverse()
	console.log( 'method reverse' );

	Array.prototype.reverse = arrayMethods.reverseNew;

	arr_1.reverse();
	console.log( arr_1 );

	console.log('===========================================');

})();