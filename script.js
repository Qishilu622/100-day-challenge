/* SCOPE

var fun = 5;

function funestFunction() {
	console.log(fun);
}
*/

/* TERNARY OPERATOR

condition ? expr1 : expr2;

function isUserValid(bool) {
	return bool;
}
var answer = isUserValid(true) ? "You may eneter" : "Acess denied";

var automatedAnswer = "Your acocunt number is " + (isUserValid(false) ? "1234" : "Not aviable");
*/

/*	SWITCH

function moveCommand(direction) {
	var whatHappens;
	switch (direction) {

		case "foward":
			whatHappens = "you may meet a monster";
			break;
		case "back":
			whatHappens = "you arrived home";
			break;
		case "left":
			whatHappens = "you run into a troll";
			break;
		case "right":
			whatHappens = "you foud a river";
			break;
		default:
			whatHappens = "please eneter a valid direction";
	}
	return whatHappens;
 }
 */



/* let + const


const player = 'Bobby';
let experience = 100;
let wizradlvl = false;

if (experience > 90) {
	let wizradlvl = true;
}

const obj = {
	player: 'Bobby',
	experience: 100,
	wizradlvl: false
}
*/
//Destructuring
/*
const obj = {
	player: 'Bobby',
	experience: 100,
	wizradlvl: false
}

const player = obj.player;
const experience = obj.experience;
let wizradlvl = obj.wizradlvl;

const { player, experience } = obj;
let { wizradlvl } = obj;

// Object properties
const name = 'John Snow';

const obj1 = {
	[name]: 'hello',
	['ray' + 'smith']: 'hihihi'
}

const a = "simon";
const b = false;
const c = {};

const obj2 = {
	a, 
	b,
	c
}


// Template string  alt + 96 
 
const name = "Nicol";
const age = 19;
const favouriteanimal = "horse"; 

const aboutHer = `Hello ${name} your favourite animal is ${favouriteanimal} and u look like ${age + 1} yo`;


// default argumnets
function greet(name = '', age = 30, pet = 'cat') {
	return `Hello ${name} your favourite animal is ${favouriteanimal} and u look like ${age + 1} yo`;
}

//symbol
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo'); 

// arrow functions
function add(a, b) {
	return a + b;
}
const add2 = (a, b) => a + b;
*/

// Closures - a function ran. The function executed. Its never gonna ren again
// but its gonna remeber that there are references to those variables 
// so the child scope always has access to the parent scope

/* 
const first = () => {
	const greet = 'Hi';
	const second = () => {
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();


// Currying 

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)

// Compose
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);

*/

//Advanced arrays

const array = [1, 2, 5, 10, 16];
const double = []
const newArray = array.forEach((num)=> {
	double.push(num * 2);
});

console.log(double);

// map, filter, reduce 

//map
const mapArray = array.map(num => num * 2);

console.log(mapArray);

//filter  
const filterArray = array.filter(num => num === 5);

console.log(filterArray); 

// reduce 
const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num
}, 0);
console.log(reduceArray, 'reduce');














