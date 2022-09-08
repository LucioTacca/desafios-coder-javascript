const productos = [
    {nombre: "cuadros", precio: 4000},
    {nombre: "ropa", precio: 7000},
    {nombre: "accesorios", precio: 500},
    {nombre: "textiles", precio: 700},
    {nombre: "cuentos", precio: 700},
];

let carrito = []

let seleccion = prompt("Desea comprar algo? Seleccione si o no")

while (seleccion != "si" && seleccion !="no") {
    alert ("Por favor seleccione si o no")
    seleccion = prompt ("Desea comprar algo? Seleccione si o no")
}

if (seleccion == "si") {
    alert ("a continuacion veras nuestra lista de productos")
    let todoslosProductos = productos.map (
        (producto) => producto.nombre + " " + "$" + producto.precio )
    alert (todoslosProductos.join ( " - "
    ))
}

else if (seleccion == "no") {
    alert ("Gracias por visitarnos, hasta pronto!")
}

while (seleccion !="no") {
let producto = prompt ("agregar producto al carrito")
let precio = 0 

if (producto == "cuadros" || producto == "ropa" || producto == "accesorios" || 
producto == "textiles" || producto == "cuentos") {

    switch(producto) {

        case "cuadros": 
        precio = 4000;
        break;

        case "ropa": 
        precio = 7000;
        break;

        case "accesorios": 
        precio = 500;
        break;

        case "textiles": 
        precio = 700;
        break;

        case "cuentos": 
        precio = 700;
        break;

        default:
            break;
    }

    let unidades = prompt("Cuantas unidades desea llevar")

    carrito.push({producto, unidades, precio})
    console.log(carrito)

}

else {
    alert ("No tenemos ese producto")
}

seleccion = prompt ("Desea seguir comprando?")

while (seleccion === "no"){

    alert ("Gracias por su compra")
    carrito.forEach ((carritoFinal) => {
        console.log( `producto: ${carritoFinal.producto}, Unidades: ${carritoFinal.unidades}, 
        total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}`)
    })
break
}

}

let total = 0;
carrito.map(item => {return total = item.precio * item.unidades + total})
alert(`El total a pagar por sus compra es total $${total}`);