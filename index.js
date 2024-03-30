function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1-num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1/num2;
}

let num1 = null;
let op = null;
let num2 = null;

function operate(num1, op, num2){
    if(op === '+'){
        return add(num1, num2);
    }else if(op === '-'){
        return subtract(num1,num2);
    }else if(op === '*'){
        return multiply(num1, num2);
    }else if(op === '/'){
        return divide(num1,num2);
    }
}

let displayContainer = document.getElementById("display-container");
let p = document.createElement('p');
displayContainer.appendChild(p);



let buttons = document.querySelectorAll('button');
buttons.forEach(function(button){
    button.addEventListener("click", function(e){
        let buttonText = e.target.textContent;
        if(e.target.className == "num-btn"){
            if(num1 == null){
                num1 = parseInt(buttonText);
            }else if(num2 == null){
                num2 = parseInt(buttonText);
            }
            p.textContent += buttonText + ' ';
        }else if(e.target.className == "operator-btn" && op == null){
            op = buttonText;
            p.textContent += buttonText+ ' ';
        }else if(e.target.id == "equals-btn" && num1 != null && num2 != null && op != null){
            let result = operate(num1, op, num2);
            p.textContent += buttonText + ' ' + result + ' ';
        }else if(e.target.id == "clear-btn"){
            num1 = null;
            num2 = null;
            op = null;
            p.textContent = '';
        }
    });
});