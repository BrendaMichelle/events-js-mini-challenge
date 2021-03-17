/***** Deliverable 1 *****/
const header = document.querySelector("#header")
// console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "green"


/***** Deliverable 3 *****/
// console.log('This is what the traveler object looks like: ', traveler)

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
const h1 = document.querySelector('h1')
function toggleColor(element) {
    if (element.style.color === "red") {
        element.style.color = "black"
    } else {
        element.style.color = "red"
    }
}

h1.addEventListener('click', function(){
    if(h1.style.color === 'red'){
        h1.style.color = 'black'
    }
    else {
        h1.style.color = 'red'
    }
})

/***** Deliverable 2 *****/

const button = document.querySelector('.like-button')
console.log(button)
button.addEventListener('click', function(){
    let likes = document.querySelector('.likes')
    num = parseInt(likes.innerText)
    num += 1 
    likes.innerText = num
})


/***** Deliverable 3 *****/
const form = document.querySelector('form#new-animal-sighting-form')
// console.log(form)
form.addEventListener('submit', function (event) {
    event.preventDefault() 
    // console.log('Form submitted!!!')

    console.dir(event.target)

    const inputFieldOne = event.target[0].value
    const inputFieldTwo = event.target[1].value
    const inputFieldThree = event.target[2].value
    const inputFieldFour = event.target[3].value
    

    const newAnimalSightingObject = {
        species: inputFieldOne,
        video: inputFieldTwo,
        photo: inputFieldThree,
        description: inputFieldFour,
    }

    // animalSightings.push(newAnimalSightingObject)

    renderAnimalSightingPost(newAnimalSightingObject)
    form.reset()
})
