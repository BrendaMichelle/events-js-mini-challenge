/***** Deliverable 1 *****/
const header = document.querySelector("#header")
header.style.color = "green"
console.log("Here's your header:", header)

header.addEventListener("click", function(){
    toggleColor(document.querySelector("h1#header"))
})


/***** Deliverable 2 *****/
const likeButton = document.querySelector(".like-button")
const pLikes = document.querySelector(".likes")

likeButton.addEventListener("click", function(){
    const totalLikes =  parseInt(pLikes.textContent)
    pLikes.textContent = totalLikes + 1 + " Likes"
})


/***** Deliverable 3 *****/
//ADD A NEW ANIMAL SIGHTING
const form = document.querySelector("#new-animal-sighting-form")
form.addEventListener("submit", function(event){
    event.preventDefault()
    const species = event.target.species.value
    const videoLink = event.target.link.value
    const photoLink = event.target.photo.value
    const description = event.target.description.value
    const lastAnimalId = document.querySelector("#animals").lastChild.dataset.id
    const newAnimalId = parseInt(lastAnimalId) + 1

    const newAnimalSighting = {
        id: newAnimalId,
        travelerId: 1,
        species: species,
        link: videoLink,
        photo: photoLink,
        description: description
    }

    renderAnimalSightingPost(newAnimalSighting)
    event.target.reset()
})



// RAFFY PROFILE STARTER CODE
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

/***** Deliverable 3 *****/
