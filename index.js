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

header.addEventListener("click", function() {
    toggleColor(header)
} )


toggleColor(document.querySelector("h1#header"))
/***** Deliverable 2 *****/

const likeButton = document.querySelector('button.like-button')

likeButton.addEventListener("click", function() {
    traveler.likes ++
    likes.textContent = `${traveler.likes} Likes`
} )



/***** Deliverable 3 *****/

const form = document.querySelector("form")

form.addEventListener('submit', function (event){
    event.preventDefault()
    const firstInput = event.target.species.value
    const secondInput = event.target.link.value
    const thirdInput = event.target.photo.value
    const fourthInput = event.target.description.value

    // const firstInput = event.target.title.value
    // const secondInput = event.target.author.value

    // querySelect the input field, call .value on the element
    animalSightings = traveler.animalSightings
    const lastId = animalSightings[animalSightings.length - 1].id
    const newId = lastId + 1

    const animalObject = {
        id: newId,
        species: firstInput,
        link: secondInput,
        photo: thirdInput,
        description: fourthInput,
        
    }
    renderAnimalSightingPost(animalObject)
    event.target.reset()
})
    