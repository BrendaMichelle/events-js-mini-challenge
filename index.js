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


header.addEventListener('click', function(){
    toggleColor(header)
})


/***** Deliverable 2 *****/
const likeButton = document.querySelector('.like-button')
let likesStr = document.querySelector('.likes')
let totalLikes = parseInt(likesStr.textContent)
likeButton.addEventListener('click', function(){
    totalLikes++
    let newTotal = totalLikes.toString()
    let arr = likesStr.textContent.split(' ')
    arr[0] = newTotal
    likesStr.textContent = arr.join(' ')
})



/***** Deliverable 3 *****/
let sightingForm = document.querySelector('#new-animal-sighting-form')

sightingForm.addEventListener('submit', function(evt){
    evt.preventDefault()
    console.log('form submitted')
    
    let sightingSpecies = evt.target.species.value
    let sightingVideo = evt.target.link.value
    let sightingPhoto = evt.target.photo.value
    let sightingDescription = evt.target.description.value

    let newSighting = {
        species: sightingSpecies,
        photo: sightingPhoto,
        link: sightingVideo,
        description: sightingDescription
    }
    renderAnimalSightingPost(newSighting)

    evt.target.reset()
})