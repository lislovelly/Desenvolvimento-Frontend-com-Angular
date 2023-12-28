class Carro{
    nome;
    marca;
    gastoKM;

    constructor(nome, marca, gastoKM){
        this.nome = nome;
        this.marca = marca;
        this.gastoKM = gastoKM;
    }

    calcularGastoPercurso(distanciaKM, precoCombustivel){
        return distanciaKM * this.gastoKM * precoCombustivel
    }
}

const carro1 = new Carro('Onix', 'Chevrolet', 1 / 12);
const carro2 = new Carro('HB20', 'Hyundai', 1 / 10);


console.log(carro1.calcularGastoPercurso(70, 5).toFixed(2));
console.log(carro2.calcularGastoPercurso(100, 5).toFixed(2));
