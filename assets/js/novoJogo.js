
//Função que gera número aleatório
export function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}



let lista_a = [
        {id: 'a1', mascara: 'A', valor:gerarNumeroAleatorio(1, 6)},
        {id: 'a2', mascara: 'B', valor:gerarNumeroAleatorio(1, 5)}, 
        {id: 'a3', mascara: 'C', valor:gerarNumeroAleatorio(1, 5)}
    ];


    let lista_b = [
        {id: 'b1', mascara: 'D', valor:gerarNumeroAleatorio(1, 5)},
        {id: 'b2', mascara: 'E', valor:gerarNumeroAleatorio(1, 7)}, 
        {id: 'b3', mascara: 'F', valor:gerarNumeroAleatorio(1, 5)},
        {id: 'b4', mascara: 'G', valor:gerarNumeroAleatorio(1, 6)}
    ];

    let lista_c = [
        {id: 'c1', mascara: 'H', valor:gerarNumeroAleatorio(1, 7)},
        {id: 'c2', mascara: 'I', valor:gerarNumeroAleatorio(1, 5)}, 
        {id: 'c3', mascara: 'J', valor:gerarNumeroAleatorio(1, 10)},
        {id: 'c4', mascara: 'K', valor:gerarNumeroAleatorio(1, 5)},
        {id: 'c5', mascara: 'L', valor:gerarNumeroAleatorio(1, 7)}
    ];
    let lista_d = [
        {id: 'd1', mascara: 'M', valor:gerarNumeroAleatorio(1, 6)},
        {id: 'd2', mascara: 'N', valor:gerarNumeroAleatorio(1, 5)}, 
        {id: 'd3', mascara: 'O', valor:gerarNumeroAleatorio(1, 6)},
        {id: 'd4', mascara: 'P', valor:gerarNumeroAleatorio(1, 5)}
    ];
    let lista_e = [
        {id: 'e1', mascara: 'Q', valor:gerarNumeroAleatorio(1, 6)},
        {id: 'e2', mascara: 'R', valor:gerarNumeroAleatorio(1, 5)}, 
        {id: 'e3', mascara: 'S', valor:gerarNumeroAleatorio(1, 7)}
    ];

let listaX = []

listaX = listaX.concat(
  lista_a,
  lista_b,
  lista_c,
  lista_d,
  lista_e
)

const mapId = listaX.map((item)=> item.id)
const mapValor = listaX.map((item)=> item.valor)

// Cria primeira linha do jogo

let linhaA = []
for (let i = 0; i <= 2; i++) {
  linhaA.push(mapId[i])
}

const mapLinhaA = linhaA.map(item => {
  const divLinhaA = document.createElement('div');
  divLinhaA.textContent = `${listaX.find(element => element.id === item).valor}`;
  
  divLinhaA.className = 'card'
  divLinhaA.id = `${item.id}`
  setTimeout(() => {
  divLinhaA.textContent = `${listaX.find(element => element.id === item).mascara}`;
}, "10000");
  
  return divLinhaA
})

const criaSectionLinhaA = document.querySelector('.linhaA')
mapLinhaA.forEach(divLinhaA => criaSectionLinhaA.appendChild(divLinhaA))

// fim da primeira linha

// Cria segunda linha do jogo linhaB
let linhaB = []
for (let i = 3; i <= 6; i++) {
  linhaB.push(mapId[i])
}

const mapLinhaB = linhaB.map(item => {
  const divLinhaB = document.createElement('div');
  divLinhaB.textContent = `${listaX.find(element => element.id === item).valor}`;
  
  divLinhaB.className = 'card'
  divLinhaB.id = `${item.id}`
  setTimeout(() => {
  divLinhaB.textContent = `${listaX.find(element => element.id === item).mascara}`;
}, "10000");
  
  return divLinhaB
})

const criaSectionLinhaB = document.querySelector('.linhaB')
mapLinhaB.forEach(divLinhaB => criaSectionLinhaB.appendChild(divLinhaB))
//Fim da segunda linha linhaB

// Cria terceira linha do jogo linhaC
let linhaC = []
for (let i = 7; i <= 11; i++) {
  linhaC.push(mapId[i])
}

const mapLinhaC = linhaC.map(item => {
  const divLinhaC = document.createElement('div');
  divLinhaC.textContent = `${listaX.find(element => element.id === item).valor}`;
  
  divLinhaC.className = 'card'
  divLinhaC.id = `${item.id}`
  setTimeout(() => {
  divLinhaC.textContent = `${listaX.find(element => element.id === item).mascara}`;
}, "10000");
  
  return divLinhaC
})

const criaSectionLinhaC = document.querySelector('.linhaC')
mapLinhaC.forEach(divLinhaC => criaSectionLinhaC.appendChild(divLinhaC))
//Fim da segunda linha linhaC

// Cria quarta linha do jogo linhaD
let linhaD = []
for (let i = 12; i <= 15; i++) {
  linhaD.push(mapId[i])
}

const mapLinhaD = linhaD.map(item => {
  const divLinhaD = document.createElement('div');
  divLinhaD.textContent = `${listaX.find(element => element.id === item).valor}`;
  
  divLinhaD.className = 'card'
  divLinhaD.id = `${item.id}`
  setTimeout(() => {
  divLinhaD.textContent = `${listaX.find(element => element.id === item).mascara}`;
}, "10000");
  
  return divLinhaD
})

const criaSectionLinhaD = document.querySelector('.linhaD')
mapLinhaD.forEach(divLinhaD => criaSectionLinhaD.appendChild(divLinhaD))
//Fim da segunda linha linhaD

// Cria quinta linha do jogo linhaE
let linhaE = []
for (let i = 16; i <= 18; i++) {
  linhaE.push(mapId[i])
}

const mapLinhaE = linhaE.map(item => {
  const divLinhaE = document.createElement('div');
  divLinhaE.textContent = `${listaX.find(element => element.id === item).valor}`;
  
  divLinhaE.className = 'card'
  divLinhaE.id = `${item.id}`
  setTimeout(() => {
  divLinhaE.textContent = `${listaX.find(element => element.id === item).mascara}`;
}, "10000");
  
  return divLinhaE
})

const criaSectionLinhaE = document.querySelector('.linhaE')
mapLinhaE.forEach(divLinhaE => criaSectionLinhaE.appendChild(divLinhaE))
//Fim da segunda linha linhaE

// console.log(mapIdLista)

console.log(linhaA, linhaB, linhaC, linhaD, linhaE)
console.log(mapId)
console.log(mapValor)

const sequencias = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S'];
const combinacoes = [];

for (let i = 0; i < sequencias.length; i++) {
    for (let j = 0; j < sequencias.length; j++) {
        for (let k = 0; k < sequencias.length; k++) {
            if (sequencias[i] !== sequencias[j] && sequencias[j] !== sequencias[k] && sequencias[i] !== sequencias[k]) {
                combinacoes.push([sequencias[i], sequencias[j], sequencias[k]]);
            }
        }
    }
}

console.log(combinacoes);


        