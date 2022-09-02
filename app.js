const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

function change_height() {
    var main_image = document.getElementById('main__image__container');
    var main_container = document.getElementById('main__container');
    var main = document.getElementById('main');
    img_height = main_image.offsetHeight;
    img_height *= 1.1;
    string_height = img_height.toString() + 'px';
    
    main.style.height = string_height;
}
window.onload = function() {
    change_height();
  }
window.addEventListener("resize", function(event) {
    change_height();
})
const footerLinks = document.querySelectorAll('.footer__links');
function scroll() {
    window.scrollTo(window.scrollX, window.scrollY - 130);
}
for (var i = 0; i < footerLinks.length; i++) {
    footerLinks[i].addEventListener('click', function() {
        window.setTimeout(scroll, 10);
    });
}