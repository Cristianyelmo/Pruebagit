const process = require("process");
const {leerJSON, verDetalle, agregarProducto, editarProducto, eliminarProducto, buscarProducto} = require("./modules/productos");

const comando = process.argv[2];

let id;
let nombre;
let precio;
let oferta;

switch (comando) {
    case "listar": //if
        const productosArray = leerJSON();

        productosArray.forEach(({id, nombre, precio},index) => {
                console.log(
                    `${index + 1}.- ${nombre} - $${precio}`
                );
            });

        break;

    case "detalle": //else if
        id = +process.argv[3];
        console.log(verDetalle(id));
        break;

    case "agregar":
        nombre = process.argv[3];
        precio = process.argv[4];
        oferta = process.argv[5];
        console.log(agregarProducto(nombre, precio, oferta));
        break;
    
    case "editar" :
        id = +process.argv[3];
        precio = +process.argv[4];
        oferta = process.argv[5];

        console.log(editarProducto(id,precio,oferta));
    
    break
    case "eliminar":
        id = +process.argv[3];
        console.log(eliminarProducto(id))
    break

    case "buscar" :
        keyword = process.argv[3];
        console.log(buscarProducto(keyword))

    break
        
         case "editar2" :
        keyword = process.argv[3];
        console.log(buscarProducto(keyword))

    break

    case undefined: //else if
        console.log("Debes ingresar un comando!!!");
        break;

    default: //else
        console.log("Comando incorrectoxd");
        break;
}
