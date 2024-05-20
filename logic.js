function calculateResult() {
    let expression = document.getElementById('display').innerText;

    try {
        let result = eval(expression);
        
        if (result === Infinity || result === -Infinity) {
            throw new Error("Error!");
        }

        document.getElementById('display').innerText = result;
    } catch (error) {
        document.getElementById('display').innerText = error.message;
    }
}

function appendToDisplay(value) {
    let currentDisplay = document.getElementById('display').innerText;

    if (currentDisplay === '0' && value !== '.') {
        document.getElementById('display').innerText = value;
    } else {
        document.getElementById('display').innerText += value;
    }
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}
