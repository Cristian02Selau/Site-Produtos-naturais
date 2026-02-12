/**
 * Lógica do Carrinho de Compras
 * Objetivo: Capturar o clique nos botões e atualizar um contador na tela.
 */

// 1. Criamos uma variável para armazenar a quantidade de itens
let quantidadeItens = 0;

// 2. Selecionamos o elemento do HTML que exibe o número (pelo ID)
const contadorNaTela = document.querySelector('#cart-count');

// 3. Selecionamos TODOS os botões de "Adicionar ao carrinho"
const botoesAdicionar = document.querySelectorAll('.add-btn');

/**
 * Função que será executada toda vez que um botão for clicado
 */
function adicionarAoCarrinho() {
    // Aumenta o valor da variável
    quantidadeItens = quantidadeItens + 1;
    
    // Atualiza o texto que aparece para o usuário
    contadorNaTela.innerText = quantidadeItens;
    
    // Mostra um alerta simples (feedback visual)
    alert("Produto adicionado com sucesso! 🎉");
}

/**
 * Como temos vários botões, usamos o 'forEach' (para cada) 
 * para dizer que todos devem 'ouvir' o evento de clique.
 */
botoesAdicionar.forEach(botao => {
    botao.addEventListener('click', adicionarAoCarrinho);
});

// Comentário didático: O 'addEventListener' é como colocar um vigia no botão.
// Quando o 'click' acontece, ele chama a função 'adicionarAoCarrinho'.