var n = parseInt(prompt("Digite a quantidade de números no array"));
var arr = [];
for(var i = 1; i <= n; i++){
    var numero = parseInt(prompt("Digite um numero n" + i));
    arr.push(numero);
}

arr.sort((a, b) => a - b);

document.write("Ordenação crescente: "+ arr);



