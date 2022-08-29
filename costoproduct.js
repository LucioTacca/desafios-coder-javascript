function calcularPrecio (precioProducto, cantidadProducto, porcentajeDescuento) {

let descuento = (precioProducto * porcentajeDescuento) / 100;

let precioConDescuento = precioProducto - descuento;

return (precioConDescuento * cantidadProducto) ;
}


let producto = parseInt(prompt("Ingrese el precio del producto que desea comprar:"));

let cantidad = parseInt(prompt("Ingrese la cantidad de unidades que desea comprar de esta producto:"));

let descuento = parseInt(prompt("Ingresa el % de descuento:")) 


let precioFinal = calcularPrecio(producto, cantidad, descuento);

alert("El precio total de tu compra es $" + precioFinal);

