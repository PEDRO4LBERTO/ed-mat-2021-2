/*
    BUBBLE SORT
    Percorre o conjunto de dados, comparando o elemento atual com o seu
    sucessor e promovendo a troca entre eles caso o primeiro seja maior
    que o segundo.
    Faz isso em várias passadas, até, que, na última delas, nenhuma troca
    tenha sido registrada.
*/


let pass, comps, trocas

function bubbleSort(vetor) {

    pass = 0, comps = 0, trocas = 0
    let trocou

    do {
        pass++
        trocou = false

        // Percurso for tradicional até a PENÚLTIMA posição do vetor
        for(let i = 0; i < vetor.length - 1; i++) {
            comps++
            if(vetor[i] > vetor[i + 1]) {
                // Efetua a troca entre os elementos por desestruturação
                [ vetor[i], vetor[i + 1] ] = [ vetor[i + 1], vetor[i] ]
                trocou = true
                trocas++
            }
        }

    } while(trocou)
}

//let nums = [ 77, 44, 22, 33, 99, 55, 88, 0, 66, 11 ]

//pior caso
//let nums = [99, 88, 77, 66, 55, 44, 33, 22, 11, 0]

//Melhor caso
let nums = [18, 17, 19, 17, 18, 18, 20, 18, 18, 18, 19, 18, 21, 18, 20, 
    18, 20, 18, 18, 19, 18, 19, 19, 19, 18, 19, 19, 21, 19, 19, 
    19, 21, 17, 19, 19, 18, 19, 19, 18, 20, 20, 18, 20, 18, 20, 
    20, 19, 19, 21, 18]

bubbleSort(nums)
console.log(nums)
console.log({pass, comps, trocas})

/******************************************************************************* */

/*import { nomes } from './data/nomes-desord.mjs'

console.time('tempo de ordenação')
bubbleSort(nomes)
console.timeEnd('tempo de ordenação')

console.log(nomes)
console.log({pass, comps, trocas})   */