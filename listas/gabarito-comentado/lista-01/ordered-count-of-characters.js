/**
 *
 * @param text
 * Nesse problema, devemos receber um texto
 * como input e retornar a quantidade de
 * caracteres na ordem em que eles aparecem.
 * Caso a entrada seja uma string vazia,
 * retornamos um array vazio.
 *
 * Primeiro, vamos criar um array com base na
 * entrada usando o método split.
 * Depois, vamos aplicar o método filter para
 * transformar nosso array original em um
 * array de elementos únicos.
 * A função de filtro utiliza o método indexOf e compara
 * ele com a posição atual do filtro. Caso a  posição
 * do elemento seja a posição do índice, o teste retorna
 * verdadeiro e o elemento é salvo no novo array.
 *
 * Por fim, usamos o método map para percorrer o array
 * de elementos únicos, e para cada entrada, vamos retornar
 * uma tupla (ou seja, um array com dois elementos),
 * onde a primeira posição seja a letra correspondente e a
 * segunda a quantidade de vezes em que ela é exibida.
 * Para contar a quantidade de vezes que a letra existe
 * na palavra, fazemos um split no texto original pela letra,
 * verificamos o tamanho do array resultante e subtraímos uma unidade
 * (já que o método length começa a contar do 0)
 *
 */

var orderedCount = function (text) {
  var letters = text.split("");
  var uniqs = letters.filter(
    (letter, index) => letters.indexOf(letter) == index
  );

  return uniqs.map((letter) => [letter, text.split(letter).length - 1]);
};
