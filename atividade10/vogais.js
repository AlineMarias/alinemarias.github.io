function contarEvoltarVogais() {
    const inputString = document.getElementById("inputString").value;
    const resultado = contarVogais(inputString);
    document.getElementById("resultado").textContent = `O número de vogais na string é: ${resultado}`;
  }

  function contarVogais(str) {
    str = str.toLowerCase();
    let contadorVogais = 0;
    for (let i = 0; i < str.length; i++) {
      const caractere = str[i];
      if (caractere === 'a' || caractere === 'e' || caractere === 'i' || caractere === 'o' || caractere === 'u') {
        contadorVogais++;
      }
    }
    return contadorVogais;
  }