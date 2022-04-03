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

programarBtnCalcular();
programarBtnLimpiar();
programarBtnCargar();


let inputNombre = document.getElementById("inputUsuarioNombre");
//inputNombre.addEventListener("change", ()=>{console.log(inputNombre.value)});
//let inputCuit = document.getElementById("inputUsuarioCuit");
//inputCuit.addEventListener("change", ()=>{console.log(inputCuit.value)});


function programarBtnCalcular() {
    let formularioValido = false;
    const btnCalcular = document.querySelector("#btn-calcular");
    btnCalcular.addEventListener("click", ()=>{
        
        console.log(inputNombre.value)
        
        formularioValido = validarCuit();
        if (formularioValido)
        
        calcularDistancia();

         //elegirServicio();
        const radioVal = document.querySelector('input[name="viaje"]:checked').value;
            console.log(radioVal);
        });
    
/*        Toastify({
            text: "La distancia es" + distancia,
            duration: 5000,
        }).showToast();
*/
}

function calcularDistancia(){
    
    const inputPuntoA = document.querySelector("#puntoPartida");
        //console.log(inputPuntoA.value)
    const inputPuntoB = document.querySelector("#puntoLlegada");
        //console.log(inputPuntoB.value)
    
        const distancia = inputPuntoB.value - inputPuntoA.value;
    return distancia;
    //console.log("La distancia del recorrido es: " + distancia + "km");
    
    
}


function validarCuit(){
    const inputCuit = document.querySelector("#inputUsuarioCuit")
    
        inputCuit.value.length !== 11 ?  Swal.fire({
            title: "Error",
            text: "Reingrese un numero de 11 degitos.",
            icon: "error",
            background: "#ffcc00", 
        })
        : console.log("CUIT " + inputCuit.value + " se registró correctamente") 
        return true
}
//--------------------------------------------------------------------------------------
function programarBtnLimpiar() {
    
    const btnLimpiar = document.querySelector("#btn-limpiar")

    btnLimpiar.onclick = ()=>{
        document.getElementById("inputUsuarioNombre").value = "";
        document.querySelector("#inputUsuarioCuit").value = "";
        document.querySelector("#puntoPartida").value = "";
        document.querySelector("#puntoLlegada").value = "";
    }
}
//--------------------------------------------------------------------------------------
function programarBtnCargar() {
    const btnCargar = document.querySelector("#btn-cargar")
    btnCargar.onclick = ()=>
    {
        alert("PRueba CArgar")
    }
}
//--------------------------------------------------------------------------------------
/*function persistirDatos(){
    localStorage.setItem("movil", vehiculo)
}

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

Desafío: Incorporar Arrays
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
*/

//9- Crear una class para definir choferes y agregarlos a un array que liste cada uno de los empleados.-(chofer.js)
//10- Para el vehículo motocicleta mostrar los nombres de los choferes con licencia A3.-
//    Para los vehículos utilitarios mostrar los nombres de los choferes con licencia B2.-
//    Para el vehículo camion mostrar los nombres de los choferes con licencia C3.-

//const servicios = document.getElementById('tipoServicio')
//servicios.innerHTML = `<label><span>Seleccione el servicio</span></label>` 


//Desafio Fetch en tu proyecto

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'google-maps-geocoding-plus.p.rapidapi.com',
		'X-RapidAPI-Key': '06f11d29a5mshb71aff10fff6c9bp14f075jsn17c7c1d1c223'
	}
};

fetch('https://google-maps-geocoding-plus.p.rapidapi.com/geocode?address=121%20Buffalo%20View%20Ln%2C%20Georgetown%2C%20TX%2078628&language=en', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));