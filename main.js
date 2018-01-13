// console.log('Hello Husky!');
// // Lecture: variables
// var name = 'Husky';
// console.log(name);
//
// var lastName = 'Smith';
// console.log(lastName);
//
// var age = 26;
// console.log(age);
//
// var fullAge = true;
// console.log(fullAge);
//
// var you = 'john';
// var are = 26;
//
// console.log(you + are);
// console.log(are + are);
//
// var jacob, isMarried;
//
// // console.log(jacob);
//
// jacob = 'teacher';
// isMarried = false;
//
// console.log(you + ' ' + are + ' ' + jacob + ' ' +isMarried);
//
// var myLastName = prompt('what is thr last name?');
// console.log(myLastName);
//
// alert(you + ' ' + are + ' ' + jacob + ' ' +isMarried);
//

// // lecture: operators
// var now = 2016;
// var birthYear = 2016 - 26;
//
// birthYear = now - 26 * 2;
// // 2016 - 52 = 1964
//
// console.log(birthYear);
//
// var ageJohn = 30;
// var ageMark = 30;
// console.log(ageJohn);
// ageJohn = (3 + 5) * 4 - 6;
// console.log(ageJohn);
// ageJohn++;
// console.log(ageJohn);

// Lecture: if/else statements
//
// var name = 'John';
// var age = 26;
// var isMarried = 'no';
//
// if (isMarried === 'yes') {
//     console.log(name + ' is married!');
// } else {
//     console.log(name + ' will hopefully marry soon.');
// }
//
// if (23 == '23') {
//     console.log('loose equality: true');
// } else {
//     console.log('loose equality: false');
// }
//
// if (23 === '23') {
//     console.log('strict equality: true');
// } else {
//     console.log('strict equality: false');
// }

// Lecture: boolean logic and switch
//
// var age = 16;
//
// if (age < 20) {
//     console.log('John is a teenager');
// } else {
//     console.log('John is a man.');
// }
//
// var job = 'teacher';
//
// job = prompt('What does John do?');
//
// switch (job) {
//     case 'teacher':
//         console.log('John teaches kids');
//         break;
//     case 'driver':
//         console.log('John drives a car');
// }

// Lecture: Functions
//
// function calculateAge(yearOfBirth) {
//     var age = 2016 - yearOfBirth;
//     return age;
// }
//
// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1969);
// console.log(ageJohn);
// console.log(ageMike);
//
// function yearsUntilRetirement(name, yearOfBirth) {
//     var age = calculateAge(yearOfBirth);
//     var retirement = 65 - age;
//     console.log(name + ' retires in ' + retirement + ' years.');
// }
//
// yearsUntilRetirement('John', 1990);

// Lecture: Statements and Expressions
//
// function someFun(par) {
//
// }
//
// var someFun = function (par) {
//
// }
// Lecture: Arrays
//
// var names = ['John', 'Jane', 'Mark'];
// var years = new Array(1990, 1969, 1948);
//
// console.log(names[2]);
// names[1] = 'Ben';
// console.log(names);
// console.log(years);
//
// var John = ['John', 'Smith', 1990, 'teacher', false];
// John.push('blue');
// John.unshift('Mr.');
// John.pop();
//
// console.log(John);
//
// alert(John.indexOf('Smith'));
//

// Lecture: Objects
//
// var john = {
//     name: 'John',
//     lastName: 'Smith',
//     yearOfBirth: 1990,
//     job: 'teacher',
//     isMarried: false
// };
//
// console.log(john.lastName);
//
// var xyz = 'job';
// console.log(john[xyz]);
//
// john.lastName = 'Miller';
//
// console.log(john);
//
// var jane = new Object();
// jane.name = 'Jane';
// jane.lastName = 'Smith';

// Lecture: Objects and Methods
//
// var john = {
//     name: 'John',
//     lastName: 'Smith',
//     yearOfBirth: 1990,
//     job: 'teacher',
//     isMarried: false,
//     family: ['Jane', 'Mark', 'Bob'],
//     calculateAge: function (yearOfBirth) {
//         return 2016 - yearOfBirth;
//     }
// };
//
// console.log(john);
// console.log(john.calculateAge(1990));

// Lecture: Loops
//
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
//
// for (var v = 0; v < names.length; v++) {
//     console.log(names[v]);
// }
//
// for (var f = names.length - 1; f >= 0; f--) {
//     console.log(names[f]);
// }

var g = 0;
while (g < names.length) {
    console.log(names[g]);
    g++;
}