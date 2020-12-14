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

header.addEventListener('click', function (evt) {
    toggleColor(header)
})

/***** Deliverable 2 *****/

let button = document.querySelector('.like-button')

button.addEventListener('click', function(evt) {
    likes.textContent = `${traveler.likes += 1} Likes`
})

/***** Deliverable 3 *****/

let animalForm = document.querySelector('#new-animal-sighting-form')

animalForm.addEventListener('submit', function(evt) {
    evt.preventDefault()
    
    // let formSpecies = animalForm.species.value
    // let formVideo = animalForm.link.value
    // let formPhoto = animalForm.photo.value
    // let formDesc = animalForm.description.value

    let formSpecies = evt.target.species.value
    let formVideo = evt.target.link.value
    let formPhoto = evt.target.photo.value
    let formDesc = evt.target.description.value

    let newAni = {
        // id: 5,
        species: formSpecies,
        photo: formPhoto,
        link: formVideo,
        description: formDesc
    }

    renderAnimalSightingPost(newAni)

    // animalForm.reset()
    evt.target.reset()


})