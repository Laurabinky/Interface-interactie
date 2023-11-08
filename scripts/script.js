// JavaScript Document
console.log("Howdy!");


// Voor een geluidje bij het klikken

var audio = new Audio("audio/toet.mp3")
var stuur = document.querySelector("article section:nth-of-type(2) img:nth-of-type(1)");

stuur.addEventListener("click", () => {
    audio.play();
});

// Voor een muziekje bij het klikken op de radio

var muziek = new Audio("audio/liedje.mp3")
var cdspeler = document.querySelector("article section:nth-of-type(2) img:nth-of-type(2)");

cdspeler.addEventListener("click", () => {
    muziek.play();
    console.log("werkt dit")
});


//  Navigeren tussen de items
// Bij dit onderdeel heb ik hulp gehad van Leo, het grootste deel snap ik 
const pook = document.querySelector("article section img:nth-of-type(3)")

// Dit vertelt mij alles wat ik wil weten van alle kanten van de img
const pookInfo = pook.getBoundingClientRect()
const timelineItems = document.querySelectorAll("article > section:nth-of-type(1) > ul > li")
const radio = document.querySelector("article section:nth-of-type(2) img:nth-of-type(2)")

// Deze moeten veranderen in de function
let initialX
let currentIndex = 0
let eventOn = true


// Zet een class met hidden op alle li'tjes
function showItem() {
    timelineItems.forEach((li, index) => {
        if (index == currentIndex) {
            li.classList.remove("hidden")
        } else {
            li.classList.add("hidden")
        }
    })
}
showItem()

// Kijkt naar of er gesleept wordt en geeft de info aan de let
function dragStart(event) {
if (!eventOn) {
    eventOn = true
    initialX = pookInfo.x
onDrag()
} else {
    initialX = pookInfo.x
    }
}

pook.addEventListener("drag", function onDrag(event) {
if (eventOn == false) {
    return
}

// Deze variabelen moeten hier anders wordt de code ontregeld
const currentX = event.clientX
const deltaX = currentX - initialX

if (deltaX > 100 && currentIndex == 1) {
    // Met % geef je aan dat als het aantal groter is dan het aantal wat er is ga je terug naar item 1
    currentIndex = (currentIndex + 1) % timelineItems.length
    // Veranderen van de radio
    radio.src = "../images/radio2000.png"

    // Zodat hij opnieuw gaat kijken naar de statement
    showItem()
    eventOn = false

    // Zodat je opnieuw de pook kan bewegen
    setTimeout(() => {
        eventOn = true
    }, 10000)
    
} else if (deltaX > 170 && currentIndex == 4) {

    currentIndex = (currentIndex + 1) % timelineItems.length
    // Veranderen van de radio 2
    radio.src = "../images/radio.jpg"

    // Zodat hij opnieuw gaat kijken naar de statement en de class op de juiste plek zet
    showItem()
    eventOn = false

    // Zodat je opnieuw de pook kan bewegen
    setTimeout(() => {
        eventOn = true
    }, 10000)

} else if (deltaX > 170) {
    // Zorgt ervoor dat je meerdere malen door de rij heen kan navigeren
    currentIndex = (currentIndex + 1) % timelineItems.length
    
    // Zodat hij opnieuw gaat kijken naar de statement
    showItem()
    eventOn = false

     // Zodat je opnieuw de pook kan bewegen
    setTimeout(() => {
        eventOn = true
    }, 10000)
}
else {
    return
}
})



// Zichtbaar maken van het 1e stukje tekst

var stuurKlik = document.querySelector("article section:nth-of-type(2) img:nth-of-type(1)")

stuurKlik.addEventListener("click", () => {
    timelineItems[currentIndex].classList.add("zichtbaar")
})