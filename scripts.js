// Modo Claro/Escuro
function toggleDarkMode() {
    var body = document.getElementById("body");
    var button = document.getElementById("darkModeButton");
    body.classList.toggle("light-mode");
    if (body.classList.contains("light-mode")) {
        button.innerText = "Modo Escuro";
    } else {
        button.innerText = "Modo Claro";
    }
}

// Exemplo de Condicional com Else If
function exampleElseIf() {
    var number = document.getElementById("elseIfNumber").value;
    var result;
    if (number > 0) {
        result = "O número é positivo.";
    } else if (number < 0) {
        result = "O número é negativo.";
    } else {
        result = "O número é zero.";
    }
    document.getElementById("elseIfResult").innerText = result;
}

// Exemplo de Switch Case
function exampleSwitch() {
    var number = document.getElementById("switchNumber").value;
    var result;
    switch (number) {
        case '1': result = "Domingo"; break;
        case '2': result = "Segunda-feira"; break;
        case '3': result = "Terça-feira"; break;
        case '4': result = "Quarta-feira"; break;
        case '5': result = "Quinta-feira"; break;
        case '6': result = "Sexta-feira"; break;
        case '7': result = "Sábado"; break;
        default: result = "Número inválido"; break;
    }
    document.getElementById("switchResult").innerText = "O dia da semana é: " + result;
}

// Exemplo de Condicional
function exampleIfElse() {
    var x = parseInt(document.getElementById("numX").value);
    var y = parseInt(document.getElementById("numY").value);
    var result;
    if (x > y) {
        result = "O número " + x + " é maior que " + y + ".";
    } else {
        result = "O número " + x + " não é maior que " + y + ".";
    }
    document.getElementById("ifElseResult").innerText = result;
}

// Exemplo de Laço For
function exampleForLoop() {
    var number = document.getElementById("forLoopNumber").value;
    var result = "Números de 1 a " + number + ": ";
    for (var i = 1; i <= number; i++) {
        result += i + " ";
    }
    document.getElementById("forLoopResult").innerText = result;
}

// Exemplo de Laço While
function exampleWhileLoop() {
    var number = document.getElementById("whileLoopNumber").value;
    var result = "Números de " + number + " a 1: ";
    var i = number;
    while (i > 0) {
        result += i + " ";
        i--;
    }
    document.getElementById("whileLoopResult").innerText = result;
}
