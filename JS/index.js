let nombreMediador = prompt("Ingresar el nombre del mediador/a");
let monto = parseInt(prompt("Ingresar el monto del proceso"));
let valorUhom = 1550;
let honorarios;
function valorCambiante (valor){
  honorarios = valor * valorUhom;
}

if(monto >= 1 && monto <= 46500) {
    valorCambiante(3);
} else if (monto > 46500 && monto <= 93000) {
    valorCambiante(6);
} else if (monto > 93000 && monto <= 232500) {
    valorCambiante(9);
} else if (monto > 232500 && monto <= 465000) {
    valorCambiante(12);
} else if (monto > 465000 && monto <= 930000) {
    valorCambiante(16);
} else if (monto > 930000 && monto <= 1550000) {
    valorCambiante(20);
} else {(monto > 1550000) 
    honorarios = parseInt(monto * 2 / 100);}
    while (honorarios > 185999){
        honorarios = 186000
    }


let cantidadDeUhom = honorarios / valorUhom;
let proveidoRegulacionMediador = ("AUTOS, VISTOS Y CONSIDERANDO:\n En atención a lo solicitado y al valor actual de la unidad de honorarios de mediación (UHOM), le corresponde a " + nombreMediador + " por sus tareas en esa etapa la suma de " + honorarios + " equivalentes a " + cantidadDeUhom + " UHOM. \n Fijase el plazo para su pago en diez días y notifíquese en el domicilio electrónico.");

alert (proveidoRegulacionMediador);
