//metodo match
//para exibir todas as ocorrencias dentro de um array coloca-se (g) no final da verificação
let produtos = "3210232-B\n322032321-B\n321212121-C\n9885-D\n65560565-E\n9879908983213132-F";
console.log(produtos);
const regex = /[0-9]+[-][A-Z]/;
const resultado = produtos.match(regex);
console.log(resultado);


//metodo Exec: recupera o resultado da correspondência de uma string com uma expressão regular
//regex.exec(string)
// const resultado1 = regex.exec(produtos)
// console.log(resultado1);