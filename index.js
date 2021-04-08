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

const headerHText = document.querySelector('h1#header')

headerHText.addEventListener('click', () => {
    toggleColor(headerHText)
})

/***** Deliverable 2 *****/
const profileLikeButton = document.querySelector("#profile > button.like-button")

function addLike() {
    let likeTextLine = document.querySelector("#profile > p.likes")
    // let numberOfLikes = parseInt((likeTextLine.textContent).split(" ")[0])
    // let likeWord = (likeTextLine.textContent).split(" ")[1]

    // numberOfLikes ++
    // newTextLine = `${numberOfLikes} ${likeWord}`

    // likeTextLine.textContent = newTextLine
    traveler.likes ++
    likeTextLine.textContent = `${traveler.likes} Likes`
}

profileLikeButton.addEventListener("click", addLike)

/***** Deliverable 3 *****/

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRScyAlwz8XmCGVAelZEgA6BiWzL6nFZfmhUw&usqp=CAU
//https://www.youtube.com/watch?v=xauuxEwHFxw
//Guinea pigs galore! Not for eating!

const sightingSubmitButton = document.querySelector("#new-animal-sighting-form > input[type=submit]")
sightingSubmitButton.addEventListener("click", (event) => event.preventDefault())

const animalSightingForm = document.querySelector("form#new-animal-sighting-form")

function addAnimalSighting() {
    sightingsList = traveler.animalSightings // Next line just got too long without
    lastAnimalId = sightingsList[(sightingsList.length)-1].id

    newAnimalObject = {
        id: (lastAnimalId +1),
        travelerId: traveler.id,
        species: animalSightingForm[0].value,
        photo: animalSightingForm[2].value,
        link: animalSightingForm[1].value,
        description: animalSightingForm[3].value
    }
    renderAnimalSightingPost(newAnimalObject)
}

sightingSubmitButton.addEventListener("click", () => addAnimalSighting())
