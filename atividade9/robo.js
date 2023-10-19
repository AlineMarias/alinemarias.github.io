const img = [
    "robotron",
    "robotron-amarelo",
    "robotron-branco", 
    "robotron-preto", 
    "robotron-rosa", 
   "robotron-vermelho"
];
var indice = 0;

function esconder(indiceInicial){
    const robotron = document.getElementById(img[indiceInicial]);

    robotron.style.display="none";

}
function mostrar(indiceInicial){
    const robotron = document.getElementById(img[indiceInicial]);
    
    robotron.style.display = "block";
}

function anterior(){

    esconder(indice);

    indice = indice - 1;

    if(indice < 0){
     indice = img.length - 1;
}

    mostrar(indice);

}

function proximo(){
   esconder(indice);
   indice = indice + 1;

   if(indice >= img.length){
     indice = 0;

   }

   mostrar(indice);
}
