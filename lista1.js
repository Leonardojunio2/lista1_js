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


let dict = [];
dict = [
    [100, 'CachorroQuente', 3],
    [200, 'HamburguerSimples', 4],
    [300, 'Cheeseburguer', 5.5],
    [400, 'Bauru', 7.5],
    [500, 'Refri', 3.5],
    [600, 'Suco', 2.8]
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
/*
functionEx20_1 = (valor) => {
    let texto = '';

    if((numero = parseInt(valor/100)) > 0){
        texto += numero + ' Nota(s) de R$ 100,00, ';
        valor = valor%100;
    }
    
    if((numero = parseInt(valor/50)) > 0){
        texto += numero + ' Nota(s) de R$ 50,00, ';
        valor = valor%50;
    }
    
    if((numero = parseInt(valor/10)) > 0){
        texto += numero + ' Nota(s) de R$ 10,00, ';
        valor = valor%10;
    }
    
    if((numero = parseInt(valor/5)) > 0){
        texto += numero + ' Nota(s) de R$ 5,00, ';
        valor = valor%5;
    }
    
    if((numero = parseInt(valor/1)) > 0){
        texto += numero + ' Nota(s) de R$ 1,00, ';
        valor = valor%1;
    }

    return texto.slice(0,-2);
};

functionEx20_2 = (valor) => {
    let texto = '', valores = [100, 50, 10, 5, 1];

    valores.forEach((elemento) => {
        if((numero = parseInt(valor/elemento)) > 0){
            texto += numero + ' Nota(s) de R$ ' +  elemento + ',00, ';
            valor = valor%elemento; // % -> resto
        }
    });

    return texto.slice(0,-2);
};

console.log(functionEx20_1(149));
console.log(functionEx20_2(149));
*/


//Questao 27:
/*
functionEx27 = (crianca1, crianca2) => {
    let altura1 = parseFloat(crianca1.altura), 
        altura2 = parseFloat(crianca2.altura), 
        cresc1 = parseFloat(crianca1.cresc), 
        cresc2 = parseFloat(crianca2.cresc);

    if(altura1 != altura2){
        if(altura1 > altura2 && cresc1 < cresc2){
            return functionEx27_Aux(altura2, altura1, cresc2, cresc1);
        } else if (altura1 < altura2 && cresc1 > cresc2){
            return functionEx27_Aux(altura1, altura2, cresc1, cresc2);
        }

        return 'Taxa de crescimento não permite ultrapassar';
    }
    
    return 'Mesma altura';
};

functionEx27_Aux = (alturaMenor, alturaMaior, taxaPessoaMenor, taxaPessoaMaior) => {
    let qtdAnos = 0;
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaPessoaMenor;
        alturaMaior += taxaPessoaMaior;
        qtdAnos++;
    }
    return qtdAnos;
};

crianca1 = {'altura': 100, cresc: 0.5};
crianca2 = {'altura': 90, cresc: 0.9};

console.log(functionEx27(crianca1, crianca2) + ' anos');
*/

//Questao 32:
/*
functionEx32 = (array) => {
    const soma = array.reduce((valorAntigo, valorNovo) => valorAntigo + valorNovo, 
                valorInicial = 0);

    return soma / array.length;
};

console.log(functionEx32([5,3,2,1]));
*/

//Questao 34:
/*
functionEx34_1 = (arr1, arr2) => {
    let arr1INarr2 = functionEx34_2(arr2).every((el) => functionEx34_2(arr1).includes(el));
    let arr2INarr1 = functionEx34_2(arr1).every((el) => functionEx34_2(arr2).includes(el));
    return arr1INarr2 && arr2INarr1;
};

functionEx34_2 = (string) => {
    let array = [];

    string.replace(/ /g, '').split('').forEach(element => {
        if(!array.includes(element) && !array.includes(element.toUpperCase())){
            array.push(element.toUpperCase());
        }
    });
    
    return array;
};
//console.log(functionEx34_2('Aaabc sdf popaaaa'));
console.log(functionEx34_1('Aaabc sdf popaaaa', 'abcsdfpo '));
*/

//Questao 39:
//?

