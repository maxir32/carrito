//imprime los objetos cursos.
function imprimeCurso(array){
    for (obj of array) {
        console.log(obj);
        }
}
//Esta funcion me imprime los objetos productos con los atributos que quiera mostrar en un alert.
function impCursos(array){
    let ListCurso= array.map((array)=>"Id: "+array.id+" "+"Nombre: "+ array.nombre+" "+" Tipo: "+array.tipo+ " "+"Cantidad:" +array.cantidad
    + " "+"Descripcion: " + array.desc+" "+"Precio: " + array.precio+" ");
    alert(ListCurso.join(" -|- "));
}
// esta funcion agrega al array carrito los productos cantidades de cada uno y el precio. 
function agregarAlCarrito(seleccion, array){
    while(seleccion!="no".toUpperCase()){
        let producto=parseInt(prompt("Ingrese el numero de Id del producto"));
        let precio=0;
        switch(producto){
                case 1:
                    precio=2000;
                break;
                case 2:
                    precio=2500;
                break;
                case 3:
                    precio=3000;
                break;
                case 4:
                    precio=4000;
                break;
                case 5:
                    precio=2000;
                break;
                default:
                break;

        }
        let unidades=parseInt(prompt("Ingrese las personas que asistiran al curso"));
        array.push({producto, unidades,precio})
        console.log(array);
        seleccion=prompt("Seguir comprando");


    }
    
}
//Esta funcion me devuelve en consola el producto la cantidad y el total del precio por esos productos.
function totales(argumento,array){
    alert("gracias por la compra del curso");
    array.forEach(carritoFinal => {
        console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
        Total a pagar por los producto ${carritoFinal.unidades*carritoFinal.precio}`)
    });
}
//Esta funcion devuelve por consola el total a pagar por la compra.
function totalFactura(array){
    const total=array.reduce((acumulador,el)=>acumulador+el.precio*el.unidades,0);
    console.log(`Total de la factura: ${total}`)
}


//Comienzo creando el stock de productos  
const Productos = [
    {id: 1, nombre: "Taller para Adolescentes", tipo: "taller", cantidad: 20, desc: "Valor de la Amistad", precio: 2000},
    {id: 2, nombre: "Taller de Orientacion Vocacional", tipo: "taller", cantidad: 20, desc: "Mi lugar en el Mundo", precio: 2500},
    {id: 3, nombre: "Taller de Teatro", tipo: "teatro", cantidad: 15, desc: "Workshop Intenso", precio: 3000},
    {id: 4, nombre: "Diplomatura en Psicoterapia", tipo: "diplomatura", cantidad: 25, desc: "Actualizacion y Profundizacion en Psicologia Gestaltica Aplicada", precio: 4000},
    {id: 5, nombre: "Pablo Chamorro", tipo: "taller", cantidad: 20, desc: "Configuraciones Sistemicas", precio: 2000},    
];

// Creo el array vacio, el carrito donde voy a enviar los productos seleccionados 
let carrito =[];

// creo la variable booleana en false para ingresar al bucle.
let ingresar=false;

// Creo el bucle y un if para consultar si quiere ingresar o no, cargo el carrito he imprimo la factura con sus totales. 
while(!ingresar){
    let op=prompt("desea ingresar a comprar curso");
    if(op=="si".toUpperCase()){
    alert("a continuacion lista de los cursos");
    imprimeCurso(Productos);
    impCursos(Productos);
    agregarAlCarrito(op,carrito);
    }else{
        totales(op,carrito);
        totalFactura(carrito);
        ingresar=true;
    }
}



