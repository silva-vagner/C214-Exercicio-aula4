const Calculadora = require('./src/calculadora');

let x = 9;
let y = 2;
let rSoma = Calculadora.soma(x, y);
let rSubtracao = Calculadora.subtracao(x, y);
let rMultiplicacao = Calculadora.multiplicacao(x, y);
let rDivisao = Calculadora.divisao(x, y);
let rRaiz = Calculadora.raizQuadrada(x);

console.log(x, " + ", y, " = ", rSoma);
console.log(x, " - ", y, " = ", rSubtracao);
console.log(x, " * ", y, " = ", rMultiplicacao);
console.log(x, " / ", y, " = ", rDivisao);
console.log("Raiz de ", x, " = ", rRaiz);
