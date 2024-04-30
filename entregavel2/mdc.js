function mdc(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}


var a = parseInt(prompt("Informe o primeiro número"));
var b = parseInt(prompt("Informe o segundo número"));

document.write("O MDC de ", a, " e ", b, " = ", mdc(a, b)); 