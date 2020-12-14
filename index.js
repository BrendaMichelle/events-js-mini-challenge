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

let changeH1Color = document.querySelector('h1') 

changeH1Color.addEventListener("click", function() {
    if(changeH1Color.style.color === "green") {
        changeH1Color.style.color = "black"
    } else if(changeH1Color.style.color === "black") {
        changeH1Color.style.color = "red"
    } else {
        changeH1Color.style.color = "green"
    }
}) 

// function toggleColor(element) {
//     if (element.style.color === "green") {
//         element.style.color = "black"
//     } else {
//         element.style.color = "green"
//     }
// }

/***** Deliverable 2 *****/

let likeButton = document.querySelector("button.like-button") 

likeButton.addEventListener("click", function() {
    likes.textContent = `${traveler.likes +=1} Likes`
    console.log(traveler.likes)
}) 


/***** Deliverable 3 *****/

let newAnimalSighting = document.querySelector("form#new-animal-sighting-form")

newAnimalSighting.addEventListener("submit", function(e){
    e.preventDefault()

    let aSpecies = e.target.species.value
    let aPhoto = e.target.photo.value
    let aVideo = e.target.link.value
    let aDes = e.target.description.value

    turnNewSightingToHTML(aSpecies, aPhoto, aVideo, aDes)
    
    e.target.reset()
}) 

////////////////////////////////

function turnNewSightingToHTML(aSpecies, aPhoto, aVideo, aDes) {
    let li = document.createElement("li")

    let p = document.createElement("p")
    p.textContent = aDes

    let img = document.createElement("img")
    img.src = aPhoto
    img.alt = aSpecies

    let a = document.createElement("a") 
    a.href = aVideo
    a.target = "_blank"
    a.textContent = `Here's a video about the ${aSpecies} species!`

    li.append(p, img, a)

    let animals = document.querySelector("#animals")
    animals.append(li)
}



    












    

  