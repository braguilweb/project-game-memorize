console.log("aguardando clicar no iniciar ")
let statusDoJogo = false
let statusRodada = false;
let relatorioRodadas = []
let pontos = 0


//Função que gera número aleatório
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let numeroAlvo 
let listaNumerosAlvo = []

//função que inicia o jogo
function iniciarJogo() {
    statusDoJogo = true
    
    alterarMensagem('Memorize os números!')

    numeroAlvo = gerarNumeroAleatorio(5, 16)

    const escondeButtonJogar = document.querySelector('.button-jogar')
    escondeButtonJogar.style.display = 'none'

    const escondeButtonSair = document.querySelector('.button-sair');
    escondeButtonSair.style.display = 'initial'
    console.log('Jogo ligado')

    //Esconde Txto inicial
    const escondeTexto = document.querySelector('.texto');
    escondeTexto.style.display = 'none'

    //Esconde baner inicial

    const escondeBannerInicial = document.querySelector('.banner-inicial');
    escondeBannerInicial.style.display = 'none'
    
    
    


    let lista_a = [
        {id: 'a1', valor:gerarNumeroAleatorio(1, 6)},
        {id: 'a2', valor:gerarNumeroAleatorio(1, 5)}, 
        {id: 'a3', valor:gerarNumeroAleatorio(1, 5)}
    ];


    let lista_b = [
        {id: 'b1', valor:gerarNumeroAleatorio(1, 5)},
        {id: 'b2', valor:gerarNumeroAleatorio(1, 7)}, 
        {id: 'b3', valor:gerarNumeroAleatorio(1, 5)},
        {id: 'b4', valor:gerarNumeroAleatorio(1, 6)}
    ];

    let lista_c = [
        {id: 'c1', valor:gerarNumeroAleatorio(1, 7)},
        {id: 'c2', valor:gerarNumeroAleatorio(1, 5)}, 
        {id: 'c3', valor:gerarNumeroAleatorio(1, 10)},
        {id: 'c4', valor:gerarNumeroAleatorio(1, 5)},
        {id: 'c5', valor:gerarNumeroAleatorio(1, 7)}
    ];
    let lista_d = [
        {id: 'd1', valor:gerarNumeroAleatorio(1, 6)},
        {id: 'd2', valor:gerarNumeroAleatorio(1, 5)}, 
        {id: 'd3', valor:gerarNumeroAleatorio(1, 6)},
        {id: 'd4', valor:gerarNumeroAleatorio(1, 5)}
    ];
    let lista_e = [
        {id: 'e1', valor:gerarNumeroAleatorio(1, 6)},
        {id: 'e2', valor:gerarNumeroAleatorio(1, 5)}, 
        {id: 'e3', valor:gerarNumeroAleatorio(1, 7)}
    ];

       

    
    // Função que termina a partida

    const buttonSair = document.getElementById('button-sair');

    buttonSair.addEventListener('click', function terminarJogo () {
        console.log('Eu quero sair daqui!!')
        window.location.reload()
    })


    

    function criarNumeroAlvo() {
        
        const alvo = document.createElement('p');
        alvo.textContent = `?`;
        alvo.className = 'alvo';

        setTimeout(() => {
            alvo.textContent = `${numeroAlvo}`
        },20000)
        listaNumerosAlvo.push(numeroAlvo)

        return alvo;
    }

    // seleciona o h2 e adiciona o numero alvo
    const numeroAlvoElemento = criarNumeroAlvo();
    const headerBadge = document.querySelector('.badge')
                //adiciona numero alvo
    headerBadge.appendChild(numeroAlvoElemento)               
                




    


    //Função que cria o score 0
    function criarScore() {
        const score = document.createElement('p');
        score.textContent = pontos;

        return score;
    }
    const criaElementoScore = criarScore()
    const adicionaScore = document.querySelector('.score')
    adicionaScore.appendChild(criaElementoScore)
    criarScore()

    function mudarScore () {
        const scoreElemento = document.querySelector('.score');
        while (scoreElemento.firstChild) {
            scoreElemento.removeChild(scoreElemento.firstChild)
        }

        const novoScore = criarScore();
        scoreElemento.appendChild(novoScore);
    }

    
    
    
    //Função que cria as listas a a e

    function criarSectionseListas (section, lista) {
        //Mapeia a lista para criar divs com os números aleatórios
        const divs = lista.map( item => {
            const div = document.createElement('div');
            div.textContent = `${item.valor}`;
            div.className = 'card';
            div.id = `${item.id}`;

            //Adiciona evento de click
            div.addEventListener('click', function(){
                armazenarJogada(item.valor, item.id); // captura valor e id no clique
                
                // armazenaId(item.id);
            }) 
            return div
        })
        const sectionHtml = document.querySelector(`.${section}`) //Seleciona section pelo nome da classe
        divs.forEach(div => sectionHtml.appendChild(div)); // Adiciona as divs de acordo com a section

        //Função  que após 20 segundos altera cor do texto da div
        setTimeout(()=> {
            divs.forEach(div => {
                div.style.color = '#000000';
                div.textContent = '?'
            });
        }, 20000)
    }

    //função que limpa a jogada da tela

    function limparJogada() {  
        setTimeout(() => {
            const jogadaElemento = document.querySelector('.jogada');
            while (jogadaElemento.firstChild) {
            jogadaElemento.removeChild(jogadaElemento.firstChild);
        }

        const somaResultadoElementos = document.querySelector('.resultado');
        while (somaResultadoElementos.firstChild) {
            somaResultadoElementos.removeChild(somaResultadoElementos.firstChild)
        }

        
        console.log('dados limpos da tela')
        }, 1300)         
        
    }


    let cliques = 0 //contador de cliques
    let somaResultados = 0 
    let rodada = []
    let idJogados = []

    let listaDeJogadas = []
    let listadeIdJogados = []


    function armazenarJogada (numero, id) {
        if (idJogados.includes(id)) {
            console.log('Você já clicou nesse escolha outro')
            alterarMensagem('Escolha outro')
            
            return;
        }
        idJogados.push(id)
        
        somaResultados += numero;
        rodada.push(numero)
        
        console.log(`soma: ${somaResultados}`)
        console.log(`id: ${idJogados}`)

        /* Funcção que captura o numero clicado e imprime */
        function exibirJogada() {
            cliques++ 
            const jogada = document.createElement('p');
            jogada.textContent = numero;
            return jogada
        }
        const criaElementoJogada = exibirJogada();
        const mostraElementoJogada = document.querySelector('.jogada')
        mostraElementoJogada.appendChild(criaElementoJogada)

        

        /* Função que soma os resultados a cada clique e imrime*/    
        function exibirSomaResultados() {
            const soma = document.createElement('p');
            soma.textContent = `= ${somaResultados}`;

            return soma;

        }
        const criaElementoSoma = exibirSomaResultados();
        const mostraSomaResultado = document.querySelector('.resultado');

       


        //função que reinicia os dados da jogada
        function reiniciaDadosDaJogada () {
            cliques = 0
            somaResultados = 0
            rodada = []
            idJogados = []
            
            console.log("Pontuação: ",pontos, " Dados zerados")
            console.log(`Cliques: ${cliques}, SomaResultados: ${somaResultados}, rodada: ${rodada}`)

        }

        /*Função que muda o score a cada ponto */

        if (cliques > 2) { // quando completa 3 cliques na jogada
            

            
            mostraSomaResultado.appendChild(criaElementoSoma) // imprime o resultado da soma

            console.log(`Soma dos resultados é: ${somaResultados}`)
            console.log(rodada, listadeIdJogados)
            listaDeJogadas.push(rodada,somaResultados ); //guarda o resultado da rodada
            listadeIdJogados.push(idJogados) // guarda o resultado de id da rodada
            

            if (somaResultados === numeroAlvo ) { //se o jogador acertou o alvo ganha um ponto, reinicia outra rodada
                pontos++
                console.log("ganha mais 10 segundos")
                aumentarTempo(tempoRestante)
                
                mudarScore()
                
                headerBadge.appendChild(numeroAlvoElemento)  //numero alvo roda
                console.log('Parabéns Acertou ', numeroAlvo)//exibe mensagem 'Parabéns
                console.log('limpar a tela de resultado')
                limparJogada()
                alterarMensagem('Parabéns! Acertou!')
                
            } else { // Se não acertou o alvo perde ponto, reinicia outra rodada
                pontos--
                console.log(`GAME OVER! Você escolheu: ${rodada}|Total: ${somaResultados} \nPerdeu 1 ponto `)
                mudarScore()
                limparJogada()
                alterarMensagem('Errou!')
                
                if (pontos < 0) {
                    console.log('Você não tem mais pontos - Clique em reiniciar')
                } else {
                    console.log(`Voce ainda tem ${pontos} tentativas`)
                    console.log('Deseja continuar jogando?')
                }
                
            }

            // Adicione informações da rodada ao relatório
            relatorioRodadas.push({
                rodada: relatorioRodadas.length + 1,
                numerosEscolhidos: rodada.join(' '),
                resultado: `= ${somaResultados}`,
                status: somaResultados === numeroAlvo ? 'Acertou' : 'Errou'
            });
            reiniciaDadosDaJogada()
            
        }
    }

    criarSectionseListas('lista_a', lista_a);
    criarSectionseListas('lista_b', lista_b);
    criarSectionseListas('lista_c', lista_c);
    criarSectionseListas('lista_d', lista_d);
    criarSectionseListas('lista_e', lista_e);

    


}

