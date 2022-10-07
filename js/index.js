
/*palavras:
1- Audi
2- BMW
3- JAGUAR
4- MINI
5- FIAT
6- FORD
7- HONDA
8 - OPEL
9 - JEEP
10 - JAC
*/

const tabela = document.querySelector(".tabela")
var palavras = new Array;
var posicao = new Array;

var palavras = [
    ['A', 'U', 'D', 'I', 'B', 'M', 'W', 'H', 'I', 'J'],
    ['A', 'B', 'C', 'D', 'J', 'A', 'G', 'U', 'A', 'R'],
    ['M', 'I', 'N', 'I', 'P', 'R', 'I', 'H', 'I', 'J'],
    ['J', 'A', 'C', 'D', 'E', 'F', 'I', 'A', 'T', 'J'],
    ['A', 'F', 'O', 'R', 'D', 'H', 'O', 'N', 'D', 'A'],
    ['O', 'P', 'E', 'L', 'J', 'E', 'E', 'P', 'I', 'A'],
];
var posicao = [
    [1, 1, 1, 1, 2, 2, 2, 0, 0, 0],
    [0, 0, 0, 0, 3, 3, 3, 3, 3, 3],
    [4, 4, 4, 4, 0, 0, 0, 0, 0, 0],
    [10, 10, 10, 0, 0, 5, 5, 5, 5, 0],
    [0, 6, 6, 6, 6, 7, 7, 7, 7, 7],
    [8, 8, 8, 8, 9, 9, 9, 9, 0, 0],
];

for (linha = 0; linha < 10; linha++) {
    tr = document.createElement('tr')
    for (coluna = 0; coluna < 10; coluna++) {
        td = document.createElement('td')
        if (posicao[linha][coluna] == 1){ //Audi
            td.style.background = "red"
            td.append(palavras[linha][coluna])
            tr.append(td)
        } else if(posicao[linha][coluna]==2){ //BMW
            td.style.background = "blue"
            td.append(palavras[linha][coluna])
            tr.append(td)
        } else if(posicao[linha][coluna]==3){ //Jaguar
            td.style.background = "purple"
            td.append(palavras[linha][coluna])
            tr.append(td)
        } else if(posicao[linha][coluna]==4){ //Mini
            td.style.background = "gray"
            td.append(palavras[linha][coluna])
            tr.append(td)
        } else if(posicao[linha][coluna]==5){ //Fiat
            td.style.background = "pink"
            td.append(palavras[linha][coluna])
            tr.append(td)
        } else if(posicao[linha][coluna]==6){ //Ford
            td.style.background = "yellow"
            td.append(palavras[linha][coluna])
            tr.append(td)
        } else if(posicao[linha][coluna]==7){ //Honda
            td.style.background = "orange"
            td.append(palavras[linha][coluna])
            tr.append(td)
        } else if(posicao[linha][coluna]==8){ //Opel
            td.style.background = "brown"
            td.append(palavras[linha][coluna])
            tr.append(td)
        } else if(posicao[linha][coluna]==9){ //Jeep
            td.style.background = "violet"
            td.append(palavras[linha][coluna])
            tr.append(td)
        } else if(posicao[linha][coluna]==10){ //JAC
            td.style.background = "green"
            td.append(palavras[linha][coluna])
            tr.append(td)
        } else{
            td.append(palavras[linha][coluna])
            tr.append(td)
        }
        tabela.appendChild(tr)
    }
}







