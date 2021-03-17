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

header.addEventListener("click", function () {
    if (header.style.color !== 'red') {
        header.style.color = 'red'
    } else {
        header.style.color = 'black'
    }
})

/***** Deliverable 2 *****/
const like_button = document.querySelector('button.like-button')

like_button.addEventListener('click', function (e) {
    console.log('likedddd')
    traveler.likes += 1
    likes.textContent = `${traveler.likes} Likes`

})

/***** Deliverable 3 *****/

const form = document.querySelector('form#new-animal-sighting-form')
form.addEventListener("submit", function (e) {
    e.preventDefault()

    const input1 = e.target[0].value
    const input2 = e.target[1].value
    const input3 = e.target[2].value
    const input4 = e.target[3].value

    const newAnimalObject = {
        Species: input1,
        VideoLink: input2,
        PhotoLink: input3,
        Description: input4,
        likes: 0,
        id: traveler.animalSightings[traveler.animalSightings.length - 1].id + 1

    }
    traveler.animalSightings.push(newAnimalObject)
    renderAnimalSightingPost(newAnimalObject)
    form.reset()
})