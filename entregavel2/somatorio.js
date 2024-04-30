function somatorio(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

var n = parseInt(prompt("Digite a quantidade de números no array"));
var arr = [];
for(var i = 1; i <= n; i++){
    var numero = parseInt(prompt("Digite um numero n" + i));
    arr.push(numero);
}

document.write("O somatório da sequência é = " + somatorio(arr));