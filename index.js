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

let hdr1 = document.querySelector("h1#header")
hdr1.addEventListener("click", function(evt){
    evt.preventDefault()
    console.log("received click")
    let hdr2 = evt.target
    toggleColor(hdr2)
})



/***** Deliverable 2 *****/

let likeButton = document.querySelector("button.like-button")
likeButton.addEventListener("click", function(evt){
    evt.preventDefault()
    console.log("received click")
    traveler.likes += 1
}) 

/***** Deliverable 3 *****/

let newAnimalSightingForm = document.querySelector("form#new-animal-sighting-form")
    newAnimalSightingForm.addEventListener("submit", function(evt){
        evt.preventDefault()
        console.log("Form submission has happened")
       
        let species = document.querySelector("#new-animal-sighting-form").species.value 
        let link = document.querySelector("#new-animal-sighting-form").link.value
        let photo = document.querySelector("#new-animal-sighting-form").photo.value
        let description = document.querySelector("#new-animal-sighting-form").description.value
        let id = (traveler.animalSightings.length + 1)

        animal = 
        {
            id: id,
            species: species,
            photo: photo,
            link: link,
            description: description
        }

        renderAnimalSightingPost(animal) 
       
    })