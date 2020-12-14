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
    if (header.style.color === "green") {
        header.style.color = "black"
    } else {
        header.style.color = "green"
    }
}

header.addEventListener("click", toggleColor   )
/***** Deliverable 2 *****/

let likeButton = document.querySelector("button.like-button")
likeButton.addEventListener("click", function(evt) {
    // numLikes,  increment counter
    // let numLikes = document.querySelector("p.likes")
   ++traveler.likes
   //obj is getting incremented, just need to display
   likes.textContent = `${traveler.likes} Likes`
// probably a more efficient way to do this, but for now good
})


/***** Deliverable 3 *****/


let newSightingForm = document.querySelector("form#new-animal-sighting-form")
newSightingForm.addEventListener("submit", function(evt) {
    evt.preventDefault
    console.log("Testing")
    debugger
})