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

const toggleHeaderColor = document.querySelector("h1#header")

toggleHeaderColor.addEventListener('click', function (event) {
    if (toggleHeaderColor.style.color === "green") {
        toggleHeaderColor.style.color = "black"
    } else {
        toggleHeaderColor.style.color = "green"
    }
}
)

/***** Deliverable 2 *****/

const addLikes= document.querySelector('button.like-button')
addLikes.addEventListener('click', function (event) {
    traveler.likes += 1
    likes.textContent = `${traveler.likes} Likes`
})

/***** Deliverable 3 *****/

const form = document.querySelector('form#new-animal-sighting-form')

form.addEventListener('submit', function (event){
    event.preventDefault()

    const inputFieldOne = event.target[0].value
    const inputFieldTwo = event.target[1].value
    const inputFieldThree = event.target[2].value 
    const inputFieldFour = event.target[3].value

    const newAnimalSighting = {

        species: inputFieldOne,
        video: inputFieldTwo,
        photo: inputFieldThree,
        description: inputFieldFour,
        id: traveler.animalSightings[traveler.animalSightings.length - 1].id + 1
    }
    traveler.animalSightings.push(newAnimalSighting)
    renderAnimalSightingPost(newAnimalSighting)
    form.reset()
})

// used the following info to test the new animal sighting;

// species: green anaconda
// video link: https://www.youtube.com/watch?v=F000UK_kUq4
// photo link: https://i.natgeofe.com/n/26523bf9-bbae-4e2c-a2bc-eee44f5ed376/green-anaconda.jpg
// description: a big snake