// Seleciona todos os botões de compra
const buttons = document.querySelectorAll(".comprar");

// Adiciona um evento de clique para cada botão
buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Produto adicionado ao carrinho! Vamos processar seu pagamento.");
    });
});
