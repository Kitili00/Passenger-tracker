let countMonitor = document.getElementById('countMonitor');
let count = 0;
let name = 'Brian Kitili';
let greeting = 'Welcome Back , ';
let welcome = document.getElementById('welcome');
let saveEl = document.getElementById('save-el');

function increment() {
    count++;
    countMonitor.textContent = count;
    console.log(count);
};

function save() {
    let countStr = count + ' - ';
    saveEl.textContent += countStr;
    console.log(count);
};
save();

function reset() {
    count = 0;
    countMonitor.textContent = count;
    console.log(count);
};

welcome.innerText = greeting  + name; 
welcome.innerText  += '👋';

