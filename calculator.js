let operator = "";
let firstNumber = "";
let secondNumber = "";
const input = document.getElementById("input");
const answer = document.getElementById("answer");
const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
const operation = document.getElementById("operation");
const equals = document.getElementById("equals");
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const decimal = document.getElementById("decimal");
const clear = document.getElementById("clear");
const clearEntry = document.getElementById("clearEntry");
zero.addEventListener("click", () => input.innerText += "0");
one.addEventListener("click", () => input.innerText += "1");
two.addEventListener("click", () => input.innerText += "2");
three.addEventListener("click", () => input.innerText += "3");
four.addEventListener("click", () => input.innerText += "4");
five.addEventListener("click", () => input.innerText += "5");
six.addEventListener("click", () => input.innerText += "6");
seven.addEventListener("click", () => input.innerText += "7");
eight.addEventListener("click", () => input.innerText += "8");
nine.addEventListener("click", () => input.innerText += "9");
decimal.addEventListener("click", () => {
    if (!input.innerText.includes("."))
        input.innerText += ".";
    });
        
addition.addEventListener("click", () => {
    if (answer.innerText === "")
        firstNumber = parseFloat(input.innerText);
    else
        firstNumber = parseFloat(answer.innerText);
    operation.innerText = "Addition";
    input.innerText = "";
    operator = "+";
});
subtraction.addEventListener("click", () => {
    if (answer.innerText === "")
        firstNumber = parseFloat(input.innerText);
    else
        firstNumber = parseFloat(answer.innerText);
    operation.innerText = "Subtraction";
    input.innerText = "";
    operator = "-";
});
multiplication.addEventListener("click", () => {
    if (answer.innerText === "")
        firstNumber = parseFloat(input.innerText);
    else
        firstNumber = parseFloat(answer.innerText);
    operation.innerText = "Multiplication";
    input.innerText = "";
    operator = "*";
});
division.addEventListener("click", () => {
    if (answer.innerText === "")
        firstNumber = parseFloat(input.innerText);
    else
        firstNumber = parseFloat(answer.innerText);
    operation.innerText = "Division";
    input.innerText = "";
    operator = "/";
});
calculate = () => {
    secondNumber = parseFloat(input.innerText);
    //!firstNumber ? answer.innerText = input.innerText : answer.innerText = firstNumber;
    if (!firstNumber) {
        answer.innerText = input.innerText;
        input.innerText = "";
        return;
    }
    else if (!secondNumber) {
        answer.innerText = firstNumber;
        return;
    }
        
    switch (operator) {
        case "+":
            answer.innerText = firstNumber + secondNumber;
            break;
        case "-":
            answer.innerText = firstNumber - secondNumber;
            break;
        case "*":
            answer.innerText = firstNumber * secondNumber;
            break;
        case "/":
            answer.innerText = firstNumber / secondNumber;
            break;
        default:
            //!firstNumber ? answer.innerText = input.innerText : answer.innerText = firstNumber;
    }
    input.innerText = "";
}
equals.addEventListener("click", calculate);
clear.addEventListener("click", () => {
    input.innerText = "";
    operation.innerText = "";
    answer.innerText = "";
    operator = "";
    firstNumber = "";
    secondNumber = "";
});
clearEntry.addEventListener("click", () => {
    input.innerText = "";
});