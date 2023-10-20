function linhas_colunas() {
    var inputElement = document.getElementById("txtNumRows");
    var table = document.getElementById("sampleTable");
    var numRows = parseInt(inputElement.value);

    if (isNaN(numRows)) {
        alert("Por favor, insira um valor numérico.");
    } else if (numRows < 1 || numRows > 10) {
        alert("Os valores válidos estão entre 1 e 10.");
    } else {
        for (var i = 0; i < numRows; i++) {
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = "Nova linha";
            cell2.innerHTML = "Nova linha";
        }
    }
    inputElement.value = "";
}