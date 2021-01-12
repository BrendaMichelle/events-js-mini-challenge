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
const animalToRemove = document.querySelector("[data-id='3']")
animalToRemove.remove()

/***** End of Starter Code *****/
/************************** EVENTS JS MINI CHALLENGE ******************************/

/***** Deliverable 1 *****/

// Edited the code so that when the header is clicked the color toggles red and black
function toggleColor(element) {
    if (element.style.color === "green") {
        element.style.color = "black"
    } else if (element.style.color === "black") {
        element.style.color = "red"
    } else if (element.style.color === "red") {
        element.style.color = "black"
    }
}

header.addEventListener("click", function(event) {
    toggleColor(event.target)
})


/***** Deliverable 2 *****/
const button = document.querySelector(".like-button")
const likeCount = document.querySelector("p.likes")

let count = 1000
// assigned the initial count to 1000

button.addEventListener("click", function() {
    likeCount.textContent = `${count++} Likes`
})

//each time the like button is clicked the count increased by one

/***** Deliverable 3 *****/

const animalForm = document.querySelector("#new-animal-sighting-form")

animalForm.addEventListener("submit", function(event){
   event.preventDefault()
   // prevented a refresh
   
   const speciesInput = event.target.species.value
   const linkInput = event.target.link.value
   const photoInput = event.target.photo.value
   const descriptionInput = event.target.description.value
    // assigned variables to the form values

   const newAnimal = {
       species: speciesInput,
       link: linkInput,
       photo: photoInput,
       description: descriptionInput
   }
   // used the form values to create a hash that can be passed through the function below

   renderAnimalSightingPost(newAnimal) 

   // used the function from above

   event.target.reset()
   // cleared the form
})