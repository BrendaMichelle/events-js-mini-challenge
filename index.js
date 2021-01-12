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
    if (element.target.style.color === "red") {
        element.target.style.color = "black"
    } else {
        element.target.style.color = "red"
    }
}

header.addEventListener("click", toggleColor)

/***** Deliverable 2 *****/
const likeButton = document.querySelector(".like-button")
const likeCounter = document.querySelector(".likes")
let likeNumber = parseInt(likeCounter.innerText)
function increaseLikes() {
    likeNumber++;
    likeCounter.textContent = `${likeNumber} Likes`
}
likeButton.addEventListener("click", increaseLikes)

/***** Deliverable 3 *****/
const newSightingObject = {};
function createSightingObject(species, video, photo, description) {
    let speciesInput = document.getElementById("animal-species").value
    let videoInput = document.getElementById("animal-link").value
    let photoInput = document.getElementById("animal-photo").value 
    let descriptionInput = document.getElementById("sighting-description").value 
    newSightingObject.species = speciesInput;
    newSightingObject.video = videoInput;
    newSightingObject.photo = photoInput;
    newSightingObject.description = descriptionInput;
    renderAnimalSightingPost(newSightingObject)
};

const submitButton = document.querySelector("input[type='submit']")
// submitButton.addEventListener('click', createSightingObject)
submitButton.addEventListener('click', function (e) {
    e.preventDefault()
    createSightingObject()
})