// JavaScript Document
console.log("Howdy!");


// Voor een geluidje bij het klikken

var audio = new Audio("audio/")

const pook = document.querySelector("article section img:nth-of-type(2)")
const pookInfo = pook.getBoundingClientRect()
const fordImages = document.querySelectorAll("img")
let initialX

pook.addEventListener("drag", onDrag)

function dragStart(event) {
    // Dit vertelt mij alles wat ik wil weten van alle kanten van de img
    initialX = pookInfo.x

    // console.log(initialX)
}

function onDrag(event) {
    const currentX = event.clientX
    const deltaX = currentX - initialX

if (deltaX > 170) {
    fordImages[0].src = ""
    fordImages[1].SRC = ""
} else {
    return
}
}