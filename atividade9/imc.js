function calcularIMC(){
    const peso = document.getElementById('peso').value;
    const result = document.getElementById('resultado');
    const altura = document.getElementById('altura').value;
    const classificacao = document.getElementById('classificacao');
    var imc = peso/(altura*altura);

    if (imc < 18.5) {
         result.innerHTML = `Seu IMC é ${imc.toFixed(2)}`;
         classificacao.innerHTML = `Abaixo do Peso`;
    } if (imc >= 18.5 || imc <= 25){
        result.innerHTML = `Seu IMC é ${imc.toFixed(2)}`;
        classificacao.innerHTML = `Peso Normal `;
    } if (imc >= 25 || imc <=30) {
        result.innerHTML = `Seu IMC é ${imc.toFixed(2)}`;
         classificacao.innerHTML = `Sobrepeso`;
    } if (imc >= 30 || imc <= 35) {
        result.innerHTML = `Seu IMC é ${imc.toFixed(2)}`;
        classificacao.innerHTML = `Obesidade Grau I`;
    } if (imc >= 35 || imc <= 40) {
        result.innerHTML = `Seu IMC é ${imc.toFixed(2)}`;
        classificacao.innerHTML = 'Obesidade Grau II';
    } else {    
     classificacao.innerHTML ='Obesidade Grau III';
    }
}
