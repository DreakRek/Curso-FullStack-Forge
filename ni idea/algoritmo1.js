// 1.
for (var i = 0; i < 5; i++) {
    console.log(i);
}
// 0
// 1
// 2
// 3
// 4

// 2.
for (var i = 0; i < 5; i++) {
   i = i + 1;  
   console.log(i);
}
// Respuesta: imprime 1 en cada iteración del bucle.

// 3.
for (var i = 0; i < 5; i++) {
   i = i + 3; 
   console.log(i);
}
// Respuesta: imprime 3 en la primera iteración y luego 6 y 9.

// 4.
function y(num1, num2) {
   return num1 + num2;
}
console.log(y(2, 3))
console.log(y(3, 5))
// Respuesta: imprime 5 y 8 en la consola.

// 5.
function y(num1, num2) {
   console.log(num1);   
   return num1 + num2;
}
console.log(y(2, 3))
console.log(y(3, 5))
// Respuesta: imprime 2 y 3 en la primera llamada, y luego 3 y 5 en la segunda llamada.

// 6.
a = 15;
console.log(a);
function y(a) {
   console.log(a);   
   return a;
}
b = y(10);
console.log(b);
// Respuesta: imprime 15, 10 y 10 en la consola.

// 7.
a = 15;
console.log(a);
function y(a) {
   console.log(a);   
   return a * 2;
}
b = y(10);
console.log(b);
// Respuesta: imprime 15, 10 y 20 en la consola.