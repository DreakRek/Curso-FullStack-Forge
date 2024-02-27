
//*****************************************************************//
function a(){
    return 35;
}
console.log(a());
Predicción
35

//*****************************************************************//
function a(){
    return 4;
}
console.log(a()+a());
Predicción
8

//*****************************************************************//
function a(b){
    return b;
}
console.log(a(2)+a(4));
Predicción
6

//*****************************************************************//
function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));
Predicción
3
9

//*****************************************************************//
function a(b){
   return b*4;
   console.log(b);
}
console.log(a(10));
Predicción
40

//*****************************************************************//
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
Predicción
4

//*****************************************************************//
function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
Predicción
10 3
30

//*****************************************************************//
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
Predicción
0
1
2
3
4
5
6
7
8
9
4

//*****************************************************************//
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
Predicción
2
5
8
11

//*****************************************************************//
function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));
Predicción
0
1
2
3
4
5
6
7
8
9
0

//*****************************************************************//
function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
Predicción
imprimir los valores de j de 0 a 9 dentro de cada iteración de i, seguido por los valores de i de 0 a 9

//*****************************************************************//
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
Predicción
Habrá un error ya que j no está definido

//*****************************************************************//
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
Predicción
10

//*****************************************************************//
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
Predicción
15
10

//*****************************************************************//
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
Predicción
15
15