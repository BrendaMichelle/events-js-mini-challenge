/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)



/***** Deliverable 2 *****/
header.style.color = "orange"


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
    if (element.style.color === "orange") {
        element.style.color = "red"
    } else {
        element.style.color = "orange"
    }
}

header.addEventListener("click", function() {
    toggleColor(document.querySelector("h1#header"))
})



/***** Deliverable 2 *****/

// if button.like-button is clicked, then p.likes needs to increase by one

const likeBtn = document.querySelector("button")
const numOfLikes = document.querySelector("p")

likeBtn.addEventListener("click", function(event) {
    num = parseInt(numOfLikes.innerText)
    num += 1
    numOfLikes.innerText = num
})


// likeBtn.addEventListener("submit", function(event) {

// })


/***** Deliverable 3 *****/

// use submit not click 
// event.preventDefault()

let newSightingForm = document.querySelector("form#new-animal-sighting-form")

newSightingForm.addEventListener("submit", function(e) {
    e.preventDefault()

    let sightingSpecies = e.target.species.value
    let sightingLink = e.target.link.value
    let sightingPhoto = e.target.photo.value
    let sightingDescription = e.target.description.value
    

    e.target.reset()


} )

