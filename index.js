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

let headerH1 = document.querySelector("h1#header")

headerH1.addEventListener("click", function() {
    toggleColor(header)
})

/***** Deliverable 2 *****/

let likeButtton = document.querySelector(".like-button")
let likeField = document.querySelector(".likes")

likeButtton.addEventListener("click", function() {
  increaseLike()
  console.log("liked")
})


function increaseLike () {
    let likeNum = parseInt(likeField.textContent.split(" ")[0])
    likeNum += 1
    likeField.textContent = `${likeNum.toString()} Likes`
  }

/***** Deliverable 3 *****/

let newSightingForm = document.querySelector("#new-animal-sighting-form")

newSightingForm.addEventListener("submit", function(evt) {
    evt.preventDefault()
    console.log("form submitted")

    let species = document.querySelector("#animal-species").value
    let videoLink = document.querySelector("#animal-link").value
    let photoLink = document.querySelector("#animal-photo").value
    let animDesc = document.querySelector("#sighting-description").value

    addAnimal(species,videoLink, photoLink, animDesc)

    evt.target.reset()
})

function addAnimal(species,videoLink, photoLink, animalDesc) {
    let animalUl = document.querySelector("#animals")

    let li = document.createElement("li")

    let p = document.createElement("p")
        p.textContent = animalDesc
    
    let a = document.createElement("a")
        a.href = videoLink
        a.textContent = `Here's a video about the ${species} species`

    let img = document.createElement("img")
        img.src = photoLink

    li.append(p, img, a)
    animalUl.append(li)
}

