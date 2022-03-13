import 'normalize.css';
import './styles/style.scss';

const navList = document.querySelector('.nav__list')
const burger = document.querySelector('.burger')
const navItems = document.querySelectorAll('.nav__item')

burger.addEventListener('click', openMenu)
navItems.forEach(el => el.addEventListener('click', closeMunu))

function openMenu() {
    burger.classList.toggle('open')
    navList.classList.toggle('open')
}
function closeMunu() {
    burger.classList.remove('open')
    navList.classList.remove('open')
}