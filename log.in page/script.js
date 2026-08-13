
// new java

const container = document.getElementById('container');
const registrationBtn = document.getElementById('registration');
const loginBtn = document.getElementById('login');

registrationBtn.addEventListener('click', () => {
    container.classList.add('activate');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('activate');
});