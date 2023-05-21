function apresentar(nome) {
    return `meu nome é ${nome}`;
}

//Arrow Function
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1,num2) => num1 + num2;

//Arrow Function com mais de uma linha de instrução

const somaNumerosPequenos = (num1,num2) => {
    if(num1 > 10 || num2 > 10 ) {
        return "Somente números de 0 a 9"
    } else {
        return num1 + num2;
    }
}

// Hosisting: Arrow functiuon se comporta como expressão


const num = 15;

if (num >= 0 && num <= 10) {
  console.log('número entre zero e dez');
} else if (num > 10 && num <= 20) {
  console.log('número entre dez e vinte');
} else if (num > 20 && num <= 30) {
  console.log('número entre vinte e trinta');
} else {
  console.log('outro número');
}