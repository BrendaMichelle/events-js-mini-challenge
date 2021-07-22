/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)

header.addEventListener('click', function(event){
    toggleColor(header)
}
)


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

/***** Deliverable 2 *****/


const likeBtn = document.querySelector("#profile button")
likeBtn.addEventListener('click', function(event){
    // get number of likes
    let likesPar = document.querySelector('#profile p')
    let numLikes = parseInt(likesPar.innerHTML.split(' ')[0])

    //increment number of likes
    numLikes++

    //update page with new number of likes
    likesPar.innerHTML = `${numLikes} likes`

})

/***** Deliverable 3 *****/
// create an event listener for the form
let newAnimalSightingForm = document.querySelector("#new-animal-sighting-form")

newAnimalSightingForm.addEventListener('submit', addAnimalSighting)

numSightings = 0

function addAnimalSighting(event) {
    numSightings++

    // prevent form from being submitted
    event.preventDefault()

    // get values from each input

    // species
    const species = document.querySelector("input#animal-species").value

    // video link
    const link = document.querySelector("input#animal-link").value

    // photo link
    const photo = document.querySelector("input#animal-photo").value

    // description
    const desc = document.querySelector("textarea#sighting-description").value
    
    // put it all together in an animal obj
    const animal = {description: `${desc}`, id: numSightings, link: `${link}`, photo: `${photo}`, species: `${species}`}
    renderAnimalSightingPost(animal)

}