function exibirRelatorioFinal() {
    console.log('Relatório do Jogo');
    console.log(`Número Alvo: ${numeroAlvo} | Rodadas: ${relatorioRodadas.length} | Pontos: ${pontos}`);

    relatorioRodadas.forEach(rodada => {
        console.log(`${rodada.rodada}ª Rodada: ${rodada.numerosEscolhidos} ${rodada.resultado} ${rodada.status}`);
    });
}

 // função que muda broadcasting
function alterarMensagem(mensagem) {
const broadcastingElemento = document.querySelector('.broadcasting p');
broadcastingElemento.textContent = mensagem;
}

//Variaveis que controlam o tempo do jogo
let tempoRestante = 90;
let intervalId;






//Função que aumenta 10 segundos ao acertar a jogada
function aumentarTempo(tempo) {
    let novoTempo = tempo +10
    tempoRestante = novoTempo
    alterarMensagem('Ganhou 10 segundos')
}

 // Função que exibe o time do jogo

 function exibirTime(segundos) {
    const time = document.createElement('p')
    
    time.textContent = segundos

    return time
}
const adicionaTime = document.querySelector('.time')
const criaElementoTime = exibirTime(tempoRestante)
adicionaTime.appendChild(criaElementoTime)


//Função que inicia o tempo do jogo
function iniciarTempoDoJogo() {
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
                    exibirRelatorioFinal();
                    atualizarRelatorio()
                }
                
            }

        }, 1000)
        
    }
}



