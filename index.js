/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)

header.addEventListener("click", function(){
    toggleColor(header);
})

/***** Deliverable 2 *****/
header.style.color = "green"

const likeButton = document.querySelector(".like-button")
likeButton.addEventListener("click", function(){
    let travelerLikes = document.querySelector(".likes")
    traveler.likes ++
    travelerLikes.textContent = `${traveler.likes.toString()} Likes`
});


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


let animalSightingForm = document.querySelector("#new-animal-sighting-form")

animalSightingForm.addEventListener("submit", function(evt){
    evt.preventDefault()
    console.log("Animal Submitted")

    let species = evt.target.species.value
    let videoLink = evt.target.link.value
    let pictureLink = evt.target.photo.value
    let animalDescription = evt.target.description.value

    addAnimal(species, videoLink, pictureLink, animalDescription)

    evt.target.reset()
});

function addAnimal(species, videoLink, pictureLink, animalDescription) {
    let animalUl = document.querySelector("#animals")

    let li = document.createElement("li")
        li.dataset.id = parseInt(animalUl.lastChild.dataset.id) + 1 

    let p = document.createElement("p")
        p.textContent = animalDescription


    let a = document.createElement("a")
        a.href = videoLink
        a.textContent = `Here's a video about the ${species} species!`


    let img = document.createElement("img")
        img.src = pictureLink
        img.alt = `${species} photo`

    li.append(p, img, a)
    animalUl.append(li)
}

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

/***** Deliverable 2 *****/

/***** Deliverable 3 *****/
