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
// const titleToggle = document.querySelector("h1#header")

// titleToggle.addEventListener('click', function(element){
//     if (element.style.color === "green") {
//         element.style.color = "black"
//     } else {
//         element.style.color = "green"
//     }
// })

function toggleColor(element) {
    if (element.style.color === "green") {
        element.style.color = "black"
    } else {
        element.style.color = "green"
    }
}

header.addEventListener('click', event => {
    console.log(event.target)
    toggleColor(event.target)
})

/***** Deliverable 2 *****/

likeButton = document.querySelector("button.like-button")
likeCount = document.querySelector("p.likes")

count = 1000
likeButton.addEventListener('click', event => {
    // My appraoch
    // likeButton.classList.toggle('liked')
    // count += 1;
    // likeCount.innerHTML = "Likes: " + count
    // APPROACH 1
    const likesPDisplay = document.querySelector('p.likes')
    traveler.likes += 1
    likesPDisplay.textCOntent = `${traveler.likes} Likes`
    console.log('clicked', event.target)

    APPROACH 2
    const likesPDisplay = document.querySelector('p.likes')
    const currLikes = parseInt(likesPDisplay.textContent)
    likesPDisplay.textContent = `${currLikes + 1} Likes`
})

// Approach 3
console.log(event.target)
const likesPDisplay = event.target.previousElementSibling
console.log(likesPDisplay)
/***** Deliverable 3 *****/

const createAnimalSightingForm = document.querySelector('#new-animal-sighting-form')
createAnimalSightingForm.addEventListener('submit', event => {
    event.preventDefault()
    console.log('form submitted')
})


const speciesInput = event.target.species.value
const videoInput = event.target.link.value
const photoInput = event.target.photo.value
const descriptionInput = event.target.description.value

const lastIndex = traveler.animalSightings.length - 1
const lastId = traveler.animalSightings[lastIndex].id

const newAnimalObj = {
    travelerId: 1,
    species: speciesInput,
    video: videoInput,
    photo: photoInput,
    description: descriptionInput,
    id: lastId + 1
}

renderAnimalSightingPost(newAnimalObj)
event.target.reset()
