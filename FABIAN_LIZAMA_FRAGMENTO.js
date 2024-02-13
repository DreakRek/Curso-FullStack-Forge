//------------------------------------------------//
function muestraInformaciónContacto() {
    var auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}
/*
muestraInformaciónContacto()
|
|---> auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345]
|
|---> console.log(auntContactInfo)
*/
//------------------------------------------------//
function muestraListaDeCompras() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croqueta de papa");
    console.log(frozen);
}
/*
muestraListaDeCompras()
|
|---> produce = ["manzanas", "naranjas"]
|
|---> frozen = ["brócoli", "helado"]
|
|---> frozen.push("croqueta de papa")
|
|---> console.log(frozen)
*/
//------------------------------------------------//
var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);
/*
movieLibrary = ["Bambi", "E.T.", "Toy Story"]
|
|---> movieLibrary.push("Zoro")
|
|---> movieLibrary[1] = "Beetlejuice"
|
|---> console.log(movieLibrary)
*/