// JavaScript Document
console.log("Howdy!");


// Voor een geluidje bij het klikken

var audio = new Audio("audio/toet.mp3")
var stuur = document.querySelector("article section:nth-of-type(2) img:nth-of-type(1)");

stuur.addEventListener("click", () => {
    audio.play();
});



// Zichtbaar maken van het 1e stukje tekst

var stuurKlik = document.querySelector("article section:nth-of-type(2) img:nth-of-type(1)")
var liZichtbaar = document.querySelector("article section > ul li:first-of-type")

stuurKlik.addEventListener("click", () => {
    liZichtbaar.classList.add("zichtbaar")
})



//  Navigeren tussen de items
const pook = document.querySelector("article section img:nth-of-type(3)")

// Dit vertelt mij alles wat ik wil weten van alle kanten van de img
const pookInfo = pook.getBoundingClientRect()
const timelineItems = document.querySelectorAll("article > section:nth-of-type(1) > ul > li")
const radio = document.querySelector("article section:nth-of-type(2) img:nth-of-type(2)")
let initialX
let currentIndex = 0

console.log(timelineItems)

function dragStart(event) {
    initialX = pookInfo.x

    // console.log(initialX)
}

function showItem() {
timelineItems.forEach((li, index) => {
if (index == currentIndex) {
    li.classList.remove("hidden")
} else {
    li.classList.add("hidden")
}
})
}

pook.addEventListener("drag", (event) => {
    const currentX = event.clientX
    const deltaX = currentX - initialX

    // console.log(deltaX)

if (deltaX > 170 && currentIndex == 2) {
    // Met % geef je aan dat als het aantal groter is dan het aantal wat er is ga je terug naar item 1
currentIndex = (currentIndex + 1) % timelineItems.length

    radio.src = ""

    showItem()
} else if (deltaX > 170 && currentIndex == 5) {
    currentIndex = (currentIndex + 1) % timelineItems.length

    radio.src = ""

    showItem()

} else if (deltaX > 170) {
    currentIndex = (currentIndex + 1) % timelineItems.length
    showItem()

}
else {
    return
}
})

console.log(currentIndex)
