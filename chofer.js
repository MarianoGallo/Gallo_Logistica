class Chofer{
    constructor(legajo, apellido, nombre, licencia){
        this.legajo = legajo;
        this.apellido = apellido;
        this.nombre = nombre;
        this.licencia = licencia;
    }
}
const choferes = [];
choferes.push(new Chofer(0001, "Gomez", "Pedro", "A3"));
choferes.push(new Chofer(0002, "Perez", "Juan", "A3"));
choferes.push(new Chofer(0003, "Garcia", "Carlos", "A3"));
choferes.push(new Chofer(0004, "Martinez", "Pablo", "B2"));
choferes.push(new Chofer(0005, "Lopez", "Tomas", "B2"));
choferes.push(new Chofer(0006, "Silva", "Matias", "C3"));

const choferesMoto = choferes.filter(chofer => chofer.licencia === "A3");
//console.table(choferesMoto);

const choferesUtilitario = choferes.filter(chofer => chofer.licencia === "B2");
//console.table(choferesUtilitario);

const choferesCamion = choferes.filter(chofer => chofer.licencia === "C3");
//console.table(choferesCamion);
