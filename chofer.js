class Chofer{
    constructor(legajo, apellido, nombre, licencia){
        this.legajo = legajo;
        this.apellido = apellido;
        this.nombre = nombre;
        this.licencia = licencia;
    }
}
const choferes = [];
choferes.push(new Chofer(001, "Gomez", "Pedro", "A3"));
choferes.push(new Chofer(002, "Perez", "Juan", "A3"));
choferes.push(new Chofer(003, "Garcia", "Carlos", "A3"));
choferes.push(new Chofer(004, "Martinez", "Pablo", "B2"));
choferes.push(new Chofer(005, "Lopez", "Tomas", "B2"));
choferes.push(new Chofer(006, "Gonzales", "Marcos", "C3"));
choferes.push(new Chofer(007, "Silva", "Matias", "A3"));
choferes.push(new Chofer(0011, "Diaz", "Agustin", "B2"));
choferes.push(new Chofer(0012, "Rodriguez", "Nicolas", "B2"));
choferes.push(new Chofer(010, "Jimenez", "Roberto", "C3"));
/*
const choferesMoto = choferes.filter(chofer => chofer.licencia === "A3");
    //console.table(choferesMoto);
    let choferAsignadoMoto = Math.floor(Math.random()*choferesMoto.length);
    let aleatorioMoto = choferesMoto[choferAsignadoMoto]
        console.log("conductor asignado: " + aleatorioMoto.nombre + " " + aleatorioMoto.apellido);

const choferesUtilitario = choferes.filter(chofer => chofer.licencia === "B2");
    //console.table(choferesUtilitario);
    let choferAsignadoUti = Math.floor(Math.random()*choferesUtilitario.length);
    let aleatorioUti = choferesUtilitario[choferAsignadoUti]
        console.log("conductor asignado: " + aleatorioUti.nombre + " " + aleatorioUti.apellido);


const choferesCamionFurgon = choferes.filter(chofer => chofer.licencia === "C3");
    let choferAsignadoFurCam = Math.floor(Math.random()*choferesCamionFurgon.length);
    let aleatorioFurCam = choferesCamionFurgon[choferAsignadoFurCam]
        console.log("conductor asignado: " + aleatorioFurCam.nombre + " " + aleatorioFurCam.apellido);
*/

const choferesJson = {};
