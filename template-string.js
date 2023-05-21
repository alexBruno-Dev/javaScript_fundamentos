const nome = "Alex";
const idade = 2023 - 1988;
const cidadeNascimento = "São Paulo";


const nome1 = "Leo";
const idade1 = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const apresentacao = `Meu nome é ${nome}, minha idade é ${idade} anos 
e nasci na cidade de ${cidadeNascimento}`;

console.log(apresentacao);

console.log('===========================================');

const pedido = `${nome1} diz: "por favor, quero beber ${idade1 >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)