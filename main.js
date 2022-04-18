/*
1-  Pedir nombre del cliente.
2-  Pedir CUIT-CUIL.
3-  Pedir una dirección de origen y dirección de llegada y calcular la distancia.
4-  Seleccionar tipo de servicio (cadeteria, flete, mudanza, cargas pesadas). Según la opción elegida se habilita un menu
    para cada una.
    Para cada una de las opciones elegidas, asignar un movil y un conductor al azar. Segun la opcion, corresponde un tipo 
    de vehículo y un conductor con licencia correspondiente. Ej cadeteria=>moto=>licencia A3.
5-  Calcular tarifa segun tipo de servicio y distancia. Cada servivio tiene una tarifa base particular: 
    -cadeteria= $70.00, 
    -flete= $120.00, 
    -mudanza= $400.00 p/h (se calcula por hora, no por distancia),
    -cargas pesadas= $1500,
*/



//programarBtnCargar();
//programarBtnContinuar();

let inputNombre = document.getElementById("inputUsuarioNombre");

/*BTN VALIDAR---------------------------------------------

function programarBtnValidar() {
    
    let formularioValido = false;
    
    const btnCalcular = document.querySelector("#btn-calcular");
    
    btnCalcular.addEventListener("click", ()=>{
        
        console.log(inputNombre.value)
        
        formularioValido = validarCuit();

    })
}
*/
//----------------------------------------------------------------------------
function obtenerDistancia(){
    const distancia = Math.floor(Math.random()*distanciasAB.length);
    distanciaAleatoria = distanciasAB[distancia];
    return distanciaAleatoria;
}

