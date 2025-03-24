const display = document.querySelector('.numbers')
const buttons = document.querySelectorAll('button')
let n1, operator, n2 , buffer
let result = null
let operators = '+-x/='
let notCodedYet = ['BACK', '%']
function createListener(targert){
    targert.forEach(button => {
        button.addEventListener('click', ()=>{
           displayContent(button.textContent)
        })
        
    });
}

function displayContent(content){
    if (content === 'AC') {
        buffer = 0
        n1 = 0
        n2 = 0
        operator = 0
        result == null
        return  display.textContent = '0'
    }
    if(notCodedYet.includes(content)) {
        return  display.textContent = 'not Coded yet'
    }

    if(display.textContent ==='0' && content !== '.' || operators.includes(display.textContent) || display.textContent == result ){
        display.textContent = content 
        buffer = content
        console.log('primer digito')
    } else if(!operators.includes(content)){
        display.textContent += content
        buffer = display.textContent  
    } else if (operators.includes(content)){
        // aca se decide si hay que hacer math
        //si var operator esta vacia 
        if(!operators.includes(operator)){
            console.log('logre entrar al if que hace la primera reasignacion')
            console.log(buffer)
            n1 = buffer
            operator = content
            display.textContent = operator
        }else {
            if(operator === '='){
                console.log('apretaron igual')
                n2 = buffer
                result = calculate(operator, parseFloat(n1), parseFloat(n2))
                return display.textContent = result
            }
            n2 = buffer
            result = calculate(operator, parseFloat(n1), parseFloat(n2))
            n1 = result
            console.log("este es el resultado que se guarda como n1 para siguiente calculo", n1)
            operator = content
            console.log('este es el nuevo operador', operator)
            display.textContent = result
        }
    }
}   
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
        case '+': return add(num1, num2);
           
        case '-': return subs(num1, num2);
            
        case 'x': return multiply(num1, num2);
            
        case '/': return divide(num1, num2);
            
        

    }
}

createListener(buttons)