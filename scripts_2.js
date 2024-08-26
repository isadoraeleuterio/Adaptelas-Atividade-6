//Problema 2:
//Crie uma função que contém dois números inteiros como parâmetros (a, b) e
//determine qual deles é o maior. A função deve retornar uma mensagem dizendo qual número
//é o maior ou se ambos são iguais. A função deve exibir as seguintes mensagens em seus
//devidos casos:

//Se o primeiro número é maior: "O número 5 é maior que 2."
//Se o segundo número é maior: "O número 2 é menor que 5."
//Se os números forem iguais: "Os dois números são iguais."

function numeroMaior(a, b) {
    if (a > b) {
        console.log(`O número ${a} é maior que ${b}.`);
    } 
    else if (a < b) {
        console.log(`O número ${a} é menor que ${b}.`);
    } 
    else {
        console.log("Os dois números são iguais.");
    }
  }
  
  numeroMaior(7, 4); 
  numeroMaior(3, 9); 
  numeroMaior(5, 5); 
