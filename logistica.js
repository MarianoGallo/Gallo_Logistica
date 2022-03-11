/*
1- Pedir nombre del cliente.
2- Pedir CUIT-CUIL.
3- Preguntar si es servicio único o temporal,
4- Seleccionar tipo de servicio (cadeteria, flete, mudanza, cargas pesadas).
5- Ingresar punto de inicio (Se ingresa un número, ya que todavía no se puede indicar en un mapa).
6- Ingresar punto de llegada (Se ingresa un número, ya que todavía no se puede indicar en un mapa).
7- Calcular ditancia.
8- Calcular tarifa segun tipo de servicio y distancia. Cada servivio tiene una tarifa base particular: 
-cadeteria= $70.00, 
-flete= $120.00, 
-mudanza= $400.00 p/h (se calcula por hora, no por distancia),
-cargas pesadas= $1500,
*/

//let cliente = prompt("Ingrese su nombre y apellido");
let cliente = document.getElementById("usuario")
//let cuit = prompt("Ingrese su CUIT. Son 11 números sin - ni espacios.");
let cuit = document.getElementById("usuarioCuit");

while (isNaN(cuit) || cuit.length !== 11) {
    alert ("El número ingresado es inválido");
    cuit = prompt("Vuelva a ingresar un número");
}
alert("Su CUIT fué registrado correctamente");

console.log("El cliente " + cliente + " se registró con el CUIT: " + cuit);

const puntoA= parseInt(prompt("Ingrese punto de partida"));
const puntoB= parseInt(prompt("Ingrese punto de llegada"));

function calcularDistancia(a, b){
    distancia= puntoB - puntoA;
    return distancia;
}
console.log("La distancia es: " + calcularDistancia() + "km");

const servicio = prompt("Ingrese el tipo de servivcio: cadeteria | flete | cargasPesadas| mudanza");
switch (servicio) {
    case "cadeteria":{
        console.log("Cadeteria, costo: $" + calcularDistancia() * 100);
    }
    break;
    case "flete":{
        console.log("Flete, costo: $" +calcularDistancia() * 300);
    }
    break;
    case "cargasPesadas":{
        console.log("Cargas pesadas, costo: $" +calcularDistancia() * 1500);
    }
    break;
    case "mudanza":{
        let tiempo  = prompt("Ingrese el tiempo que va a necesitar")
        console.log("Mudanza, costo: $" + tiempo * 400);
    }
    break;

    default:
        alert("Servicio no disponible.")
        break;
}


//Desafío: Incorporar Arrays
const vehiculos = ["motocicleta", "utilitario chico", "utilitario grande", "camion"];
for (let i = 0; i < vehiculos.length; i++) {
//    console.log(vehiculos[i]);
    if(servicio === "cadeteria"){
        console.log("El vehiculo es: " + vehiculos[0]);
    }
    else if(servicio === "flete"){
        console.log("El vehiculo es: " + vehiculos[1]);
    }
    else if(servicio === "cargasPesadas"){
        console.log("El vehiculo es: " + vehiculos[3]);
        console.table(choferesUtilitario);
    }
    else if(servicio === "mudanza"){
        console.log("El vehiculo es: " + vehiculos[2]);
        console.table(choferesCamion);
    }
    else {
        console.log("Vehiculo no encontrado");
    }
} 
/*
const choferes = [
    {legajo: 0001,
    apellido: "Gomez",
    nombre: "Pedro",
    licencia: "A3"
    },
    {legajo: 0002,
    apellido: "Perez",
    nombre: "Juan",
    licencia: "A3"
    },
    {legajo: 0003,
    apellido: "Garcia",
    nombre: "Carlos",
    licencia: "A3"
    },
    {legajo: 0004,
    apellido: "Martinez",
    nombre: "Juan",
    licencia: "B2"
    },
    {legajo: 0005,
    apellido: "Lopez",
    nombre: "Tomas",
    licencia: "B2"
    },
    {legajo: 0006,
    apellido: "Silva",
    nombre: "Pablo",
    licencia: "C3"
    }
];

choferes.push({legajo: 0007, apellido: "Juarez", nombre: "Juan Pablo", licencia: "C3"});

for(const chofer of choferes){
    console.log("chofer: " + chofer.apellido + " " + chofer.nombre);
    console.log("licencia: " + chofer.licencia);
*/


//9- Crear una class para definir choferes y agregarlos a un array que liste cada uno de los empleados.-(chofer.js)
//10- Para el vehículo motocicleta mostrar los nombres de los choferes con licencia A3.-
//    Para los vehículos utilitarios mostrar los nombres de los choferes con licencia B2.-
//    Para el vehículo camion mostrar los nombres de los choferes con licencia C3.-

//DESAFÍO COMPLEMENTARIO - Interactuar con HTML
//crear las opciones con radoi buttnon para e tipo de viaje

const servicios = document.getElementById("tipoServicio")
servicios.innerHTML = `
<h3>Seleccione el servicio</h3> 
    <input type="radio" id="cadeteria" name="cadeteria" value="cadeteria" checked>CADETERIA</input>
    <input type="radio" id="flete" name="flete" value="flete" checked>FLETE</input>
    <input type="radio" id="cargasPesadas" name="cargasPesadas" value="cargasPesadas" checked>CARGAS PESADAS</input>
    <input type="radio" id="mudanza" name="mudanza" value="mudanza" checked>MUDANZA</input>
` ;

seleccionServicio = document.createElement
                                                


