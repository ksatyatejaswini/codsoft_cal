const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.row button');
let currentInput = '0';

// Function to update the display
function updateDisplay() {
    display.textContent = currentInput;
}

// Add click event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (buttonText === 'AC') {
            currentInput = '0';
        } else if (buttonText === 'DEL') {
            currentInput = currentInput.slice(0, -1);
            if (currentInput === '') {
                currentInput = '0';
            }
        } else if (buttonText === '=') {
            try {
                // Replace 'x' with '*' before evaluating
                currentInput = eval(currentInput.replace(/x/g, '*')).toString();
            } catch (error) {
                currentInput = 'Error';
            }
        } else {
            if (currentInput === '0' || currentInput === 'Error') {
                currentInput = buttonText;
            } else {
                currentInput += buttonText;
            }
        }

        updateDisplay();
    });
});

// Initialize display
updateDisplay();
