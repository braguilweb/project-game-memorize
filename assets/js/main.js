import { statusDoJogo, iniciarTempoDoJogo } from "./tempo.js";
import { iniciarJogo } from "./jogo.js";

console.log("aguardando clicar no iniciar ")


//Função que gera número aleatório
export function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

 // função que muda broadcasting
export function alterarMensagem(mensagem) {
const broadcastingElemento = document.querySelector('.broadcasting p');
broadcastingElemento.textContent = mensagem;
}



// Evento que inicia o tempo do jogo

const buttonIniciarTempo = document.querySelector('.button-jogar')
buttonIniciarTempo.addEventListener('click', iniciarTempoDoJogo)

// Evento de clique ao botão de início
export const buttonIniciar = document.getElementById("button-jogar");

buttonIniciar.addEventListener("click", function () {
    // Chame a função iniciarJogo quando o botão for clicado
    iniciarJogo();
    
});

//esconder botão sair na tela inicial
export const escondeButtonSair = document.querySelector('.button-sair');
if (!statusDoJogo) {    
    escondeButtonSair.style.display = 'none'
    console.log('Jogo desligado')
}  


