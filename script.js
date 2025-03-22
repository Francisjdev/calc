function add(a ,b){
    return a + b;
}
function subs(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b ){
    return a / b;
}

function calculate(operator, num1, num2){
    switch (operator){
        case '+': add(num1, num2);
            break;
        case '-': subs(num1, num2);
            break;
        case 'x': multiply(num1, num2);
            break;
        case '/': divide(num1, num2);
            break;
        

    }
}
