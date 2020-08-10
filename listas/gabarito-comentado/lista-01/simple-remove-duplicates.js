/**
 *
 * @param arr um array de numeros inteiros
 * Aqui, devemos remover duplicatas que
 * estejam à esquerda do array. Ou seja,
 * ao percorrer um array do tipo [3,4,4,4,5],
 * eliminaremos os 4 que estão à esquerda e
 * teremos [3,x,x,4,5] (Onde x representa apenas o
 * número que foi removido)
 *
 * Para resolver isso, vamos fazer uso dos métodos
 * filter e lastIndexOf. Filter nos permite retornar
 * um novo array com base nos elementos que passaram
 * no teste implementado por uma função fornecida.
 * O método lastIndexOf retorna o índice da última
 * ocorrência do valor especificado.
 *
 */
const solve = (arr) => arr.filter((val, i) => arr.lastIndexOf(val) == i);
