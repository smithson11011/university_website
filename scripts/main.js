
let message = checkString(prompt('Как вас зовут?', `Алексей`))

let nameIntro = document.getElementById('name_intro');
nameIntro.textContent = `Здравствуйте, ${message ?? 'Гость'}!`;

function checkString(string) {
    if (string === '') return 'Гость';
    else return string;
}