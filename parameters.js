// parâmetros de função

// console.log(soma(1, 3));
// console.log(soma(-2, 2));
// console.log(soma(0.5, 0.3));

// parâmetros x argumentos

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

// console.log(nomeIdade(20, "Marcos"));

function soma(numero1, numero2){
    return numero1 + numero2;
}

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

                            //9    
console.log(multiplica(soma(4, 5)));