function aptoParaDirigir(idade, temCarteira) {
    if (idade >= 18 && temCarteira) {
        console.log("Você está apto(a) a dirigir.");
    } else if (idade >= 18 && !temCarteira) {
        console.log("Você não está apto(a) a dirigir.");
    } else {
        console.log("Você não está apto(a) a dirigir.");
    }
}

aptoParaDirigir(21, true);  
aptoParaDirigir(18, false); 
aptoParaDirigir(17, false); 
