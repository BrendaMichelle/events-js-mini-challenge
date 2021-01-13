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
// function toggleColor(element) {
//     if (element.style.color === "green") {
//         element.style.color = "black"
//     } else {
//         element.style.color = "green"
//     }
// }

const toggleColor = document.querySelector("h1#header")

toggleColor.addEventListener('click', function (element) {
    if (element.target.style.color === "green") {
        element.target.style.color = "black"
    } else if (element.target.style.color === "black") {
        element.target.style.color = "red"
    } else {
        element.target.style.color = "black"
    }
    // debugger
    // document.header.classList.toggle('header')

})



/***** Deliverable 2 *****/

const liker = document.querySelector("button.like-button")

liker.addEventListener('click', function (e) {
    const likes = document.querySelector("p.likes")
    //likes.textContent = `${parseInt(likes.textContent.replace(" Likes", "")) + 1 } Likes` 
    likes.textContent = `${traveler.likes += 1} Likes` 
})

/***** Deliverable 3 *****/

const animalSightingForm = document.querySelector("form#new-animal-sighting-form")

animalSightingForm.addEventListener('submit', function (event) {
    event.preventDefault()
    // animalSightingForm.querySelector("input[type='text']").value
    // event.target[0].value

    // event.target.species.value
    // event.target.link.value
    // event.target.photo.value
    // event.target.description.value
    // debugger

    // Get input fields from form: 

    const animalSpecies =  event.target.species.value
    const animalVidLink = event.target.link.value
    const animalPhotoLink = event.target.photo.value
    const animalDescription = event.target.description.value

    // DOM Manipulation:

    const post = {
        id: animalSightingForm,
        species: animalSpecies,
        photo: animalVidLink,
        link: animalPhotoLink,
        description: animalDescription
    }
    
    renderAnimalSightingPost(post)

    event.target.reset()

    // WATCHED THE LECTURE VIDEO FOR HELP 

})

