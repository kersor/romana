const openButton = document.querySelector('.header_phone__mobile')
const closeButton = document.querySelector('.header_close__button')

const mobileMenu = document.querySelector('.header_mobile__menu')

openButton.addEventListener('click', function () {
    mobileMenu.style.display = 'block'

    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
})

closeButton.addEventListener('click', function () {
    mobileMenu.style.display = 'none'

    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
})
