const nomes =  ["Marcos", "Weidy", "Clito"];

nomes.forEach(function(nome){
    console.log(nome);
});

console.log("_________________________");

nomes.forEach((nome)=>{
    console.log(nome);
});

console.log("_________________________");

function imprimirNome(nome){
    console.log(nome);
};

nomes.forEach(imprimirNome);