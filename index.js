/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)

/***** Deliverable 2 *****/
header.style.color = "green"

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const profileImg = document.querySelector("#profile img")
profileImg.src = traveler.photo
profileImg.alt = traveler.name

const profileH2 = document.querySelector("#profile h2")
profileH2.textContent = traveler.name

const profileEm = document.querySelector("#profile em")
profileEm.textContent = traveler.nickname

const likes = document.querySelector("#profile .likes")
likes.textContent = `${traveler.likes} Likes`


/***** Deliverable 4 *****/
function renderAnimalSightingPost (animalObject) {
    const li = document.createElement("li")
    li.dataset.id = animalObject.id

    const p = document.createElement("p")
    p.textContent = animalObject.description

    const img = document.createElement("img")
    img.src = animalObject.photo
    img.alt = animalObject.species

    const a = document.createElement("a")
    a.href = animalObject.link
    a.target = "_blank"
    a.textContent = `Here's a video about the ${animalObject.species} species!`

    li.append(p, img, a)

    const animalsUl = document.querySelector("#animals")
    animalsUl.append(li)
}

traveler.animalSightings.forEach(function (animalSightinObject) {
    renderAnimalSightingPost(animalSightinObject)
})

/***** Deliverable 5 *****/
const animalToRemove = document.querySelector("[data-id='3'")
animalToRemove.remove()

/***** End of Starter Code *****/
/************************** EVENTS JS MINI CHALLENGE ******************************/

/***** Deliverable 1 *****/
function toggleColor(element) {
    if (element.style.color === "green") {
        element.style.color = "black"
    } else {
        element.style.color = "green"
    }
}

// header.addEventListener("click", toggleColor)
header.addEventListener("click", colorChange)
header.style.cursor = "pointer"

function colorChange(e) {
    let element = e.target
    const color = element.style.color
    element.style.color = color === 'black' ? 'red' : 'black'
}

/***** Deliverable 2 *****/

const btn = document.querySelector("button.like-button")
btn.style.cursor = "pointer"
btn.addEventListener("click", function addLike() {
    traveler.likes++
    likes.textContent = `${traveler.likes} Likes`
})

/***** Deliverable 3 *****/


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#new-animal-sighting-form")
    // append/attatch event listeners
    form.addEventListener('submit', function(animalObject) {
        animalObject.preventDefault();
        const li = document.createElement("li")
        const animalsUl = document.querySelector("#animals")
        li.dataset.id = parseInt(animalsUl.lastChild.dataset.id, 10) + 1

        animalObject.species = form.species.value

        const p = document.createElement("p")
        p.textContent = form.description.value

        const img = document.createElement("img")
        img.src = form.photo.value
        img.alt = `${animalObject.species} photo` 

        const a = document.createElement("a")
        a.href = form.link.value
        a.target = "_blank"
        a.textContent = `Here's a video about the ${animalObject.species} species!`

        li.append(p, img, a)

        animalsUl.append(li)
        animalObject.target.reset()
    })

});
