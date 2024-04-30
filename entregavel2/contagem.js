function contarInteiros(primeiroDado, N) {
    let contador = 0;

    for (let i = primeiroDado; i <= N; i++) {
            contador++;       
    }
    return contador;
}

var primeiroDado = parseInt(prompt("Informe o primeiro número"));
var N = parseInt(prompt("Informe o último número"));

const quantidadeInteiros = contarInteiros(primeiroDado, N);

document.write("Quantidade de valores inteiros: "+ quantidadeInteiros);

