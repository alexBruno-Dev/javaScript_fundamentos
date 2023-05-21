function imprimeTexto(texto) {
    console.log(texto);
}

imprimeTexto("oi")
imprimeTexto( "outro texto")

function soma() {
return 2 + 2; 
}

console.log(soma())
imprimeTexto(soma())
imprimeTexto(typeof soma())

function soma2(num1, num2){
    return num1 + num2;
}

console.log(soma2(50,4))

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade} anos`

}

console.log(nomeIdade("Alex", 35))

function soma2(num1, num2){
    return num1 + num2;
}

function multiplica(num1 = 1, num2 = 1){
    return num1 * num2;
}

console.log(multiplica(soma2(4,5),soma2(3,3)))
console.log("nova função : " + multiplica(soma2(4,5)))

function comParametro(param) {
    console.log(param)
}
comParametro()