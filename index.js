//You are given an array of numbers. Your task is to use iteration methods with arrow functions to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Filtering

Write code to perform the following tasks using the filter method with arrow functions:
Q1) Create a new array containing numbers that are divisible by 5.
*****************************************************************/

const HG = numbers.filter((x) => x % 5 == 0);
console.log(HG);
/*****************************************************************
Mapping

Write code to perform the following tasks using the filter method with arrow functions:
Q2) Create a new array that contains each number multiplied by 2.
*****************************************************************/
const UU = numbers.map((x) => x * 2);
console.log(UU);

/*****************************************************************
Combining Filtering and Mapping

Combine the filter and map methods to perform the following task with arrow functions: 
Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
*****************************************************************/

const LL = numbers.filter((x) => x >= 20).map((x) => x ** 2);

console.log(LL);
