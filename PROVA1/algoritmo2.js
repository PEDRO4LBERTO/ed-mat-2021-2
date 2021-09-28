/*
    INSTRUÇÕES

    1) Identifique o algoritmo abaixo.
    2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
    3) Introduza a função de comparação, de modo que o algoritmo possa ser utilizado com vetores de objetos.

*/

const z = (y, x) => {           // Z = função de busca; Y = vetor; X = Função de comparação
    let w = 0                   // W = inicio do vetor
    let v = y.length - 1        // V = Final do vetor
    while(v >= w) {
        let u = Math.floor((w + v) / 2)   // U = Divisão do vetor
        if(x === y[u]) return u
        else if(x > y[u]) w = u + 1
        else v = u - 1

//3) Introduza a função de comparação, de modo que o algoritmo possa ser utilizado com vetores de objetos.
        switch(x(y[u])){          // X = função de comparação; 
            case 0:               
                return u
            case -1:              
                v= u - 1
                break
            case 1:              
                w = u + 1

        }
    }
    return -1      
}
