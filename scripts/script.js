const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

let value = '0';

function escuchando (event) {
    value += event.target.textContent;
    display.textContent = value;
}


for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', escuchando);
}

display.textContent = value;