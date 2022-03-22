/*const nombre = document.querySelector("#usuarioNombre");
nombre.onchange = ()=>{
    console.log("prueba onchange");
    }
*/

const inputNombre = document.querySelector("#usuarioNombre");
inputNombre.addEventListener("input", ()=>{
    alert(inputNombre.value)
    });

const inputDni = document.getElementById("usuarioDni");
inputDni.addEventListener("change", ()=>{alert(inputDni.value)})

const inputFecha = document.querySelector("#fechaViaje");

let spotOpcion = document.getElementsByClassName("opciones");
console.log(spotOpcion);

for(const opcion of spotOpcion){
    console.log(opcion)
}

let nodoCalculo = document.getElementById("calculo");
/*
let etiqueta =  document.createElement("label");
etiqueta.setAttribute("id", "etiqueta1");
nodoCalculo.appendChild(etiqueta);
etiqueta.innerText = "INTRODUZCA 2 NÚMEROS";
*/
nodoCalculo.innerHTML = `
                    <input id="valor1"type= "number" class="form-control">VALOR 1</input>
                    <br>
                    <input id="valor2"type= "number" class="form-control">VALOR 2</input>
                    ` ;

//Eventos
programarBtnCargar();
programarBtnLimpiar();


function programarBtnLimpiar(){
    let btnLimpiar = document.querySelector("#btn-limpiar");
    btnLimpiar.addEventListener("click", ()=>{
        alert ("pueba botón limpiar");
        })
}
function programarBtnCargar(){
    let btnCargar  = document.getElementById("btn-cargar");
    btnCargar.onclick = ()=>{ 
        alert ("Prueba boton cargar");
        }
    }

