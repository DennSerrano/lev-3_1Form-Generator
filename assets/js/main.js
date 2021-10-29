let fontSize = document.getElementById("fontSize")
let fontFamily = document.getElementById("fontFamily")
let text = document.getElementById("text")
let textOutPut = document.getElementById("textOutPut")


function neuerText() {
    textOutPut.innerHTML = text.value
}

function fontRange() {
    console.log(fontSize.value)
    textOutPut.style.fontSize = fontSize.value + "px"
}

function fontArt() {
    textOutPut.style.fontFamily = fontFamily.value
}