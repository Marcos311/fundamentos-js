//var

//var altura = 5;
//var comprimento = 7;

//var area = altura * comprimento;
//console.log(area);
//var area;

//let forma = 'retângulo';
//let altura = 5;
//let comprimento = 7;
//let area;

//if(forma === 'retângulo'){
//    area = altura * comprimento;
//} else {
//    area = (altura * comprimento) / 2;
//}

//console.log(area);

const forma = 'triângulo';
const altura = 5;
const comprimento = 7;
let area = 0;

if(forma === 'quadrado'){
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

//console.log(area);

// tipagem dinâmica
// untyped

let minhaVar = 567;
minhaVar = "texto";
minhaVar = true;

console.log(minhaVar);