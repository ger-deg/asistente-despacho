const nombreMediador = document.getElementById("mediador");
const monto = document.getElementById("monto");
const btnCalcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

const valorUhom = 1870;
let honorarios;

function valorCambiante (valor){
    honorarios = valor * valorUhom;
}

btnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    if(monto.value >= 1 && monto.value <= 56100) {
        valorCambiante(3);
    } else if (monto.value > 56100 && monto.value <= 112200) {
        valorCambiante(6);
    } else if (monto.value > 112200 && monto.value <= 280500) {
        valorCambiante(9);
    } else if (monto.value > 280500 && monto.value <= 561000) {
        valorCambiante(12);
    } else if (monto.value > 561000 && monto.value <= 1122000) {
        valorCambiante(16);
    } else if (monto.value > 1122000 && monto.value <= 1870000) {
        valorCambiante(20);
    } else {(monto.value > 1870000) 
        honorarios = parseInt(monto.value * 2 / 100);
        if (honorarios > 224399){
        honorarios = 224400}
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