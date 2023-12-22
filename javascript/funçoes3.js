console.log(" []1 para Débito \n", 
             "[]2 para Dinheiro ou Pix \n",
             "[]3 para Parcelar 2 vezes \n",
             "[]4 para Parcelar 3 vezes ou mais");
 
             
const precoProduto = 658.99 ;             
const pagamento = 4;
console.log("Tipo de Pagamento: " + pagamento)
console.log("Preço do produto: " + precoProduto)

function aplicarDesconto(valor, desconto){
    return valor * desconto;
}

function aplicarJuros(valor, juros){
    return valor * juros;
}

function precoFinalJuros(valor, juros){
    return valor + juros
}

function precoFinal(valor, desconto){
    return valor - desconto;
}

switch (pagamento){
    case 1:
        console.log("Desconto: " + aplicarDesconto(precoProduto, 0.1).toFixed(2) + " Preço final: " + precoFinal(precoProduto, aplicarDesconto(precoProduto, 0.1)));
    break
    case 2:
        console.log("Desconto: " + aplicarDesconto(precoProduto, 0.15).toFixed(2) + " Preço final: " + precoFinal(precoProduto, aplicarDesconto(precoProduto, 0.15)));
    break
    case 3:
        console.log("Desconto: " + aplicarDesconto(precoProduto, 0).toFixed(2) + " Preço final: " + precoFinal(precoProduto, aplicarDesconto(precoProduto, 0)));
    break
    case 4:
        console.log("Juros: " + aplicarJuros(precoProduto, 0.1) + " Preço final: " + precoFinalJuros(precoProduto, aplicarJuros(precoProduto, 0.1)));
    break
    default:
        console.log("Entrada inválida, tente novamente.");
}