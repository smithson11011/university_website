
let message;
// checkString(prompt('Как вас зовут?', `Алексей`))

let hideMenuButton = document.getElementById('hideMenu');
let nameIntro = document.getElementById('name_intro');
let aboutButton = document.getElementById('about_uni_button');
let buttons = document.getElementsByClassName('buttons_menu');
let body = document.body;
let isShown = true;
nameIntro.textContent = `Здравствуйте, ${message ?? 'Гость'}!`;
body.style.opacity = '100%';
hideMenuButton.style.marginLeft = '400px';


function checkString(string) {
    if (string === '') return 'Гость';
    else return string;
}
