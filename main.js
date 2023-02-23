//Pregunto si quiere el huevo frito.
//Si me dice que si, lo frio, si me dice que no, lo hago hervido.
//Una vez cocinado le pregunto si quiere sal en el huevo.
//Si me dice que no lo sirvo en el Plato. Si me dice que si le hecho sal y después lo sirvo en el plato.

let frito = confirm("Quieres un huevo frito?");
let mensaje = "En el plato esta servido ";
if (frito) {
    hervido = false;
    mensaje += "un huevo frito";
} else {
    mensaje += "un huevo cocido";
}
let sal = confirm("Quiere sal en el huevo?");
if (sal) {
    mensaje += ", y tiene sal";
} else {
    mensaje += ", y no tiene sal"
}
console.log(mensaje); 
