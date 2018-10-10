1. // Verbal Questions
a. A parameter is when you are defining a function. An argument is what you place when you are calling that function. 
b. When you return a function you are producing the value however it may not print in the console. With console.log you are p rinting to the console the result of the function. 
c. The function is called and required to be completed. It is implied that the arguments should be completed. 

2. // Palindrome

const checkPalindrome = (word) => {
	var splitString = word.split("")
	var reverseArray = splitString.reverse();
	var joinArray = reverseArray.join("")
	console.log(word.split("").reverse().join("")); 
	if (word === word.split("").reverse().join("")) {console.log(true)}
		else {console.log(false)};
}
3. // Digit Sum

const sumDigits = (num) => { 
	var a = num.toString().split('')

}

4. // Pythagoras

const calculateSide = (num1, num2) => {
	var a = Math.pow(num1, 2);
	var b = Math.pow(num2, 2);
	var c = a + b;
	var d = Math.sqrt(c, 2)
	console.log(d);
}
calculateSide(8, 6);

5. // Sum Array

6. a// Prime Numbers

const checkPrime = (value) => {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}
checkPrime(7)

b
