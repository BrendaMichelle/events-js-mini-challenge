/***** Deliverable 1 *****/
const header = document.querySelector("h1#header")
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
function toggleColor(element) {
    if (element.style.color === "green") {
        element.style.color = "black"
    } else {
        element.style.color = "green"
    }
}

header.addEventListener('click', function(){
 if(header.style.color === 'blue'){
    header.style.color = 'black'
    }  
 else {
     header.style.color = 'blue'
    }  
})

/***** Deliverable 2 *****/

const buttons = document.querySelector('button.like-button')
buttons.addEventListener('click', function(){
    //console.log('clicked!!!')
    //const likes = document.querySelector('p.likes')
    //const likes = button.previousElementSibling
    // const currLikes = parseInt(likes.textContent)
    // likes.textContent = `${currLikes + 1} Likes`
    likes.textContent = `${traveler.likes++} Likes`
})

//header.addEventListener('click', function(event){
//toggleColor(event.target)
//})
/***** Deliverable 3 *****/

//const form = document.querySelector('new-animal-sighting-form')

// form.addEventListener('submit', function (event) {

// event.preventDefault()
// console.log('Form submitted!')

// console.dir(event.target)

// const inputFieldOne = event.target[0]
// const inputFieldTwo = event.target[1]
// const inputFieldThree = event.target[2]
// const inputFieldFour = event.target[3]

// const newAnimalSighting = {
//     Species: inputFieldOne,
//     Photo: inputFieldTwo,
//     link: inputFieldThree,
//     Description: inputFieldFour,
//     id: animalsArray[animalsArray.length - 1].id + 1
//     }

//     animalsSighting.push(newAnimalsObject)

//     renderOnePost(newAnimalsObject)
//     form.reset()
// })

const newSightingForm = document.querySelector('form#new-animal-sighting-form')

newSightingForm.addEventListener('submit', function(event){
    event.preventDefault()
    // console.dir(event.target)

    // console.log(event.target)

    const species = event.target[0].value
    const video = event.target[1].value
    const photo = event.target[2].value
    const description = event.target[3].value

    const lastIndex = traveler.animalSightings.length - 1
    const newSightingObject = { 
        id: traveler.animalSightings[lastIndex].id + 1,
        travelerId: 1, // hard coding in travelerId
        species: species,
        photo: photo,
        link: video,
        description: description
    }

    renderAnimalSightingPost(newSightingObject)
    
    newSightingForm.reset()
})