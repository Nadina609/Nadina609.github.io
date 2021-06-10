const burgerClick = document.querySelector(".header_burger")


burgerClick.addEventListener("click", function() {
    $('.menu1').toggleClass("menu_right")
    this.classList.toggle("change")
})