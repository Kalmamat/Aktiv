// menu-btn класс на кнопке бургкра

document.querySelector('.menu-btn').addEventListener('click' ,() => {
    document.querySelector('.menu-btn').classList.toggle('active')
    document.querySelector('.header_menu').classList.toggle('active')
})
// header_menu_item это класс который в ссылках меню.
// Нужен для закрытия при клике на них
document.querySelectorAll('.header_menu_item').forEach( (oneLink) => {
    // oneLink это имя одной ссылки меню. Придумываем сами название
    oneLink.addEventListener('click', () => {
        document.querySelector('.menu-btn').classList.toggle('active')
        document.querySelector('.header_menu').classList.toggle('active')
    })
})