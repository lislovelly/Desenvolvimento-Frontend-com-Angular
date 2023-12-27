class Pessoa{
    nome;
    peso; 
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / Math.pow(this.altura, 2);
    }
    classificarImc(){
        const imc = this.calcularImc();
        if (imc < 18.5){
            return " Abaixo do peso";
        }else if (imc <= 25){
            return " Peso normal";
        }else if (imc <= 30){
            return " Acima do peso";
        }else if (imc <= 40){
            return " Obeso";
        }else {
            return " Obesidade grave";
        }
    }
}

const pessoa1 = new Pessoa('Elisangela', 80, 1.72);
const pessoa2 = new Pessoa('Samuel', 50, 1.62);
const pessoa3 = new Pessoa('Henrique', 60, 1.74);
console.log(pessoa1);
console.log('IMC : ' + pessoa1.calcularImc().toFixed(2) + pessoa1.classificarImc());
console.log(pessoa2);
console.log('IMC : ' + pessoa2.calcularImc().toFixed(2) + pessoa2.classificarImc());
console.log(pessoa3);
console.log('IMC : ' + pessoa3.calcularImc().toFixed(2) + pessoa3.classificarImc());



