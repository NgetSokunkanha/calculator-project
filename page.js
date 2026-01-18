
let input = document.getElementById("retangle");

function press(value) {
    input.value += value; 
}

document.getElementById("result").addEventListener("click", calculate);
let number1 = "";
let number2 = "";
let operation = null;
let result = "";

function calculate() {
    for ( let i =0; i < input.value.length ; i ++) {
        let inputUser = input.value[i];
        if ( inputUser === "+" || inputUser === "-") {
            operation = inputUser;
        } else if ( operation === null) {
            number1 = inputUser;
            number1 = parseFloat(inputUser); 
        } else {
            number2 = inputUser;
            number2 = parseFloat(inputUser);
        }
    }

    if (operation === "-") {
        result = number1 - number2;
    } else if (operation === "+") {
        result = number1 + number2;
    }
    displayResult(result);
}           

function displayResult(result) {
    input.value = result;
}