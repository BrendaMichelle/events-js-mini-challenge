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

traveler.animalSightings.forEach(function (animalSightingObject) {
    renderAnimalSightingPost(animalSightingObject)
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

// const toggleColor = document.querySelector("h1#header")

// toggleColor.addEventListener('click', function(event) {
//     if (event.target.style.color === "red") {
//         event.target.style.color = "black"
//     } else {
//         event.target.style.color = "red"
//     }
// })

// event.target will be whatever the user clicked on

header.addEventListener('click', function() {
    // console.log('clicked!')
    toggleColor(header)
})

/***** Deliverable 2 *****/

const button = document.querySelector("button.like-button")

button.addEventListener('click', function() {

   // const likesPtag = document.querySelector('p.likes')
   // const likesPtag = button.previousElementsSibling
   
   // likes variable from line 24 is in global scope
   // approach 1 - using likes from DOM
   let currLikes = parseInt(likes.textContent)
   likes.textContent = `{currLikes + 1} Likes`

   // approach 2 - using likes from traveler objects
   // likes.textContent = `${traveler.likes++} Likes`
})

/***** Deliverable 3 *****/

// const form = document.querySelector('form#new-animal-sighting-form')

// form.addEventListener('submit', function (event) {
//     event.preventDefault() // ALWAYS!
//     console.log('Form submitted!!!')

//     // GET THE USER INPUT FROM THE FORM
//     console.dir(event.target)

//     const inputFieldOne = event.target[0].value
//     const inputFieldTwo = event.target[1].value
//     const inputFieldThree = event.target[2].value
//     const inputFieldFour = event.target[3].value

//     const newAnimalSightingObject = {
//         id: traveler.animalSightings[traveler.animalSightings.length - 1].id + 1,
//         travelerId: traveler.animalSightings[traveler.animalSightings.length - 1].id + 1,
//         species: inputFieldOne,
//         photo: inputFieldTwo,
//         link: inputFieldThree,
//         description: inputFieldFour,
//     }

//     traveler.animalSightings.push(newAnimalSightingObject)

//     renderAnimalSightingPost(newAnimalSightingObject)
//     form.reset()
// })

const newSightingForm = document.querySelector('form#new-animal-sighting-form')

newSightingForm.addEventListener('submit', function (event) {
    event.preventDefault()

    // debugger

    const species = event.target[0].value
    const video = event.target[1].value
    const photo = event.target[2].value
    const description = event.target[3].value
    
    // another option #1
    // const species = event.target.querySelector('input[name="species")').value
    // const video = event.target.querySelector('input[name="link")').value
    // const photo = event.target.querySelector('input[name="photo")').value

    // another option #2 - using the id or name attribute on the element
    // you can use dot notation if the value of the attribute doesn't have any special characters like a dash. Otherwise, use bracket notation.
    // const species = e.target["species"].value;
    // const videoLink = e.target["animal-link"].value;
    // const photo = e.target["animal-photo"].value;
    // const description = e.target["sighting-description"].value;

    // const species = e.target.species.value; // ex using dot notation

    const lastIndex = traveler.animalSightings.length - 1
    const newSightingObject = {
        id: traveler.animalSightings[lastIndex].id + 1, // won't need to do this when we incorporate our own real database.
        travelerId: 1,
        species: species,
        photo: photo,
        link: video,
        description: description
    }
    renderAnimalSightingPost(newSightingObject)

    newSightingForm.reset()
})