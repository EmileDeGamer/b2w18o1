let button = document.getElementById('mobileHover')
let menu = document.getElementById('menu')
let head = document.getElementById('head')
let headButtons = document.getElementById('headButtons')
let menuOnce = document.getElementById('mobileHoverOnce')

button.onclick = function(){click()}

menuOnce.onclick = function(){click2()}

let clicked = true, clicked2 = true

function click(){
    if (clicked){
        if(!clicked2){
            head.removeChild(headButtons)
            clicked2 = true
        }
        menu.appendChild(headButtons)
        headButtons.style.paddingLeft = "2.5em"
        headButtons.style.paddingBottom = "0"
        headButtons.style.display = "block"
        clicked = false
    }
    else if (!clicked){
        menu.removeChild(headButtons)
        headButtons.style.display = "none"
        clicked = true
    }
}

function click2(){
    if (clicked2){
        if(!clicked){
            menu.removeChild(headButtons)
            clicked = true
        }
        headButtons.style.color = "black"
        headButtons.style.paddingLeft = "3.5em"
        headButtons.style.paddingBottom = "2.5em"
        head.appendChild(headButtons)
        headButtons.style.display = "block"
        clicked2 = false
    }
    else if (!clicked2){
        head.removeChild(headButtons)
        headButtons.style.display = "none"
        clicked2 = true
    }
}



