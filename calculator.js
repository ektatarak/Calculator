let result = document.getElementById("inputtext");

let calculate = (number) => {
    result.value += number;
}

let Result = () => {
    try {
        result.value = eval(result.value);
    } catch (err) {
        alert("Enter the valid Input");
    }
}

function clr() {
    result.value = "";
}

function del() {
    result.value = result.value.slice(0, -1);
}

// Handle keyboard input
document.addEventListener("keydown", (event) => {
    const key = event.key;
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', 'Enter', 'Backspace'];
    
    if (validKeys.includes(key)) {
        if (key === 'Enter') {
            Result();
        } else if (key === 'Backspace') {
            del();
        } else {
            calculate(key);
        }
    }
});
