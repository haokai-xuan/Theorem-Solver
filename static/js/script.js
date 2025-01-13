// Function to resize input
function resizeInput() {
    this.style.width = (this.value.length + 1) + "ch";
    // Save the width to localStorage
    localStorage.setItem(`input-${this.id}-width`, this.style.width);
}

// Initialize inputs
let inputs = document.getElementsByTagName('input');

for (let index = 0; index < inputs.length; ++index) {
    const input = inputs[index];
    
    // Restore saved and width
    const identifier = input.id;
    const savedWidth = localStorage.getItem(`input-${identifier}-width`);

    if (savedWidth) {
        input.style.width = savedWidth;
    }
    
    input.addEventListener('input', resizeInput);
    
    // Initial resize if there's a value
    if (input.value) {
        resizeInput.call(input);
    }
}