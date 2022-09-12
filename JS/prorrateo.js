let arrayPeritos = [];

let montoProceso = Number(prompt("¿Cuál es el monto del proceso?"));
let otrosProfesionales;
let honorarios;
function CalculoHonorario () {
    honorarios = montoProceso * 5 / 100;
};

do {
  let nombrePeritos = prompt("ingrese nombre del perito");
  arrayPeritos.push(nombrePeritos);
  otrosProfesionales = prompt("Hay otros profesionales");
}while(otrosProfesionales != "no")

CalculoHonorario(montoProceso);
    
let proveido = "Para el perito " + arrayPeritos[1] + " le corresponde por honorarios " + honorarios;

alert(proveido);





// AUTOS, VISTOS Y CONSIDERANDO:
// En atención a lo peticionado, habrá de procederse a regular honorarios a los profesionales. 
// Al respecto y en cumplimiento con lo dispuesto por los arts. 15, in fine, y 52 de la actual ley arancelaria, teniendo en cuenta el monto del crédito involucrado en autos (que involucra el monto del acuerdo de $900.000), como así también la extensión, mérito, complejidad y eficacia de la labor desarrollada por los peritos intervinientes y las pautas que resultan de los artículos 1, 3, 16, 19, 21, 25, 29, 51, 54 y demás concordantes de la citada ley 27.423 y la acordada 21/2021 de la Corte Federal (que fija en $6.160 el valor de la unidad de medida arancelaria, en adelante, UMA), se regularán los honorarios de los auxiliares que se mencionarán a continuación.
// En ese sentido y al tener en cuenta que todos los expertos alcanzaron a presentar su pericia, se regulará conforme el art. 25, inc. “a”, de la ley citada. Por ende, regulo los honorarios del perito mecánico perito ingeniero Jorge Díaz en la cantidad de $49.280, equivalente a 8 UMA. Mientras tanto, regulo los de la perito psicóloga Melisa Andrea Cardo en $49.280, equivalente a 8 UMA. Y los del perito médico Martín Melo en $49.280, equivalente a 8 UMA.
// Luego, en atención al valor actual de la unidad de honorarios de mediación (UHOM) se fija la retribución de la mediadora Rossanna Luisa Beatríz Fernández, en la suma de $19.600 equivalentes a 20 UHOM.
// Por último, se deja constancia que a los fines de su pago tales emolumentos deberán ser abonados en el plazo de diez días, a computarse desde una vez que quede firme esta regulación. 
// Regístrese y notifíquese al domicilio electrónico.



// do {
//     let montoInvolucrado = parseInt(prompt("Ingrese el monto del proceso"));
//     let tasaDeJusticia = montoInvolucrado * 3 / 100;
//     let montoProrrateable = montoInvolucrado * 22 / 100;
//     let nombreProfesional = prompt("Ingrese el nombre del profesional");
//     let honorariosProfesional = parseInt(prompt("Ingrese los honorarios del profesional"));
//     let otrosProfesionales = prompt("¿Hay otros profesionales?");
// }while (otrosProfesionales == NO){
//     let nombreProfesional = prompt("Ingrese el nombre del profesional");
//     let honorariosProfesional = parseInt(prompt("Ingrese los honorarios del profesional"));
//     let otrosProfesionales = prompt("¿Hay otros profesionales?");
// }
// console.log = nombreProfesional;