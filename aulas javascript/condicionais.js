console.log(" []1 para Débito \n", 
             "[]2 para Dinheiro ou Pix \n",
             "[]3 para Parcelar 2 vezes \n",
             "[]4 para Parcelar 3 vezes ou mais");
 
             
const precoProduto = 350.99 ;             
const pagamento = 1;
let precoFinal;
console.log("Tipo de Pagamento: " + pagamento)

switch (pagamento){
    case 1:
        desconto = precoProduto * 0.1;
        precoFinal = precoProduto - desconto;
        console.log("Desconto: " + desconto.toFixed(2) + " Preço final: " + precoFinal.toFixed(2));
    break
    case 2:
        desconto = precoProduto * 0.15; 
        precoFinal = precoProduto - desconto;
        console.log("Desconto: " + desconto.toFixed(2) + " Preço final: " + precoFinal.toFixed(2));
    break
    case 3:
        desconto = precoProduto * 0;
        precoFinal = precoProduto - desconto;
        console.log("Desconto: " + desconto.toFixed(2) + " Preço final: " + precoFinal.toFixed(2));
    break
    case 4:
        juros = precoProduto * 0.1;
        precoFinal = precoProduto + juros;
        console.log("Juros: " + juros.toFixed(2) + " Preço final: " + precoFinal.toFixed(2));
    break
    default:
        console.log("Entrada inválida, tente novamente.");
}