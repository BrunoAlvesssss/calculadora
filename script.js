// Adiciona números e operadores ao display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Limpa o display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Remove o último caractere
function backspace() {
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1);
}

// Calcula o resultado da expressão
function calculateResult() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Erro";
    }
}
