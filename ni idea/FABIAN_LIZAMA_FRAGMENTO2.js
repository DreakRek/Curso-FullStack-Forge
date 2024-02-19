
//------------------------------------------------////Fragmento de código 1 
function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');
/*
hello()
|
|-->console.log('hello') 
|
|-->console.log('Dojo')  
*/

//------------------------------------------------//
//Fragmento de código 2
function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);
/*
var result = hello()
|
|-->hello()
|
|-->console.log('hello')  
|
|-->return 15
|
|-->console.log('result is', 15)  
*/

//------------------------------------------------//
//Fragmento de código 3
function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);
/*
var result = numPlus(3)
|
|-->numPlus(3)
|
|-->console.log('num is', 3)  
|
|-->return 3 + 15
|
|-->console.log('result is', 18)  
*/

//------------------------------------------------//
//Fragmento de código 4: hay un giro
var num = 15;
console.log(num);
function logAndReturn(num2){
   console.log(num2);   
   return num2;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);
/*
console.log(15)  
|
|-->logAndReturn(10)
|
|-->console.log(10)  
|
|-->return 10
|
|-->var 10 = logAndReturn(10)
|
|-->console.log(10)  
|
|-->console.log(15)  
*/

//------------------------------------------------//
//Fragmento de código 5
var num = 15;
console.log(num);
function timesTwo(num2){
   console.log(num2);   
   return num2*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);
/*
console.log(15)  
|
|-->timesTwo(10)
|
|-->console.log(10)  
|
|-->return 10 * 2
|
|-->var result = timesTwo(10)
|
|-->console.log(20)  
|
|-->console.log(15)  
*/

//------------------------------------------------//
//Fragmento de código 6
function timesTwoAgain(num) {
    console.log('num is', num);
    var y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);
/*
var result = timesTwoAgain(3) + timesTwoAgain(5)
|
|-->timesTwoAgain(3)
|
|-->console.log('num is', 3)  
|
|-->var y = 3 * 2
|
|-->return y
|
|-->timesTwoAgain(5)
|
|-->console.log('num is', 5)  
|
|-->var y = 5 * 2
|
|-->return y
|
|-->console.log('result is', 16)  
*/

//------------------------------------------------//
//Fragmento de código 7
function sumNums(num1, num2) {  
   return num1+num2;
}
console.log(sumNums(2,3))
console.log(sumNums(3,5))
/*
console.log(sumNums(2,3))  
|
|-->sumNums(2,3)
|
|-->return 2 + 3
|
|-->console.log(sumNums(3,5))  
|
|-->sumNums(3,5)
|
|-->return 3 + 5
*/

//------------------------------------------------//
//Fragmento de código 8
function printSumNums(num1, num2) {
   console.log(num1);   
   return num1+num2;
}
console.log(printSumNums(2,3))
console.log(printSumNums(3,5))
/*
console.log(printSumNums(2,3))  
|
|-->printSumNums(2,3)
|
|-->console.log(num1)  
|
|-->return num1 + num2
|
|-->console.log(printSumNums(3,5))  
|
|-->printSumNums(3,5)
|
|-->console.log(num1)  
|
|-->return num1 + num2
*/

//------------------------------------------------//
//Fragmento de código 9
function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);
/*
var result = sumNums(2,3) + sumNums(3,5)
|
|-->sumNums(2,3)
|
|-->var sum = 2 + 3
|
|-->console.log('sum is', 15)  
|
|-->return sum
|
|-->sumNums(3,5)
|
|-->var sum = 3 + 5
|
|-->console.log('sum is', 8)  
|
|-->return sum
|
|-->console.log('result is', 13)  
*/

//------------------------------------------------//
//Fragmento de Código 10: un desafío arduo así que tómalo con calma
function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);
/*
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3))
|
|-->sumNums(2,3)
|
|-->var sum = 2 + 3
|
|-->console.log('sum is', 5)  
|
|-->return sum
|
|-->sumNums(3,sumNums(2,1))
|
|-->sumNums(2,1)
|
|-->var sum = 2 + 1
|
|-->console.log('sum is', 3)  
|
|-->return sum
|
|-->var sum = 3 + 3
|
|-->console.log('sum is', 6)  
|
|-->return sum
|
|-->sumNums(sumNums(2,1),sumNums(2,3))
|
|-->sumNums(2,1)
|
|-->var sum = 2 + 1
|
|-->console.log('sum is', 3)  
|
|-->return sum
|
|-->sumNums(2,3)
|
|-->var sum = 2 + 3
|
|-->console.log('sum is', 5)  
|
|-->return sum
|
|-->console.log('result is', 14)  
*/