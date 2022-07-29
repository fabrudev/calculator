const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

let value = '';

function calcular (event) {
    const tecla = event.target.textContent;

    switch (tecla) {
        case "=":
            display.textContent = eval(value.replace('x', '*'));
            value = eval(value.replace("x", "*"));
            break;
        case "C": 
            display.textContent = "0";
            value = "";
            break;
        case "+":
        case "-":
        case "x":
        case "/":
        default:
            value+= tecla;
            display.textContent = value;
    }
}


for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', calcular);
}

display.textContent = value;
