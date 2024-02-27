// 1. Obtén del 1 al 255
function obtenerDel1Al255() {
  let numeros = [];
  for (let i = 1; i <= 255; i++) {
    numeros.push(i);
  }
  return numeros;
}

// 2. Consigue pares hasta 1000
function sumaParesHasta1000() {
  let suma = 0;
  for (let i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
      suma += i;
    }
  }
  return suma;
}

// 3. Suma impares hasta 5000
function sumaImparesHasta5000() {
  let suma = 0;
  for (let i = 1; i <= 5000; i++) {
    if (i % 2 !== 0) {
      suma += i;
    }
  }
  return suma;
}

// 4. Itera un array
function sumaArray(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  return suma;
}

// 5. Encuentra el mayor (max)
function encuentraMayor(array) {
  let maximo = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maximo) {
      maximo = array[i];
    }
  }
  return maximo;
}

// 6. Encuentra el promedio (avg)
function encuentraPromedio(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  return suma / array.length;
}

// 7. Array de impares
function arrayImpares() {
  let impares = [];
  for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
      impares.push(i);
    }
  }
  return impares;
}

// 8. Mayor que Y
function mayoresQueY(array, Y) {
  let mayores = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > Y) {
      mayores.push(array[i]);
    }
  }
  return mayores;
}
// 9. Cuadrados
function cuadrados(array) {
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i] * array[i];
    }
  }
  
// 10. Negativos
function reemplazarNegativosConCero(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      array[i] = 0;
    }
  }
}

// 11. Max/Min/Avg
function maxMinAvg(array) {
  let maximo = encuentraMayor(array);
  let minimo = Math.min(...array);
  let promedio = encuentraPromedio(array);
  return [maximo, minimo, promedio];
}

// 12. Intercambia Valores
function intercambiaValores(array) {
  if (array.length >= 2) {
    let temp = array[0];
    array[0] = array[array.length - 1];
    array[array.length - 1] = temp;
  }
}

// 13. De Número a String
function reemplazarNegativosConDojo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      array[i] = 'Dojo';
    }
  }
}
  