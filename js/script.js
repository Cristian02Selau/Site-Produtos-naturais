/**
 * ==========================================
 * 🛒 CARRINHO DE COMPRAS + 🎠 CARROSSEL
 * ==========================================
 * Objetivo:
 * - Controlar contador do carrinho
 * - Controlar navegação do carrossel
 * 
 * Obs: A lógica foi mantida, apenas organizada.
 */


/* ==================================================
   🔹 1. VARIÁVEIS DE ESTADO
================================================== */

// Controle do carrinho
let quantidadeItens = 0;

// Controle do carrossel
let index = 0;
const totalSlides = 2;


/* ==================================================
   🔹 2. SELEÇÃO DE ELEMENTOS DO DOM
   (Na ordem em que aparecem na página)
================================================== */

// ---- Carrossel ----
const track = document.querySelector('.carousel-track');
const nextButton = document.querySelector('.arrow:last-child');
const prevButton = document.querySelector('.arrow:first-child');

// ---- Carrinho ----
const contadorNaTela = document.querySelector('#cart-count');
const botoesAdicionar = document.querySelectorAll('.add-btn');


/* ==================================================
   🔹 3. LÓGICA DO CARROSSEL
================================================== */

/**
 * Avança para o próximo slide
 */
nextButton.addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    track.style.transform = `translateX(-${index * 100}%)`;
});

/**
 * Volta para o slide anterior
 */
prevButton.addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${index * 100}%)`;
});


/* ==================================================
   🔹 4. LÓGICA DO CARRINHO
================================================== */

/**
 * Função executada ao clicar em "Adicionar ao carrinho"
 */
function adicionarAoCarrinho() {

    // Incrementa a quantidade
    quantidadeItens++;

    // Atualiza o número exibido na tela
    contadorNaTela.innerText = quantidadeItens;

    // Feedback simples para o usuário
    alert("Produto adicionado com sucesso! 🎉");
}


/**
 * Adiciona o evento de clique para todos os botões
 */
botoesAdicionar.forEach(botao => {
    botao.addEventListener('click', adicionarAoCarrinho);
});