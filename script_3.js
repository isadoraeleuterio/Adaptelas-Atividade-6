//Problema 3: 
//Crie uma função que recebe um número (x) como parâmetro e determine se ele
//é impar ou par. A função deve exibir as seguintes mensagens em seus devidos casos.
// Caso o número seja par: “O número 2 é par.”
// Caso o número seja ímpar: “O número 25 é ímpar.”

function numerosPrimos(x){
    if(x % 2 == 0) { 
        console.log(`O número ${x} é par.`);
    }
    else if(x % 2 != 0 ) {
        console.log(`O número ${x} é impar`)
    }
}

numerosPrimos(4);
numerosPrimos(5);