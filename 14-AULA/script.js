/*
//  MOSTRANDO UMA MENSAGEM NO CONSOLE
console.log("Salve rapaziadinha do canal, se inscreva aí")

// CAIXINHA DE ALERTA
// alert("TESTE PRA VER SE FUNCIONA")

// CRIANDO VARIÁVEIS
var nome = "Cristiano"  // String ou cadeia
var numero = 7          // Int ou inteiro
var salto = 2.10        //Float
var theBest = true      // bool ou lógico

// FUNÇÃO QUE MOSTRA O TIPO DA VARIÁVEL
console.log(typeof(nome))

console.log("Seu nome é:" + nome)
console.log("Seu número é:", numero)
console.log("Seu pulo é:", salto)
console.log("É o milior? = ", theBest)

nome = 10
console.log(typeof(nome))

// OUTROS TIPOS DE VARIÁVEL
var nulo = null
var indefinido = undefined
console.log(nulo)
console.log(indefinido)
*/

/*
// OPERADORES ARITMÉTICOS
// +,-,*,/,%

var a =10 , b = 5

console.log("Soma:", a + b)
console.log("Subtração:", a - b)
console.log("Multiplicação:", a * b)
console.log("Divisão:", a / b)
console.log("Módulo:", a % b)

// OPERADORES LÓGICOS
// E, OU, NÃO
// &&, ||, !

var verdade = true, mentira = false

console.log(verdade && mentira)
console.log(verdade || mentira)
console.log(verdade && !mentira)

// OPERADORES RELACIONAIS
// >, <, >=, <=, ==. !=, ===, !==

var x = 65, y = 32, z = "65"

console.log(x > y)
console.log(x < y)
console.log(x >= y)
console.log(x <= y)
console.log(x == y)
console.log(x != y)
// Verificando valor e tipo
console.log(x === z)
console.log(x !== y)
*/

// COMENTEI TODA A PARTE DE OPERADOR

/*
// DESVIOS CONDICIONAIS

// SE = IF

var estaVivo = true

// primeira comparação
if(estaVivo == true){
    console.log("Parabéns, você está vivo")
}
// segunda comparação, caso a primeira dê errado
else if(estaVivo == undefined){
    console.log("Você não tá nada")
}
// entra aqui, caso todas as outras comparações deem errado
else{
    console.log("Infelizmente, você foi de F 🏴‍☠️")
}

// SWITTCH = ESCOLHA
var camisa = "laranja"

switch(camisa){
    case "Azul":
        console.log("Você ganhou um voucher")
    brake
    case "Brnaco":
        console.log("Você ganhou um body splash da Virgínia")
    brake
    case "Vermelho":
        console.log("Você ganhou uma Ferrari três portas")
    brake
    default:
        console.log("Camisa inválida e feia, vá trocar")
    brake
}

*/

// CONTEI TODA A PARTE DE DESVIOS

// PROMPT - INTERAGE COM O USUÁRIO E COLETA UM VALOR
/*
prompt:("Digite seu nome")

var time = prompt("Me diga, pra quem você torce")

console.log("Seu time é ", time)
*/
const A = Number(prompt());
const B = Number(prompt());
const C = Number(prompt());

if (A < B < C) {
    console.log(1);
}
else if (A < B) {
    console.log(2)
}
else {
    console.log(3)
}
