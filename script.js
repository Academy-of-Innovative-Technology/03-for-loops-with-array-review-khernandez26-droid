// Array Explorer - working implementation for the lab
// Ensure the array has at least 7 items as required by the README
const arrayItems = [
    'Confetti Cake',
    'Chocolate Cake',
    'Strawberry Shortcake',
    'Vanilla Cake',
    'Pound Cake',
    'Red Velvet Cake',
    'Carrot Cake'
];

// DOM elements
const arrayDisplay = document.getElementById('arrayDisplay');
const output = document.getElementById('output');

// Utility: render the current array (simple comma-separated)
function renderCurrentArray() {
    if (arrayDisplay) {
        arrayDisplay.innerText = arrayItems.join(', ');
    }
}

// 1) Display array forward using a for-loop
function showArray() {
    if (!output) return;
    output.innerHTML = '';
    const ul = document.createElement('ul');
    for (let i = 0; i < arrayItems.length; i++) {
        const li = document.createElement('li');
        li.innerText = arrayItems[i];
        ul.appendChild(li);
    }
    output.appendChild(ul);
}

// 2) Display array in reverse using a for-loop
function showReverse() {
    if (!output) return;
    output.innerHTML = '';
    const ul = document.createElement('ul');
    for (let i = arrayItems.length - 1; i >= 0; i--) {
        const li = document.createElement('li');
        li.innerText = arrayItems[i];
        ul.appendChild(li);
    }
    output.appendChild(ul);
}

// 3) push (end)
function addPush() {
    const val = document.getElementById('addValue')?.value?.trim();
    if (!val) {
        alert('Please enter a value to push');
        return;
    }
    arrayItems.push(val);
    renderCurrentArray();
    output.innerText = `Pushed: ${val}`;
    document.getElementById('addValue').value = '';
}

// 4) unshift (start)
function addUnshift() {
    const val = document.getElementById('addValue')?.value?.trim();
    if (!val) {
        alert('Please enter a value to unshift');
        return;
    }
    arrayItems.unshift(val);
    renderCurrentArray();
    output.innerText = `Unshifted: ${val}`;
    document.getElementById('addValue').value = '';
}

// 5) pop (remove last)
function removePop() {
    if (arrayItems.length === 0) {
        output.innerText = 'Array is empty';
        return;
    }
    const removed = arrayItems.pop();
    renderCurrentArray();
    output.innerText = `Popped: ${removed}`;
}

// 6) shift (remove first)
function removeShift() {
    if (arrayItems.length === 0) {
        output.innerText = 'Array is empty';
        return;
    }
    const removed = arrayItems.shift();
    renderCurrentArray();
    output.innerText = `Shifted: ${removed}`;
}

// Initialize display on load
document.addEventListener('DOMContentLoaded', () => {
    renderCurrentArray();
});