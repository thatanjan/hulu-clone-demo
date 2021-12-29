const footerSectionEls = document.querySelectorAll('.footer__section')
const sectionExpandIconEl = document.querySelector('.expand__section__icon')
const footerTitleEls = document.querySelectorAll('.footer__section__title')

const is_expanded = 'is-expanded'

const toggleExpandSection = element => () =>
  element.classList.toggle(is_expanded)

footerTitleEls.forEach(el =>
  el.addEventListener('click', toggleExpandSection(el.parentElement))
)
