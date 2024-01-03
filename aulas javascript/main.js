
const {gets, print} = require('./funçoes-auxiliares.js');

const numeroSorteado = [];

for (let i = 0; i < 5; i++) {
    const numero = parseInt(gets());
    numeroSorteado.push(numero);
}

print(numeroSorteado);

let maiorValor = 0;

for (let i = 0; i < numeroSorteado.length; i++) {
    const numeroAtual = numeroSorteado[i];
    if (numeroAtual > maiorValor){
        maiorValor = numeroAtual;
    }
}

print(maiorValor);
