/**
 *
 * @param x
 * A função recebe como entrada a string de dígitos.
 * Deve retornar uma string contendo apenas sequencias de
 * 0 e 1.
 * A instrução dada diz que substituir números maiores ou iguais
 * a 5 por 1, e outros  números por 0
 * Para resolver esse problemas, vamos sugerir duas alternativas
 */

/**
 *
 * A primeira alternativa é usando o método para percorrer Arrays map.
 * Primeiro, transformamos a string de dígitos em um array com o método split
 * Depois, com map, checamos se o dígito atual e aplicamos o operador ternário
 * para responder nossa pergunta. É necessário converter o dígito para um número
 * e por isso usamos o símbolo [+] a frente do item atual (representado por d).
 * Ou seja, caso o dígito atual seja maior ou igual a 5, retornamos 1, caso
 * contrário, retornamos 0.
 * Após completar esse mapeamento, transformamos nosso array de 0 e 1 em uma string
 * única
 */
function fakeBin(x) {
  return x
    .split("") // Separa a string criando um array de elementos
    .map((d) => (+d >= 5 ? "1" : "0")) //
    .join(""); // Junta o novo array em uma string
}

/**
 * Nessa abordagem, começamos com uma string vazia (newStr).
 * Usamos um form para percorrer a nossa entrada
 * (que devemos lembrar, é uma string de dígitos).
 * Para cada elemento da string, vamos perguntar:
 * Se o dígito é maior ou igual a 5, adicionamos '1' em newStr;
 * Caso contrário, adicionamos 0 em newStr
 * Por fim, retornamos newStr
 */
function fakeBin(str) {
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    if (Number(str[i]) >= 5) {
      newStr += "1";
    } else {
      newStr += "0";
    }
  }
  return newStr;
}
