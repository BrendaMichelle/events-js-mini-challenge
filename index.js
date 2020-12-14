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
    if (element.target.style.color === "green") {
        element.target.style.color = "black"
    } else {
        element.target.style.color = "green"
    }
}

header.addEventListener("click", toggleColor)

/***** Deliverable 2 *****/

const likeButton = document.querySelector('button.like-button')

likeButton.addEventListener("click", function (evt) {

   likeNumber = parseInt(likes.innerText, 10)
    likeNumber +=1 

    likes.innerText = `${likeNumber} Likes`

    // debugger
})


/***** Deliverable 3 *****/

let dummyId = 5

form = document.querySelector('form#new-animal-sighting-form')

form.addEventListener("submit", function (evt) {
    evt.preventDefault()

    const formSpecies = evt.target.querySelector('input#animal-species').value
    const formLink = evt.target.querySelector('input#animal-link').value
    const formPhoto = evt.target.querySelector('input#animal-photo').value
    const formDescription = evt.target.querySelector('textarea#sighting-description').value

    let animalObject = {}
    animalObject.species = formSpecies 
    animalObject.photo = formPhoto
    animalObject.ink = formLink
    animalObject.description = formDescription
    animalObject.id = dummyId

    renderAnimalSightingPost(animalObject)
    dummyId += 1

    // debugger 
    // const li = document.createElement("li")
    // li.dataset.id = dummyId
    // dummyId += 1

    // const p = document.createElement("p")
    // p.textContent = formDescription

    // const img = document.createElement("img")
    // img.src = formPhoto
    // img.alt = formSpecies

    // const a = document.createElement("a")
    // a.href = formLink
    // a.target = "_blank"
    // a.textContent = `Here's a video about the ${formSpecies} species!`

    // li.append(p, img, a)

    // const animalsUl = document.querySelector("#animals")
    // animalsUl.append(li)
     
})