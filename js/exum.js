// Exercicio 01
let numeroSorteado = parseInt(Math.random()*100);
let proximoNumero = numeroSorteado+ 1;
let anteriorNumero = numeroSorteado - 1;

console.log(`O número sorteado é: ${numeroSorteado}, o próximo número é: ${proximoNumero} e o anterior é: ${anteriorNumero}, o dobro desse número é: ${numeroSorteado*2} e sua metade é: ${numeroSorteado/2}`);

// Exercicio 02
let nota1 = parseInt(Math.random()*11)
let nota2 = parseInt(Math.random()*11)
let nota3 = parseInt(Math.random()*11)
let nota4 = parseInt(Math.random()*11)
const media = nota1 + nota2 + nota3 + nota4/4;

console.log(`Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}, Nota 4: ${nota4} `);
console.log(`Média: ${media}`);

// Exercicio 03
temp = parseInt(Math.random()*101)
console.log(`A temperatura é de ${temp} graus Celsius`);

fahren = 9/5 * temp + 32
console.log(`O equivalente da sua temperatura em Fahrenheit é :${fahren.toFixed(2)}`);

// Exercicio 04
calca = parseInt(Math.random()*201)
console.log(`Esse funcionário vendeu ${calca} calças`);

salario = (calca * 35) + 1500

console.log(`O salário desse funcionário é ${salario}`);

// Exercicio 05
base = parseInt(Math.random()*101)
altura = parseInt(Math.random()*101)

console.log(`A base e altura desse triângulo são respectivamente: ${base} e ${altura}`);

area = (base * altura) / 2

console.log(`A área é de ${area}`);


// Exercicio 06
horasMensais = parseInt(Math.random()*251)
dependentes = parseInt(Math.random()*7)
salario = (horasMensais * 168) + (dependentes * 80)
inss = salario * 0.085
ir = salario * 0.05
total = salario - inss - ir

console.log(`O salário bruto é de: ${salario.toFixed(2)}, o desconto do IR é de: ${ir.toFixed(2)} e o do INSS é de: ${inss.toFixed(2)}; Resultando em um salário de ${total.toFixed(2)}`);

// Exercicio 07
peso = parseInt(Math.random()*201)

console.log(`A pessoa pesa ${peso}kg, se ela emagrecer 20% ela ficará com ${peso * 0.8}; Se ela engordar 20% ela ficará com ${peso * 1.2}`);

// Exercicio 08
resultado = 0;
a = parseInt(Math.random()*101)
b = parseInt(Math.random()*101)
c = parseInt(Math.random()*101)
x = parseInt(Math.random()*101)


console.log(`A, B e C são respectivamente: ${a} ${b} ${c}`);

console.log(`O Resultado da equação é: ${resultado = a*(x*x) + b*x + c}`);

// Exercicio 09
numero = parseInt(Math.random()*101)
console.log(`O número sorteado é: ${numero}`);

if (numero % 2 === 0) {
    console.log(`O número é par, o número elevado ao seu quadrado fica: ${numero *numero}`); 
} else { 
    console.log(`O número é ímpar, o número elevado ao seu cubo fica: ${numero *numero *numero}`); 
}

// Exercicio 10
numero1 = parseInt(Math.random()*101)
numero2 = parseInt(Math.random()*101)
console.log(`Ro e Benaldo valem respectivamente: ${numero1} e ${numero2}`);




if (numero1 + numero2 <=100) {
  console.log(`O valor final é de: ${(numero1 + numero2) * 3}`);    
} else {
    console.log(`O valor final é de: ${numero1 + numero2 * 5}`);   
}
