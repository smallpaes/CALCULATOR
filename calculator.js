function add(a,b){
    let result = a+b;
    return result;
}

function subtract(a,b){
    let result = a-b;
    return result;
}

function multiply(a,b){
    let result = a*b;
    return result;
}

function divide(a,b){
    let result = a/b;
    return result;
}

function operate(operator, num1, num2){
    switch(operator){
        case '+':
            add(num1,num2);
            break;
        case '-':
            subtract(num1,num2);
            break;
        case '*':
            multiply(num1,num2);
            break;
        case '/':
            divide(num1,num2);
            break;
    }
}

let btn = document.querySelectorAll('button');
btn.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        alert(button.textContent);
    })
})
