
let message = checkString(prompt('Как вас зовут?', `Алексей`))

let nameIntro = document.getElementById('name_intro');
let body = document.body;
nameIntro.textContent = `Здравствуйте, ${message ?? 'Гость'}!`;
body.style.opacity = '100%'

function checkString(string) {
    if (string === '') return 'Гость';
    else return string;
}