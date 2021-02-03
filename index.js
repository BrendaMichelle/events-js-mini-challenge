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
header.addEventListener('click', function() {
    toggleColor(header)
})

function toggleColor(element) {
    if (element.style.color === "green") {
        element.style.color = "black"
    } else {
        element.style.color = "green"
    }
}

/***** Deliverable 2 *****/
const likeButton = document.querySelector(".like-button")

likeButton.addEventListener(`click`, function() {
    likeButtonPress()
})

function likeButtonPress() {
  traveler.likes++
  document.querySelector(".likes").textContent = `${traveler.likes} Likes`
}

/***** Deliverable 3 *****/
const form = document.querySelector("#new-animal-sighting-form")
form.addEventListener('submit', function(event) {
    event.preventDefault()
    const formSpecies = document.querySelector("#animal-species").value
    const formLink = document.querySelector("#animal-link").value
    const formPhoto = document.querySelector("#animal-photo").value
    const formDescription = document.querySelector("#sighting-description").value
    const formId = traveler.animalSightings.length++

    const newAnimalObject = {
        id: formId,
        travelerId: 1,
        species: formSpecies,
        photo: formPhoto,
        link: formLink,
        description: formDescription
    }

renderAnimalSightingPost(newAnimalObject)
event.target.reset()

})

