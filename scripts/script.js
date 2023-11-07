// JavaScript Document
console.log("Howdy!");


// Voor een geluidje bij het klikken

var audio = new Audio("audio/toet.mp3")
var stuur = document.querySelector("article section:nth-of-type(2) img:nth-of-type(1)");

stuur.addEventListener("click", () => {
    audio.play();
    console.log("hallocc")
});



//  Navigeren tussen de items
const pook = document.querySelector("article section img:nth-of-type(2)")

// Dit vertelt mij alles wat ik wil weten van alle kanten van de img
const pookInfo = pook.getBoundingClientRect()

const fordImages = document.querySelectorAll("img")
let initialX

pook.addEventListener("drag", onDrag)

function dragStart(event) {
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