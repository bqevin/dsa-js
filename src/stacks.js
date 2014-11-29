"use strict";

function Stack(){
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.clear = clear;
	this.length = length;
	this.toString = toString;
}

function push(element){
	this.dataStore[this.top++] = element;
	return this; //to enable chaining
}


function pop(){
	return this.dataStore[--this.top];
}

function clear(){
	this.top = 0;
}

function length(){
	return this.top;
}

//returns the top element of the stack by accessing
//the element at the top-1 position of the array
function peek(){
	return this.dataStore[this.top-1];
}

function toString(){
	//display only "allowable content"
	return this.dataStore.slice(0,this.top);
}

//Testing the implementations

var s = new Stack();

s.push("C++").push("ES6").push("CSS").push("HTML5");

print(s.toString());

print(s.peek());

print(s.pop());

print(s.toString());

//Print all stuff, while popping them out
while(s.peek()){
	print(s.peek());
	s.pop();
}


//Applications

//Multiple base conversion using stacks

//A stack can be used to covert a number from one base
//to another base. Given a number n, which we want to
//convert to a base, b, here is the algo:

//1. The rightmost didgit of n is n % b. Push this digit into stack.
//2. Replace w with n/b
//3. Repeat steps 1 and 2 until n=0 and there are no significant digits remaining
//4. Build the converted number string by popping the stack until the stack is empty

function mulBase(num,base){
	var s = new Stack();

	do{
		s.push(num%base);
		num = Math.floor(num / base);
	}while(num > 0);

	var converted = "";
	while(s.length() > 0){
		converted += s.pop();
	}
	return converted;
}

//Ex. converting 32 to base 2 (binary)

print("50: ", mulBase(50,2));

print("5: ", mulBase(5,2));

//Palindrome example

function isPalindrome(word){
	var s = new Stack();

	for(var i=0; i<word.length; ++i){
		s.push(word[i]);
	}

	var rword = "";

	while(s.length() > 0){
		rword += s.pop();
	}

	if(word == rword){
		return true;
	}
	return false;
}

var words = ["hello","mum","dad","dude","boom","poop"];

var palis = words.filter(isPalindrome);

print("Palindromes: ", palis);

//Simulating recursion

//normal recursion example:

function factorial(n){
	if(n===0){
		return 1;
	}else{
		return n * (factorial(n-1));
	}
}

//To simulate computing 5! using a stack, first push
//the numbers 5 through 1 onto a stack. Then, inside
//a loop, pop each number and multiply the number by the
//running product, resulting in the correct answer, 120


function fact(n){
	var s = new Stack();
	while(n > 1){
		s.push(n--);
	}

	var product = 1;
	while(s.length() > 0){
		product *= s.pop();
	}
	return product;
}

print("5! => ", fact(5));

