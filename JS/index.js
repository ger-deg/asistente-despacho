let nombreMediador = prompt("Ingresar el nombre del mediador/a");
let monto = parseInt(prompt("Ingresar el monto del proceso"));
let valorUhom = 1250;
let honorarios;
function valorCambiante (valor){
  honorarios = valor * valorUhom;
}

if(monto >= 1 && monto <= 37500) {
    valorCambiante(3);
} else if (monto > 37500 && monto <= 75000) {
    valorCambiante(6);
} else if (monto > 75000 && monto <= 187500) {
    valorCambiante(9);
} else if (monto > 187500 && monto <= 375000) {
    valorCambiante(12);
} else if (monto > 375000 && monto <= 750000) {
    valorCambiante(16);
} else if (monto > 750000 && monto <= 1250000) {
    valorCambiante(20);
} else {(monto > 1250000) 
    honorarios = parseInt(monto * 2 / 100);}

let cantidadDeUhom = honorarios / valorUhom;
let proveidoRegulacionMediador = ("AUTOS, VISTOS Y CONSIDERANDO:\n En atención a lo solicitado, al valor actual de la unidad de honorarios de mediación (UHOM) y a las escalas actuales de la citada normativa, le corresponde a " + nombreMediador + " la suma de " + honorarios + " equivalentes a " + cantidadDeUhom + " UHOM. \n Fijase el plazo para su pago en diez días y notifíquese en el domicilio electrónico.");

alert (proveidoRegulacionMediador);
