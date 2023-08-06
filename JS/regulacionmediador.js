const nombreMediador = document.getElementById("mediador");
const monto = document.getElementById("monto");
const btnCalcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

const valorUhom = 3680;
let honorarios;

function valorCambiante (valor){
    honorarios = valor * valorUhom;
}

btnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    if(monto.value >= 1 && monto.value <= valorUhom*30) {
        valorCambiante(3);
    } else if (monto.value > valorUhom*30 && monto.value <= valorUhom*60) {
        valorCambiante(6);
    } else if (monto.value > valorUhom*60 && monto.value <= valorUhom*150) {
        valorCambiante(9);
    } else if (monto.value > valorUhom*150 && monto.value <= valorUhom*300) {
        valorCambiante(12);
    } else if (monto.value > valorUhom*300 && monto.value <= valorUhom*600) {
        valorCambiante(16);
    } else if (monto.value > valorUhom*600 && monto.value <= valorUhom*1000) {
        valorCambiante(20);
    } else {(monto.value > valorUhom*1000) 
        honorarios = parseInt(monto.value * 2 / 100);
        if (honorarios > valorUhom*120){
        honorarios = valorUhom*120}
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