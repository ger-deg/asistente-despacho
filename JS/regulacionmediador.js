const nombreMediador = document.getElementById("mediador");
const monto = document.getElementById("monto");
const btnCalcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

const valorUhom = 1710;
let honorarios;

function valorCambiante (valor){
    honorarios = valor * valorUhom;
}

btnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    if(monto.value >= 1 && monto.value <= 51300) {
        valorCambiante(3);
    } else if (monto.value > 51300 && monto.value <= 102600) {
        valorCambiante(6);
    } else if (monto.value > 102600 && monto.value <= 256500) {
        valorCambiante(9);
    } else if (monto.value > 256500 && monto.value <= 513000) {
        valorCambiante(12);
    } else if (monto.value > 513000 && monto.value <= 1026000) {
        valorCambiante(16);
    } else if (monto.value > 1026000 && monto.value <= 1710000) {
        valorCambiante(20);
    } else {(monto.value > 1710000) 
        honorarios = parseInt(monto.value * 2 / 100);
        if (honorarios > 205199){
        honorarios = 205200}
    };
    let cantidadDeUhom = honorarios / valorUhom;
    resultado.innerHTML= `<p><strong> AUTOS, VISTOS Y CONSIDERANDO: </strong></p> <p>En atención a lo solicitado y al valor actual de la unidad de honorarios de mediación (UHOM), le corresponde a ${mediador.value} por sus tareas en esa etapa la suma de $${honorarios}, equivalentes a ${cantidadDeUhom} UHOM.<br/>     Fijase el plazo para su pago en diez días y notifíquese en el domicilio electrónico.</p> `
});

resultado.addEventListener("click", () => {
    let copyText = resultado.innerText;
    navigator.clipboard.writeText(copyText)

    var myAlert = document.getElementById('toastNotice');
    var bsAlert = new bootstrap.Toast(myAlert);
    bsAlert.show();
})