//----------------------------------------------------------------------------
programarBtnDistancia()
function programarBtnDistancia() {

    const puntoPartida = document.getElementById("puntoPartida");
    const puntoLlegada = document.getElementById("puntoLlegada");

    const btnDistancia = document.getElementById("btn-Distancia");
    btnDistancia.addEventListener("click", ()=>{
        
        console.log("punto de partida: " + puntoPartida.value)
        
        console.log("punto de llegada: " + puntoLlegada.value)

        console.log("la distancia es: " + obtenerDistancia() + "km");
    
    })
    
}
//----------------------------------------------------------------------------
programarBtnElegir()
function programarBtnElegir(){

    const btnElegir = document.getElementById("btn-elegir")
    //const radioButons = document.querySelector('input[name="viaje"]:checked');
    const pesoPaquete = document.querySelector('#inputPeso')

    btnElegir.addEventListener("click", ()=>{

        if(document.getElementById('cadeteria').checked) {   
            const cad = document.getElementById('cadeteria').value;  
            
            //const presupuesto =  obtenerDistancia() * 25 + 80;
            if (pesoPaquete > 8) {
                Swal.fire({
                    title: "Error",
                    text: "Reingrese un numero de 11 degitos.",
                    icon: "error",
                    background: "#ffcc00", 
                })
            } 
            else{
                console.log("Servicio elegido: " + cad + " costo: $" + presupuesto); 

                const motocicletas = vehiculos.filter(vehiculo => vehiculo.tipo === "motocicleta");
                let motoAsignado = Math.floor(Math.random()*motocicletas.length);
                let motoAleatorio = motocicletas[motoAsignado];
                console.log("movil moto: " + motoAleatorio.marca + " " + motoAleatorio.modelo + " patente:" + motoAleatorio.patente)

                const choferesMoto = choferes.filter(chofer => chofer.licencia === "A3");
                let choferAsignadoMoto = Math.floor(Math.random()*choferesMoto.length);
                let aleatorioMoto = choferesMoto[choferAsignadoMoto]
                console.log("conductor asignado: " + aleatorioMoto.nombre + " " + aleatorioMoto.apellido);

            }   
            

            
            
            /*
            const camposComplementarios = document.getElementById("camposComplementarios")
            camposComplementarios.innerHTML = `
                                                <legend><span>Complete los Campos</span></legend>
                                                <label for="peso">peso</label>
                                                <input id="peso" type="number" name="paquete"  class="paquete-caracteristicas">
                                                <button id="btn-continuar" type="submit" class="btn btn-Continuar">CONTINUAR</button>
                                                `
            
            const inputComplementario = document.createElement("input");
            camposComplementarios.appendChild(inputComplementario);
            let btnCont = document.createElement("button");
            camposComplementarios.appendChild(btnCont);
            */ 
        }

        if(document.getElementById('flete').checked) {   
            var fle = document.getElementById('flete').value;  
            console.log("Servicio elegido: " + fle);

            const utilitarios = vehiculos.filter(vehiculo => vehiculo.tipo === "utilitario");
            let utiAsignado = Math.floor(Math.random()*utilitarios.length);
            let utiAleatorio = utilitarios[utiAsignado];
            console.log("movil utilitario: " + utiAleatorio.marca + " " + utiAleatorio.modelo + " patente:" + utiAleatorio.patente);

            const choferesUtilitario = choferes.filter(chofer => chofer.licencia === "B2");
            let choferAsignadoUti = Math.floor(Math.random()*choferesUtilitario.length);
            let aleatorioUti = choferesUtilitario[choferAsignadoUti]
            console.log("conductor asignado: " + aleatorioUti.nombre + " " + aleatorioUti.apellido);
        }

        if(document.getElementById('mudanza').checked) {   
            var mud = document.getElementById('mudanza').value;  
            console.log("Servicio elegido: " + mud);

            const furgon = vehiculos.filter(vehiculo => vehiculo.tipo === "furgon");
            let furAsignado = Math.floor(Math.random()*furgon.length);
            let furAleatorio = furgon[furAsignado];
            console.log("movil furgon: " + furAleatorio.marca + " " + furAleatorio.modelo + " patente:" + furAleatorio.patente)

            const choferesCamionFurgon = choferes.filter(chofer => chofer.licencia === "C3");
            let choferAsignadoFurCam = Math.floor(Math.random()*choferesCamionFurgon.length);
            let aleatorioFurCam = choferesCamionFurgon[choferAsignadoFurCam]
            console.log("conductor asignado: " + aleatorioFurCam.nombre + " " + aleatorioFurCam.apellido);
        }

        if(document.getElementById('cargasPesadas').checked) {   
            var cargas = document.getElementById('cargasPesadas').value;  
            console.log("Servicio elegido: " + cargas); 
            
            const camion = vehiculos.filter(vehiculo => vehiculo.tipo === "camion");
            let camAsignado = Math.floor(Math.random()*camion.length);
            let camAleatorio = camion[camAsignado];
            console.log("movil camion: " + camAleatorio.marca + " " + camAleatorio.modelo + " patente:" + camAleatorio.patente);

            const choferesCamionFurgon = choferes.filter(chofer => chofer.licencia === "C3");
            let choferAsignadoFurCam = Math.floor(Math.random()*choferesCamionFurgon.length);
            let aleatorioFurCam = choferesCamionFurgon[choferAsignadoFurCam]
            console.log("conductor asignado: " + aleatorioFurCam.nombre + " " + aleatorioFurCam.apellido);
        }      
    })
}

/*
function programarBtnContinuar(){

    const continuar = document.getElementById("btn-continuar").innerHTML;
    const pesoCad = document.getElementById("peso").innerHTML;
    
    continuar.addEventListener("click", ()=>{
            if( pesoCad > 8 ){
                    console.log(algo para mostrar)
                    
            }    
    })
}
*/


//BTN LIMPIAR---------------------------------------------
programarBtnLimpiar();
function programarBtnLimpiar() {
    
    const btnLimpiar = document.querySelector("#btn-limpiar")

    btnLimpiar.onclick = ()=>{
        document.getElementById("inputUsuarioNombre").value = "";
        document.querySelector("#inputUsuarioCuit").value = "";
        document.querySelector("#puntoPartida").value = "";
        document.querySelector("#puntoLlegada").value = "";
    }
}


function initMap() {

    const miDireccion = { lat: -32.95621, lng: -60.6344162 };

    const map = new google.maps.Map(document.getElementById("mapa"), {
        zoom: 16,
        center: miDireccion,
    });

    const punto = new google.maps.Marker({
        position: miDireccion,
        map: map,
    });
}