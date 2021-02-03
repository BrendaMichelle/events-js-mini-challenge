/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "black"


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
console.log(header);

header.addEventListener("click", toggleColor)

function toggleColor(event) {
    let element = event.target
    if (element.style.color === "red") {
        element.style.color = "black"
    } else {
        element.style.color = "red"
    }
}

/***** Deliverable 2 *****/

let likeButton = document.querySelector(".like-button")

likeButton.addEventListener("click", incrementLikes)

function incrementLikes(e){
let likeP =  e.target.parentElement.querySelector(".likes")
let likeText = likeP.innerText
let likeCount = parseInt(likeText.split(" ")[0])
let likesAddOne = likeCount +=1
likeP.textContent = `${likesAddOne} Likes`
}

/***** Deliverable 3 *****/

const form = document.querySelector("form#new-animal-sighting-form")
form.addEventListener("submit", getFormData)
    function getFormData(e){
    e.preventDefault() //prevents page from being refreshed on submit
    let id = e.target.id
    let description = e.target.description.value
    let photo = e.target.photo.value
    let link = e.target.link.value
    let species = e.target.species.value

    const animalObject = {id, species, photo, link, description}
    renderAnimalSightingPost(animalObject)
}