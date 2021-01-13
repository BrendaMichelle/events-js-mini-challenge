/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = 'green'


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const profileImg = document.querySelector("#profile img")
profileImg.src = traveler.photo
profileImg.alt = traveler.name

const profileH2 = document.querySelector("#profile h2")
profileH2.textContent = traveler.name

const profileEm = document.querySelector("#profile em")
profileEm.textContent = traveler.nickname

const likePar = document.querySelector("#profile .likes")
likePar.textContent = `${traveler.likes} Likes`


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
    if (element.style.color === "red") {
        element.style.color = "black"
    } else {
        element.style.color = "red"
    }
}

header.addEventListener('click', function() {
    // when a click takes place on header, invoke toggleColor function on the header
    toggleColor(header)
})



/***** Deliverable 2 *****/

const likeBtn = document.getElementsByClassName('like-button')[0]
let numOfLikes = parseInt(likePar.innerHTML.split(' ')[0])

likeBtn.addEventListener('click', function() {
    likePar.innerHTML = `${numOfLikes += 1} Likes`
})




/***** Deliverable 3 *****/

const animalForm = document.querySelector('#new-animal-sighting-form')

animalForm.addEventListener('submit', function(event) {

    event.preventDefault()

    // access user input
    const speciesInput = animalForm.species.value
    const videoInput = animalForm.link.value
    const photoInput = animalForm.photo.value
    const descInput = animalForm.description.value

    // use input to structure new post
    const newPost = {
        species: speciesInput,
        link: videoInput,
        photo: photoInput,
        description: descInput
    }

    // render new animal sighting to page using newPost with user input
    renderAnimalSightingPost(newPost)

    // reset input fields in form
    event.target.reset()
})