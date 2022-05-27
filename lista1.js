//Questao 5
/*
functionEx5_1 = (n1, n2) => 'R$ ' + (n1 + n2).toFixed(2).replace('.',',');
functionEx5_2 = (n1, n2) => {
    return 'R$ ' + (n1 + n2).toFixed(2).replace('.',',');
}

resulEx5_1 = functionEx5_1(0.1, 0.2);
resulEx5_2 = functionEx5_2(0.1, 0.2);
resulEx5_3 = functionEx5_1(39.8, 28.2);
resulEx5_4 = functionEx5_2(39.8, 28.2);


console.log('Questao 5_1: ', resulEx5_1, ', ', resulEx5_2);
console.log('Questao 5_2: ', resulEx5_3, ', ', resulEx5_4);
*/

//Questao 8:
/*
functionEx8 = (string) => {
    let listaString = string.split(' '),
        countRecord = 0, 
        menorValor = listaString[0], 
        posicaoMenorValor = 0, 
        num1, num2;

    for (let index = 0; index < listaString.length - 1; index++) {
        num1 = parseFloat(listaString[index]);
        num2 = parseFloat(listaString[index+1]);
        if(num2 > num1){
            countRecord++;
        }

        if(num2 < menorValor){
            menorValor = num2;
            posicaoMenorValor = index + 1;
        }       
    }

    return Array(countRecord, posicaoMenorValor + 1);
}

console.log(functionEx8('10 20 20 8 25 3 0 30 1'))
*/


//Questao 19:
/*
functionEx19_1 = (codigo, qtd, valor = 0) => {
    switch (codigo) {
        case 100:
            valor += 3*qtd;
            break;    
        case 200:
            valor += 4*qtd;
            break;   
        case 300:
            valor += 5.5*qtd;
            break;   
        case 400:
            valor += 7.5*qtd;
            break;   
        case 500:
            valor += 3.5*qtd;
            break;   
        case 600:
            valor += 2.8*qtd;
            break;
        default:
            break;
    }

    return parseFloat(valor);
}
let valorTotal = 0.0;
console.log(valorTotal = functionEx19_1(100, 2, valorTotal))
console.log(valorTotal = functionEx19_1(300, 3, valorTotal))
console.log(valorTotal = functionEx19_1(500, 1, valorTotal))
console.log('valorTotal_1: R$ ', valorTotal.toFixed(2).replace('.', ','))


let dict = new Array();
dict = [
    [Codigo = 100, Desc = 'CachorroQuente', Preco = 3],
    [Codigo = 200, Desc = 'HamburguerSimples', Preco = 4],
    [Codigo = 300, Desc = 'Cheeseburguer', Preco = 5.5],
    [Codigo = 400, Desc = 'Bauru', Preco = 7.5],
    [Codigo = 500, Desc = 'Refri', Preco = 3.5],
    [Codigo = 600, Desc = 'Suco', Preco = 2.8]
];

//console.log(dict)
functionEx19_2 = (codigo, qtd, valor = 0) => {
    dict.forEach((elemento, index) => {
        if(elemento[0] == codigo){
            valor += elemento[2]*qtd;
            return;
        }
    });

    return valor;
};

let valorTotal2 = 0.0;
console.log(valorTotal2 = functionEx19_2(100, 2, valorTotal2))
console.log(valorTotal2 = functionEx19_2(300, 3, valorTotal2))
console.log(valorTotal2 = functionEx19_2(500, 1, valorTotal2))
console.log('valorTotal_2: R$ ', valorTotal2.toFixed(2).replace('.', ','))
*/


//Questao 20:



