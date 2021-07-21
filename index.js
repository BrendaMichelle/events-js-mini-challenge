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

/***** Deliverable 1 *****/ //[DONE]
function toggleColor(element) {
    if (element.style.color === "green") {
        element.style.color = "black"
    } else {
        element.style.color = "green"
    }
}

header.addEventListener('click', function (){
    toggleColor(document.querySelector("h1#header"))
})

/***** Deliverable 2 *****/  //[DONE]
const like_button = document.querySelector("button.like-button")

like_button.addEventListener('click', function(){
    traveler.likes = traveler.likes + 1
    likes.textContent = `${traveler.likes} Likes`
})

/***** Deliverable 3 *****/

const form_submit = document.querySelector("form#new-animal-sighting-form")
form_submit.addEventListener('submit', function(event){
    event.preventDefault()
    const id_temp = traveler.animalSightings.length + 1
    const species_temp = event.target.species.value
    const photo_temp = event.target.photo.value
    const link_temp = event.target.link.value
    const description_temp = event.target.description.value

    const animalObject = {
        id: id_temp,
        travelerId: 1,
        species: species_temp,
        photo: photo_temp,
        link: link_temp,
        description: description_temp
    }

    renderAnimalSightingPost(animalObject)

    traveler.animalSightings.push(animalObject)
    form_submit.reset()
})