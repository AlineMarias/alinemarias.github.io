
function dividirNome() {
            // Obter o valor do campo de entrada de nome completo
var nomeCompleto = document.getElementById("nomeCompleto").value;

            // Dividir o nome completo em nome e sobrenome
var partesDoNome = nomeCompleto.split(" ");
var nome = partesDoNome[0];
var sobrenome = partesDoNome.slice(1).join(" ");

            // Preencher os campos de nome e sobrenome
document.getElementById("nome").value = nome;
document.getElementById("sobrenome").value = sobrenome;
}
 