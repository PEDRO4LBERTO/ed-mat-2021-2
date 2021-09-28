/*
    INSTRUÇÕES

    1) Identifique o algoritmo abaixo.
    2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
    3) Introduza a função de comparação, de modo que o algoritmo possa ser utilizado com vetores de objetos.

*/

const z = (y, comp) => {                                 // Z = Função de ordenação; Y = Vetor
    for(let x = 0; x < y.length - 1; x++) {              // X = Responsavel por ir até a penultima posição do vetor
        let w = x + 1                                    // W = Posição menor
        for(let i = w + 1; i < y.length; i++) {          // I = Inicio 
            if(comp(y[w] > y[i])) w = i                  // com = função de comparação
        }
        if(comp(y[x] > y[w])) {
            [ y[x], y[w] ] = [ y[w], y[x] ]
        }
    }
}




