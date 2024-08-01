/*
    Make and event listener for all buttons.
    Get the input value and store it in a variable.
    Call a function depending on the button.
    Depending on the button insert its value to input.
*/


let input = document.querySelector('.screen');
let buttons = document.querySelectorAll('.button');
let store1;
let store2;

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        let classes = button.classList;

        switch(true){
            case classes.contains('equal'):
                break;
            case classes.contains('del'):
                break;
            case classes.contains('c'):
                reset_calculator();
                break;
            case classes.contains('mult'):
                break;
            case classes.contains('div'):
                break;
            case classes.contains('sum'):
                break;
            case classes.contains('sub'):
                break;
            default:
                add_input(button);
                break;
            
        }

    })
})

function add_input(button){
    if(input.value === '0'){
        input.value = '';
    }
    input.value += button.textContent;
}
function reset_calculator(){
    input.value = 0;
    store1 = 0;
    store2 = 0;
}