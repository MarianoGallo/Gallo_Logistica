class Vehiculo{
    constructor(movil, tipo, marca, modelo, ano, patente){
        this.movil = movil;
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.patente = patente;
    }
}

let vehiculos = [];
vehiculos.push(new Vehiculo(0011, "motocicleta", "Honda", "GLH 150", 2017, "A097WER"));
vehiculos.push(new Vehiculo(0027, "motocicleta", "Honda", "GLH 150", 2017, "A098PLU"));
vehiculos.push(new Vehiculo(0043, "motocicleta", "Bajaj", "BOXER 150", 2019, "A099YTR"));
vehiculos.push(new Vehiculo(0014, "utilitario", "Renault", "Kangoo", 2018, "AB123CD"));
vehiculos.push(new Vehiculo(0025, "utilitario", "Peugeot", "Berlingo", 2017, "AB321DC"));
vehiculos.push(new Vehiculo(0006, "utilitario", "Fiat", "Fiorino", 2018, "AC453CD"));
vehiculos.push(new Vehiculo(0057, "furgon", "Renault", "Master", 2020, "AD143CE"));
vehiculos.push(new Vehiculo(0010, "furgon", "Mercedes Benz", "Sprint", 2019, "AD089CE"));
vehiculos.push(new Vehiculo(0017, "furgon", "Mercedes Benz", "Sprint", 2019, "AD295TE"));
vehiculos.push(new Vehiculo(0012, "camion", "Iveco", "Tector 90-190", 2015, "AD045CG"));
vehiculos.push(new Vehiculo(0034, "utilitario", "Fiat", "Fiorino", 2018, "AE768RD"));
vehiculos.push(new Vehiculo(0045, "utilitario", "Fiat", "Fiorino", 2018, "AY553KD"));
vehiculos.push(new Vehiculo(0033, "motocicleta", "Yamaha", "YBR 125", 2017, "A065WOP"));

/*
const motocicletas = vehiculos.filter(vehiculo => vehiculo.tipo === "motocicleta");
    //console.table(motocicletas);
    let motoAsignado = Math.floor(Math.random()*motocicletas.length);
    let motoAleatorio = motocicletas[motoAsignado];
        console.log("movil moto: " + motoAleatorio.marca + " " + motoAleatorio.modelo + " patente:" + motoAleatorio.patente)

const utilitarios = vehiculos.filter(vehiculo => vehiculo.tipo === "utilitario");
//console.table(motocicletas);
let utiAsignado = Math.floor(Math.random()*utilitarios.length);
let utiAleatorio = utilitarios[utiAsignado];
    console.log("movil utilitario: " + utiAleatorio.marca + " " + utiAleatorio.modelo + " patente:" + utiAleatorio.patente)

const furgon = vehiculos.filter(vehiculo => vehiculo.tipo === "furgon");
    let furAsignado = Math.floor(Math.random()*furgon.length);
    let furAleatorio = furgon[furAsignado];
        console.log("movil furgon: " + furAleatorio.marca + " " + furAleatorio.modelo + " patente:" + furAleatorio.patente)

const camion = vehiculos.filter(vehiculo => vehiculo.tipo === "camion");
    //console.table(motocicletas);
    let camAsignado = Math.floor(Math.random()*camion.length);
    let camAleatorio = camion[camAsignado];
        console.log("movil camion: " + camAleatorio.marca + " " + camAleatorio.modelo + " patente:" + camAleatorio.patente)

*/

/*Storage JSON-----------------------------------------------------------------------------

//localStorage.setItem("log-box", JSON.stringify(vehiculos));
//sessionStorage.setItem("logBox", "moviles");

let guardadoLocal =  (movil, valor) => {localStorage.getItem(movil, valor)}; 

//for(const vehiculo of vehiculos)
//   guardadoLocal("ListaMoviles", JSON.stringify(vehiculo));

console.log(guardadoLocal);



let descargaLocal = JSON.parse(localStorage.getItem(guardadoLocal));

console.log(typeof descargaLocal)
*/