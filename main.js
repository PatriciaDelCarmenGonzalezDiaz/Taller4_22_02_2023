//precios de los helados
//Añadir los precios de los helados
var precios = [['Bonice', 400],
              ['Palito de helado de agua', 1000],
              ['Palito de helado de crema', 2200],
              ['Bombón helado con arequipe', 1500],
              ['Bombón helado con chispas de chocolate', 2500],
              ['Bombón helado con fresas', 2800],
              ['Medio litro de helado', 2000]];

//Dinero que tienen los tres usuarios
var usrs = [];
var nombre = [];
for (let i=0; i<3; i++) {
   usrs.push(Number(prompt(`Cuanto dinero tiene el Usuario ${i} ?`)));
   nombre.push(prompt(`Cuál es el nombre del Usuario ${i} ?`));
}
// Buscar que pueden comprar
//clasificamos los precion de menor a mayor
precios.sort((a, b) => a[1] - b[1]);
var compra = [];
//buscamos que puede comprar
for (let j=0; j<precios.length; j++) {
    console.log(precios[j]);
}
for (let i=0; i<usrs.length; i++) {
    let mayor = 0;
    for (let j=0; j<precios.length; j++) {
        if (usrs[i] >= precios[j][1]) {
            mayor = j;
        } else {
            break;
        }
    }
    compra.push({Nombre: nombre[i], Helado: precios[mayor][0], Valor:precios[mayor][1] , Vueltos: usrs[i]-precios[mayor][1]});
}

console.table(compra);

