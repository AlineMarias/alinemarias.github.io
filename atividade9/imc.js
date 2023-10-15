function calcularIMC(peso,altura){
    const imc = peso/(altura*altura);
    return imc;
  }
function classificacaoIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do Peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso Normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        return "Obesidade Grau I";
    } else if (imc >= 35 && imc < 39.9) {
        return "Obesidade Grau II";
    } else {
        return "Obesidade Grau III";
    }
}
const peso = 78;
const altura = 1.58;
  
const imc = calcularIMC(peso,altura);
const classificacao = classificacaoIMC(imc); 
  
console.log("seu IMC é :" + imc.toFixed(2));
console.log("classificacao:"+ classificacao);
