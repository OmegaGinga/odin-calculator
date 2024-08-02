/*
    Make and event listener for all buttons.
    Depending on the button insert its value to input.
    If multiplication button is pressed store symbol.
    If there is no number stored, store it.
    If there is a number already stored, store it in slot2.
    If there is already full slots, then call resolve.
    Resolve make the operation and store result in slot 1, delete store 2 number.
    Store again the number in slot2.
*/

let input = document.querySelector('.screen');
let buttons = document.querySelectorAll('.button');
let store1 = '';
let store2 = '';
let symbol = '';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let classes = button.classList;

        switch (true) {
            case classes.contains('equal'):
                if (input.value !== '') {
                    if (store1 !== '' && store2 === '') {
                        store2 = input.value;
                    }
                }
                resolve(store1, store2, symbol);
                break;
            case classes.contains('del'):
                del();
                break;
            case classes.contains('c'):
                reset_calculator();
                break;
            case classes.contains('mult'):
                symbol = 'x';
                handle_slots();
                break;
            case classes.contains('div'):
                symbol = '/';
                handle_slots();
                break;
            case classes.contains('sum'):
                symbol = '+';
                handle_slots();
                break;
            case classes.contains('sub'):
                symbol = '-';
                handle_slots();
                break;
            case classes.contains('decimal'):
                if (!input.value.includes('.')) {
                    input.value += '.';
                }
                break;
            default:
                add_input(button);
                break;
        }
    });
});

function resolve(n1, n2, symbol) {
    console.log(store1);
    console.log(store2);
    console.log(symbol);
    if (n1 === '' || n2 === '' || symbol === '') {
        return;
    }
    switch (symbol) {
        case 'x':
            multiplication(n1, n2);
            break;
        case '+':
            sum(n1, n2);
            break;
        case '-':
            sub(n1, n2);
            break;
        case '/':
            if (n2 === '0') {
                alert('Cannot divide by 0');
                reset_calculator();
                return;
            }
            div(n1, n2);
            break;
    }
}

function add_input(button) {
    if (input.value === '0') {
        input.value = ''; 
    }
    input.value += button.textContent;
}

function reset_calculator() {
    input.value = '0'; 
    store1 = '';
    store2 = '';
    symbol = ''; 
}

function del() {
    if (input.value.length > 1) {
        input.value = input.value.slice(0, -1); 
    } else {
        input.value = '0'; 
    }
}

function multiplication(n1, n2) {
    let result = parseFloat(n1) * parseFloat(n2);
    input.value = result;
    store1 = '';
    store2 = '';
}

function sum(n1, n2) {
    let result = parseFloat(n1) + parseFloat(n2);
    input.value = result;
    store1 = '';
    store2 = ''; 
}

function sub(n1, n2) {
    let result = parseFloat(n1) - parseFloat(n2); 
    input.value = result;
    store1 = '';
    store2 = ''; 
}

function div(n1, n2) {
    let result = parseFloat(n1) / parseFloat(n2); 
    input.value = result;
    store1 = '';
    store2 = ''; 
}

function handle_slots() {
    console.log(store1);
    console.log(store2);
    console.log(symbol);
    if (store1 === '') {
        store1 = input.value;
        input.value = '';
    } else if (store1 !== '' && store2 === '') {
        store2 = input.value;
        input.value = '';
    } else {
        resolve(store1, store2, symbol);
        store1 = '';
        store2 = '';
        input.value = '';
    }
}