const buttonIniciarTempo = document.querySelector('.button-jogar')
buttonIniciarTempo.addEventListener('click', iniciarTempoDoJogo)

// Adicione um evento de clique ao botão de início
const buttonIniciar = document.getElementById("button-jogar");

buttonIniciar.addEventListener("click", function () {
    // Chame a função iniciarJogo quando o botão for clicado
    iniciarJogo();       
});

//esconder botão sair na tela inicial
const escondeButtonSair = document.querySelector('.button-sair');
if (!statusDoJogo) {    
    escondeButtonSair.style.display = 'none'
    console.log('Jogo desligado')
}  

// função relatório final

function atualizarRelatorio() {


    const relatorioSection = document.getElementById('relatorioSection');

    relatorioSection.innerHTML = '';

    //Adiciona novo conteudo
    const tituloRelatorio = document.createElement('div')
    tituloRelatorio.className = 'relatorio__titulo';
    tituloRelatorio.textContent = '| O TEMPO ACABOU |';


    const resumoRelatorio = document.createElement('div');
    resumoRelatorio.className = 'relatorio__resumo'
    
    resumoRelatorio.textContent = `Numero Alvo: ${numeroAlvo} | Tentativas: ${relatorioRodadas.length} | Pontos: ${pontos}`;

    const relatorioDetalhado = document.createElement('div');
    relatorioDetalhado.className = 'relatorio__detalhado';

    relatorioRodadas.forEach(rodada => {
        const textoRodada = document.createElement('p');
        textoRodada.className = 'relatorio__texto';
        textoRodada.textContent = `${rodada.rodada}ª Tentativa: ${rodada.numerosEscolhidos} ${rodada.resultado} ${rodada.status}`;
        relatorioDetalhado.appendChild(textoRodada)
    })

    const agradecimento = document.createElement('div')
    agradecimento.className = 'relatorio__detalhado';
    agradecimento.textContent = `Obrigado por jogar! \nEsse jogo está em desenvolvimento.\nNos conte como foi sua experiência!`

    const linkAvaliacao = document.createElement('a')
    linkAvaliacao.className = 'button-avaliar'
    linkAvaliacao.href = 'https.estudiobraga.online'
    linkAvaliacao.textContent = 'Avaliar Jogo'
    linkAvaliacao.target = '_blank'

    const linkSair = document.createElement('a')
    linkSair.className = 'button-avaliar'
    
    linkSair.textContent = 'Sair'
    linkSair.target = '_blank'
    linkSair.href = '#';
    linkSair.addEventListener('click', function () {
    window.location.reload();
    });



    relatorioSection.appendChild(tituloRelatorio);
    relatorioSection.appendChild(resumoRelatorio);
    relatorioSection.appendChild(relatorioDetalhado)
    relatorioSection.appendChild(agradecimento)
    relatorioSection.appendChild(linkAvaliacao)
    relatorioSection.appendChild(linkSair)

    const elementoRelatorio = document.querySelector('.relatorio'); //Mostra o relatório
    elementoRelatorio.style.display = 'flex'
}