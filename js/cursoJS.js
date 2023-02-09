function imprimeCurso(array){
    for (obj of array) {
        console.log(obj);
        }
}

function impCursos(array){
    let ListCurso= array.map((array)=>"Id: "+array.id+" "+"Nombre: "+ array.nombre+" "+" Tipo: "+array.tipo+ " "+"Cantidad:" +array.cantidad
    + " "+"Descripcion: " + array.desc+" "+"Precio: " + array.precio+" ");
    alert(ListCurso.join(" -|- "));
}
 
function agregarAlCarrito(seleccion, array){
    while(seleccion!="no".toUpperCase()){
        let curso=parseInt(prompt("Ingrese el numero de Id del Curso:"));
        let precio=0;
        switch(curso){
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
        let unidades=parseInt(prompt("Ingrese las personas que asistiran al curso:"));
        array.push({curso, unidades,precio})
        console.log(array);
        seleccion=prompt("Seguir comprando");
    }
}

function totales(argumento,array){
    alert("gracias por la compra del curso");
    array.forEach(carritoFinal => {
        console.log(`curso: ${carritoFinal.curso}, unidades: ${carritoFinal.unidades},
        Total a pagar por los cursos ${carritoFinal.unidades*carritoFinal.precio}`)
    });
}

function totalFactura(array){
    const total=array.reduce((acumulador,el)=>acumulador+el.precio*el.unidades,0);
    console.log(`Total de la factura: ${total}`)
}
  
const cursos = [
    {id: 1, nombre: "Taller para Adolescentes", tipo: "taller", cantidad: 20, desc: "Valor de la Amistad", precio: 2000},
    {id: 2, nombre: "Taller de Orientacion Vocacional", tipo: "taller", cantidad: 20, desc: "Mi lugar en el Mundo", precio: 2500},
    {id: 3, nombre: "Taller de Teatro", tipo: "teatro", cantidad: 15, desc: "Workshop Intenso", precio: 3000},
    {id: 4, nombre: "Diplomatura en Psicoterapia", tipo: "diplomatura", cantidad: 25, desc: "Actualizacion y Profundizacion en Psicologia Gestaltica Aplicada", precio: 4000},
    {id: 5, nombre: "Pablo Chamorro", tipo: "taller", cantidad: 20, desc: "Configuraciones Sistemicas", precio: 2000},    
];

let carrito =[];

let ingresar=false;

while(!ingresar){
    let op=prompt("Desea ingresar a comprar curso");
    if(op=="si".toUpperCase()){
    alert("Lista de los cursos:");
    imprimeCurso(cursos);
    impCursos(cursos);
    agregarAlCarrito(op,carrito);
    }else{
        totales(op,carrito);
        totalFactura(carrito);
        ingresar=true;
    }
}
