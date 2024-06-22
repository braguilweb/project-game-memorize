import { gerarNumeroAleatorio, alterarMensagem } from "./main.js"
import { aumentarTempo, tempoRestante } from "./tempo.js";


export let numeroAlvo 
export let statusRodada = false;
export let relatorioRodadas = []
export let maximoDePontos = []
export let pontos = 0
export let listaNumerosAlvo = []
export let listaIdPontuados = []
export let cliques = 0 //contador de cliques
export let somaResultados = 0 
export let rodada = []
export let idJogados = []
export let listaRodadaPontuadas = []
export let listaDeJogadas = []
export let listadeIdJogados = []
export let listaNumeroCompleta =[]
export let listaPosibilidadesDeJogadas = []
export let combinacoesDeJogadas = []
export let gabaritoDeJogadasOk =[]


export let listaNumeroAlvo = []
export const contagemValoresNumeroAlvo = []




//função que inicia o jogo
export function iniciarJogo() {
    
    
    alterarMensagem('Memorize os números!')
    

    numeroAlvo = []

    const escondeButtonJogar = document.querySelector('.button-jogar')
    escondeButtonJogar.style.display = 'none'

    const escondeButtonSair = document.querySelector('.button-sair');
    escondeButtonSair.style.display = 'initial'
    console.log('Jogo ligado')

    //Esconde Texto inicial
    const escondeTexto = document.querySelector('.texto');
    escondeTexto.style.display = 'none'

    //Esconde banner inicial

    const escondeBannerInicial = document.querySelector('.banner-inicial');
    escondeBannerInicial.style.display = 'none'
    

    let lista_a = [
        {id: 'a1', mascara: 'A', valor:gerarNumeroAleatorio(1, 10)},
        {id: 'a2', mascara: 'B', valor:gerarNumeroAleatorio(1, 10)}, 
        {id: 'a3', mascara: 'C', valor:gerarNumeroAleatorio(1, 10)}
    ];


    let lista_b = [
        {id: 'b1', mascara: 'D', valor:gerarNumeroAleatorio(1, 10)},
        {id: 'b2', mascara: 'E', valor:gerarNumeroAleatorio(1, 10)}, 
        {id: 'b3', mascara: 'F', valor:gerarNumeroAleatorio(1, 10)},
        {id: 'b4', mascara: 'G', valor:gerarNumeroAleatorio(1, 10)}
    ];

    let lista_c = [
        {id: 'c1', mascara: 'H', valor:gerarNumeroAleatorio(1, 10)},
        {id: 'c2', mascara: 'I', valor:gerarNumeroAleatorio(1, 10)}, 
        {id: 'c3', mascara: 'J', valor:gerarNumeroAleatorio(1, 10)},
        {id: 'c4', mascara: 'K', valor:gerarNumeroAleatorio(1, 10)},
        {id: 'c5', mascara: 'L', valor:gerarNumeroAleatorio(1, 10)}
    ];
    let lista_d = [
        {id: 'd1', mascara: 'M', valor:gerarNumeroAleatorio(1, 10)},
        {id: 'd2', mascara: 'N', valor:gerarNumeroAleatorio(1, 10)}, 
        {id: 'd3', mascara: 'O', valor:gerarNumeroAleatorio(1, 10)},
        {id: 'd4', mascara: 'P', valor:gerarNumeroAleatorio(1, 10)}
    ];
    let lista_e = [
        {id: 'e1', mascara: 'Q', valor:gerarNumeroAleatorio(1, 10)},
        {id: 'e2', mascara: 'R', valor:gerarNumeroAleatorio(1, 10)}, 
        {id: 'e3', mascara: 'S', valor:gerarNumeroAleatorio(1, 10)}
    ];

    //Concatenando as listas de a : e
    listaNumeroCompleta = listaNumeroCompleta.concat(
        lista_a,
        lista_b,    
        lista_c,
        lista_d,
        lista_e,        
    )
    
    // adicionando o id na lista completa
    const mapId = listaNumeroCompleta.map(item=> {    
        listaPosibilidadesDeJogadas.push(
            item.mascara
        )      
    })    

    // looping que cria as possibilidades de jogadas
    for (let i = 0; i < listaPosibilidadesDeJogadas.length; i++) {   
        for (let j = 0; j < listaPosibilidadesDeJogadas.length; j++) {
            for (let k = 0; k < listaPosibilidadesDeJogadas.length; k++) {
                if (listaPosibilidadesDeJogadas[i] !== listaPosibilidadesDeJogadas[j] && listaPosibilidadesDeJogadas[j] !== listaPosibilidadesDeJogadas[k] && listaPosibilidadesDeJogadas[i] !== listaPosibilidadesDeJogadas[k]) {
                    
                    const somaValoresId =   //compara o valor por id e faz a soma
                    listaNumeroCompleta.find(item => item.mascara === listaPosibilidadesDeJogadas[i]).valor +
                    listaNumeroCompleta.find(item => item.mascara === listaPosibilidadesDeJogadas[j]).valor +
                    listaNumeroCompleta.find(item => item.mascara === listaPosibilidadesDeJogadas[k]).valor ;

                    combinacoesDeJogadas.push([
                        listaPosibilidadesDeJogadas[i],
                        listaPosibilidadesDeJogadas[j],
                        listaPosibilidadesDeJogadas[k],
                        somaValoresId                        
                    ])
                }                              
            }
        }
    }      

    // Faz uma busca em combinacoesDeJogadas para contar a ocorrencia de cada valor único
    for (let i = 0; i < combinacoesDeJogadas.length; i++) {
        const valor = combinacoesDeJogadas[i][3]; // Pega valor da quarta posição do item
        let encontrado = false

        // Verifica se o valor já exite na lista de contagem
        for (let j = 0; j < contagemValoresNumeroAlvo.length; j++) {
            if (contagemValoresNumeroAlvo[j].valor === valor) {
                contagemValoresNumeroAlvo[j].quantidade ++
                encontrado = true;
                
                break
            }
        }
        if (!encontrado) {
            contagemValoresNumeroAlvo.push(
                {
                    valor: valor,
                    quantidade: 1
                }
            )
        }
    }

    //Cria a lista de números alvos entre 30 e 60 possibilidades de acertos
    const criandoListaNumeroAlvo = contagemValoresNumeroAlvo.filter(item => {
        if (item.quantidade >= 30 && item.quantidade <= 60) {
            numeroAlvo = item.valor
            maximoDePontos = item.quantidade
                        
            return item.valor, item.quantidade
        }
     })

    // Criando lista com jogadas que pontuam

    const combinacaoOk = combinacoesDeJogadas.filter(e => e[3] === numeroAlvo)
    gabaritoDeJogadasOk = combinacaoOk

     //Consoles

    console.log('numero alvo:',numeroAlvo, 'maximo de pontos:', maximoDePontos)
    console.log(criandoListaNumeroAlvo)
    console.log(contagemValoresNumeroAlvo)
    console.log(listaNumeroCompleta)
    console.log(listaPosibilidadesDeJogadas)
    console.log('Combinações aqui: ',combinacoesDeJogadas)
    console.log(combinacaoOk)

    // Função que termina a partida

    const buttonSair = document.getElementById('button-sair');

    buttonSair.addEventListener('click', function terminarJogo () {
        console.log('Eu quero sair daqui!!')
        window.location.reload()
    })


    //Função que imprimi o número alvo na tela do jogo

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

    //Função que muda o score

    function mudarScore () {
        const scoreElemento = document.querySelector('.score');
        while (scoreElemento.firstChild) {
            scoreElemento.removeChild(scoreElemento.firstChild)
        }

        const novoScore = criarScore();
        scoreElemento.appendChild(novoScore);
    }
    
    //Função que imprime as listas na tela do jogo

    function criarSectionseListas (section, lista) {
        //Mapeia a lista para criar divs com os números aleatórios
        const divs = lista.map( item => {
            const div = document.createElement('div');
            div.textContent = `${item.valor}`;
            div.className = 'card';
            div.id = `${item.id}`;
            setTimeout(()=>{
                div.textContent = `${item.mascara}`;
            },20000)

            //Adiciona evento de click  
            div.addEventListener('click', function(){
                armazenarJogada(item.valor, item.id); // captura valor e id no clique
                
                // armazenaId(item.id);
            }) 
            return div
        })
        const sectionHtml = document.querySelector(`.${section}`) //Seleciona section pelo nome da classe
        divs.forEach(div => sectionHtml.appendChild(div)); // Adiciona as divs de acordo com a section        
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

    // Função que armazena jogadas

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

        //Função que verifica se jogada já foi realizada
        

        /*Função que muda o score a cada ponto */

        if (cliques > 2 ) { // quando completa 3 cliques na jogada
           
            
            
            mostraSomaResultado.appendChild(criaElementoSoma) // imprime o resultado da soma

            console.log(`Soma dos resultados é: ${somaResultados}`)
            console.log(rodada, listadeIdJogados)
            listaDeJogadas.push(rodada,somaResultados ); //guarda o resultado da rodada
            listadeIdJogados.push(idJogados) // guarda o resultado de id da rodada

            

            if (somaResultados === numeroAlvo ) { //se o jogador acertou o alvo ganha um ponto, reinicia outra rodada
                
                console.log('lista de id com join: ', idJogados.join(','))
                const idPontuado = idJogados.join(',')    //tranforma idJogado em string
                //compara idPontuado e faz a conferencia
                const conferenciaDeIdPontuado = (element)=> element === idPontuado 
                const conferencia = listaIdPontuados.some(conferenciaDeIdPontuado)

                if (!conferencia) { // se a sequencia for validada é pontuado
                    console.log('sequencia nunca usada ',idPontuado)
                    listaIdPontuados.push(idPontuado) // adiciona idPontuado na lista
                    listaRodadaPontuadas.push(idJogados)

                    pontos++
                    console.log("ganha mais 10 segundos")
                    aumentarTempo(tempoRestante)
                    
                    mudarScore()

                    headerBadge.appendChild(numeroAlvoElemento)  //numero alvo roda
                    console.log('Parabéns Acertou ', numeroAlvo)//exibe mensagem 'Parabéns

                    // Adicione informações da rodada ao relatórioRodadas
                    relatorioRodadas.push({
                        rodada: relatorioRodadas.length + 1,
                        numerosEscolhidos: rodada.join(' '),
                        resultado: `= ${somaResultados}`,
                        status: somaResultados === numeroAlvo ? 'Acertou' : 'Errou'
                    });

                    console.log('limpar a tela de resultado')
                    limparJogada()
                    alterarMensagem('Parabéns! Acertou!')
                } else {
                    limparJogada()
                    alterarMensagem('Sequência já pontuada!')
                }           
                
            } else { // Se não acertou o alvo perde ponto, reinicia outra rodada
                pontos--
                listaIdPontuados.push(idJogados) // adiciona idJogado na lista

                // Adicione informações da rodada ao relatórioRodadas
                relatorioRodadas.push({
                    rodada: relatorioRodadas.length + 1,
                    numerosEscolhidos: rodada.join(' '),
                    resultado: `= ${somaResultados}`,
                    status: somaResultados === numeroAlvo ? 'Acertou' : 'Errou'
                });

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

            
            reiniciaDadosDaJogada()
            console.log(relatorioRodadas)// tirar depois
            
        }
    }

    criarSectionseListas('lista_a', lista_a);
    criarSectionseListas('lista_b', lista_b);
    criarSectionseListas('lista_c', lista_c);
    criarSectionseListas('lista_d', lista_d);
    criarSectionseListas('lista_e', lista_e);


}


