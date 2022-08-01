let nombreMediador = prompt("Ingresar el nombre del mediador/a");
let monto = parseInt(prompt("Ingresar el monto del proceso"));
let valorUhom = 1710;
let honorarios;
function valorCambiante (valor){
  honorarios = valor * valorUhom;
}

if(monto >= 1 && monto <= 51300) {
    valorCambiante(3);
} else if (monto > 51300 && monto <= 102600) {
    valorCambiante(6);
} else if (monto > 102600 && monto <= 256500) {
    valorCambiante(9);
} else if (monto > 256500 && monto <= 513000) {
    valorCambiante(12);
} else if (monto > 513000 && monto <= 1026000) {
    valorCambiante(16);
} else if (monto > 1026000 && monto <= 1710000) {
    valorCambiante(20);
} else {(monto > 1710000) 
    honorarios = parseInt(monto * 2 / 100);
    if (honorarios > 205199){
    honorarios = 205200}
};


let cantidadDeUhom = honorarios / valorUhom;
let proveidoRegulacionMediador = `      AUTOS, VISTOS Y CONSIDERANDO:<br/>      En atención a lo solicitado y al valor actual de la unidad de honorarios de mediación (UHOM), le corresponde a ${nombreMediador} por sus tareas en esa etapa la suma de $${honorarios}, equivalentes a ${cantidadDeUhom} UHOM.<br/>     Fijase el plazo para su pago en diez días y notifíquese en el domicilio electrónico.`

document.write (proveidoRegulacionMediador);