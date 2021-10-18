//regex serve para fazer validações neste exemblo utilizamos uma string (hello world)
//e verificamos com o regex se ela possui (hello) no seu texto utilizando o metodo test.
//metodo test e uma function do regex

const stringTest = "Hello World!!!";
const regex = /Hello/;
// console.log(regex.test(stringTest)); //true


const regexH = /H/;
const regexL = /l/;
const regexLL = /ll/;
// console.log(regexH.test(stringTest)); //true
// console.log(regexL.test(stringTest)); //true
// console.log(regexLL.test(stringTest)); //true


//neste exemplo estamos buscando pelo caractere w porem ele e minusculo e não vai ser encontrado
//por isso utilizamos o (i) para ignorar o e buscar tanto por minusculo ou maiusculo
const regexW = /w/i;
// console.log(regexW.test(stringTest)); //true


//neste exemplo estamos verificando com o (^) se o Hello world esta no inicio da string
//o ($) serve para verificar se os sinais de exclamação estão no final da string
const stringTest1 = "Exemplo: Hello World!!!";
const regexComeco = /^Hello/;
const regexFinal = /!!!$/;
// console.log(regexComeco.test(stringTest)); //true
// console.log(regexComeco.test(stringTest1)); //false

console.log(regexFinal.test(stringTest1)); //true