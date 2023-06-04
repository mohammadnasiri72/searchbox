var search = document.querySelector(".search")
var iconSearch = document.querySelector(".icon-search")
var input = document.querySelector(".input")
var x = 0
iconSearch.addEventListener("click", function () {
    if (x == 0) {
        input.style.width = "400px"
        input.style.paddingRight = "20px"
        input.focus()
        x = 1
    }else if (x == 1) {
        input.style.width = "0px"
        input.style.paddingRight = "0px"
        x = 0
    }

})









