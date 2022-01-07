const footerSectionEls = document.querySelectorAll('.footer__section')
const sectionExpandIconEl = document.querySelector('.expand__section__icon')
const footerTitleEls = document.querySelectorAll('.footer__section__title')

const loginLinkEl = document.querySelector('.header .login__link')
const modalContainerEl = document.querySelector('.modal__container')
const modalCloseEl = document.querySelector('.modal__container .close__icon')

const is_expanded = 'is-expanded'
const is_open = 'is-open'

const toggleExpandSection = element => () =>
	element.classList.toggle(is_expanded)

const toggleModal = () => {
	console.log('toggleModal')
	modalContainerEl.classList.toggle(is_open)
}

modalContainerEl.addEventListener('click', () => console.log('clicked'))
loginLinkEl.addEventListener('click', toggleModal)
modalCloseEl.addEventListener('click', toggleModal)

footerTitleEls.forEach(el =>
	el.addEventListener('click', toggleExpandSection(el.parentElement))
)
