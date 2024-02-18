let lista_a = [
    {id: 'a1', valor:(1)},
    {id: 'a2', valor:(2)}, 
    {id: 'a3', valor:(1)}
  ];
  
  let lista_b = [
    {id: 'b1', valor:(2)},
    {id: 'b2', valor:(4)}, 
    {id: 'b3', valor:(2)},
    {id: 'b4', valor:(3)}
  ];
  
  let lista_c = [
    {id: 'c1', valor:(4)},
    {id: 'c2', valor:(3)}, 
    {id: 'c3', valor:(5)},
    {id: 'c4', valor:(2)},
    {id: 'c5', valor:(5)}
  ];
  let lista_d = [
    {id: 'd1', valor:(1)},
    {id: 'd2', valor:(1)}, 
    {id: 'd3', valor:(1)},
    {id: 'd4', valor:(5)}
  ];
  let lista_e = [
    {id: 'e1', valor:(1)},
    {id: 'e2', valor:(5)}, 
    {id: 'e3', valor:(1)}
  ];
  
  
  let todasAsListas = [lista_a, lista_b, lista_c, lista_d, lista_e];
  
  function criarCombinacoes(listas) {
    let combinacoes = [];
    listas.forEach(lista => {
      listas.forEach(outraLista => {
        listas.forEach(outraLista2 => {
          lista.forEach(itemA => {
            outraLista.forEach(itemB => {
              outraLista2.forEach(itemC => {
                // Verifica se os IDs não se repetem dentro da lista
                if ([itemA.id, itemB.id, itemC.id].length === new Set([itemA.id, itemB.id, itemC.id]).size) {
                  combinacoes.push({
                    id: [itemA.id, itemB.id, itemC.id],
                    soma: itemA.valor + itemB.valor + itemC.valor
                  });
                }
              });
            });
          });
        });
      });
    });
    return combinacoes;
  }
  
  let resultado = criarCombinacoes(todasAsListas);
  console.log(resultado);
  
  
  // Verificar se a entrada está dentro da lista de combinações
  let entrada = [
      "a3",
      "a1",
      "a1"
    ]
  
  let encontrada = resultado.some(comb => entrada.every(id => comb.id.includes(id)));
  
  if (encontrada) {
    console.log("A entrada está na lista de combinações.");
  } else {
    console.log("A entrada não está na lista de combinações.");
  }
  
  
  
  function contarCombinacoesComSomaIgual(listas, numeroAlvo) {
    let quantidade = 0;
    listas.forEach(lista => {
      lista.forEach(item => {
        let soma = item.valor;
        if (soma === numeroAlvo) {
          quantidade++;
        }
        listas.forEach(outraLista => {
          outraLista.forEach(itemB => {
            let novaSoma = soma + itemB.valor;
            if (novaSoma === numeroAlvo) {
              quantidade++;
            }
            listas.forEach(outraLista2 => {
              outraLista2.forEach(itemC => {
                let novaSomaFinal = novaSoma + itemC.valor;
                if (novaSomaFinal === numeroAlvo) {
                  quantidade++;
                }
              });
            });
          });
        });
      });
    });
    return quantidade;
  }
  
  let numeroAlvo = 15;
  let quantidade = contarCombinacoesComSomaIgual(todasAsListas, numeroAlvo);
  console.log("Quantidade de combinações com soma igual a", numeroAlvo + ":", quantidade);