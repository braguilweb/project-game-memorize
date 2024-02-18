import { alterarMensagem } from "./main.js";
import { atualizarRelatorio } from "./relatorioFinal.js";

export let statusDoJogo = false


//Variaveis que controlam o tempo do jogo
export let tempoRestante = 90;
export let intervalId;



//Função que aumenta 10 segundos ao acertar a jogada
export function aumentarTempo(tempo) {
    let novoTempo = tempo +10
    tempoRestante = novoTempo
    alterarMensagem('Ganhou 10 segundos')
}

 // Função que exibe o time do jogo

export function exibirTime(segundos) {
    const time = document.createElement('p')
    
    time.textContent = segundos

    return time
}
const adicionaTime = document.querySelector('.time')
const criaElementoTime = exibirTime(tempoRestante)
adicionaTime.appendChild(criaElementoTime)


//Função que inicia o tempo do jogo
export function iniciarTempoDoJogo() {
    if (!statusDoJogo) {
        statusDoJogo = true;

        intervalId = setInterval(function () {
            tempoRestante--;
            
            
            // Atualizar o elemento de exibição do tempo
            criaElementoTime.textContent = tempoRestante
            console.log(`Tempo restante: ${tempoRestante}`)



            if (tempoRestante <= 10) {             
                
                alterarMensagem(`Restam ${tempoRestante} segundos`)
                
            }
            if (tempoRestante <= 0) {
                //tempo acabou
                
                clearInterval(intervalId)
                alterarMensagem('Acabou o tempo!')
                if (statusDoJogo) {
                    
                    atualizarRelatorio()
                }
                
            }

        }, 1000)
        
    }
}

