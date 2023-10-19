function dividirNome() {
 var nomeCompleto = document.getElementById("nomeCompleto").value;
    
                
    var partesDoNome = nomeCompleto.split(" ");
    var nome = partesDoNome[0];
    var sobrenome = partesDoNome.slice(1).join(" ");
    
             
    document.getElementById("nome").value = nome;
    document.getElementById("sobrenome").value = sobrenome;
    }
     
