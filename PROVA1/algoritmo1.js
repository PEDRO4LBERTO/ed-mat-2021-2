/*
    INSTRUÇÕES

    1) Identifique o algoritmo abaixo.
    2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
    3) Introduza a função de comparação, de modo que o algoritmo possa ser utilizado com vetores de objetos.

*/

const z = (y, comp) => {                        // Z = Função de ordenação; Y = Vetor que será ordenado
    if(y.length < 2) return y                   // comp = Função de comparação
    let x = Math.floor(y.length / 2)            // X = Meio do vetor
    let w = y.slice(0, x)                       // W = Vetor esquerdo
    let v = y.slice(x)                          // V = Vetor direito
    w = z(w, comp)
    v = z(v, comp)
    let u                                       // U = Sobra do vetor
    w = z(w)
    v = z(v)
    let t = 0, s = 0, r = []
    while(t < w.length && s < v.length) {
        if(comp(w[t] < v[s])) {                 // T = Posição da Esquerda; S = Posição da Direita
            r.push(w[t])                        // R = Esse é o vetor final onde ficara ordenado
            t++
        }
        else {
            r.push(v[s])
            s++
        }
    }
    if(t < s) u = w.slice(t)            
    else u = v.slice(s)
    return [...r, ...u]
}
