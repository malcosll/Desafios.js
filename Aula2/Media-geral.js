const salaJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPy = [7, 3.5, 8, 9, 5];

function calculaMedia(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acc,nota) => acc + nota, 0);

    const media = somaDasNotas / notasDaSala.length;
    return media;
};
console.log(`A média da sala de JavaScript é ${calculaMedia(salaJs)}`);
console.log(`\nA média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`\nA média da sala de Python é ${calculaMedia(salaPy)}`);