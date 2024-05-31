/*
	Modules are one of the most important features of any programming language. 
	Sadly, JavaScript lacks this very basic feature. But, that doesn’t stop us from writing modular code. We have two important standards, namely CommonJS and Asynchronous Module Definition (AMD) which let developers use modules in JavaScript. But, the next JavaScript version, known as ECMAScript 6, brings modules into JavaScript officially. 

	In ES6 each module is defined in its own file. The functions or variables defined in a module are not visible outside unless you explicitly export them. This means that you can write code in your module and only export those values which should be accessed by other parts of your app.
	To export certain variables from a module you just use the keyword export. Similarly, to consume the exported variables in a different module you use import.
*/

function generateRandom() {
    return Math.random();
}

function sum(a, b) {
    return a + b;
}

function sub(a, b) { //private, not exported
    return a - b;
}

export { generateRandom, sum }
//That’s it! The export keyword on the last line exports the two functions. As you can see, the exported functions are listed in curly braces separated by a comma. 
//You can also rename the values while exporting like this:


//OR//
//export {generateRandom as random, sum as doSum}



//---------------------------More Examples---------------------------//
	 //import the entire module
		//You can also import the entire module as an object and access exported values as properties. 
		//So, we can modify our code as following: 
		import 'utility' as utils;
			console.log(utils.generateRandom()); //logs a random number
			console.log(utils.sum(1, 2)); //3

			
	//Default Exports 
		//If you want to export a single value from the module then you can use default export. 
		//To demonstrate the usage of default exports let’s modify the utility module as shown below:
		
		//utility.js
		var utils = {
		  generateRandom: function() {
			return Math.random();    
		  },
		  sum: function(a, b) {
			return a + b;
		  }
		};

		export default utils;
		
		//app.js
		import utils from 'utility';

		console.log(utils.generateRandom()); //logs a random number
		console.log(utils.sum(1, 2)); //3
		export default utils; //exports the imported value
		
		
		
		//More: 
			//https://www.sitepoint.com/understanding-es6-modules/
			//https://hacks.mozilla.org/2015/08/es6-in-depth-modules/