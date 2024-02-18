
import { pontos, relatorioRodadas, listaRodadaPontuadas } from "./jogo.js";

export function atualizarRelatorio() {


    const relatorioSection = document.getElementById('relatorioSection');

    relatorioSection.innerHTML = '';

    //Adiciona novo conteudo
    const tituloRelatorio = document.createElement('div')
    tituloRelatorio.className = 'relatorio__titulo';
    tituloRelatorio.textContent = '| O TEMPO ACABOU |';


    const resumoRelatorio = document.createElement('div');
    resumoRelatorio.className = 'relatorio__resumo'
    
    resumoRelatorio.textContent = `Número de Acertos: ${listaRodadaPontuadas.length} | Tentativas: ${relatorioRodadas.length} | Pontos: ${pontos}`;

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