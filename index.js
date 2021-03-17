/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "red"


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
    if (element.style.color === "red") {
        element.style.color = "black"
    } else {
        element.style.color = "red"
    }
    console.log(element)
}


// header.addEventListener('click', function(event){
//     toggleColor(event.target)
// })
// IF header has children, use header > event.target

header.addEventListener('click', function(){
    toggleColor(header)
})
// console.log('click')



/***** Deliverable 2 *****/

const likeButton = document.querySelector('button.like-button')

likeButton.addEventListener('click', function(){

    likes.textContent = `${traveler.likes++} Likes`

    // const likesPtag = document.querySelector('p.likes')
    // const likesPtag = button.previousElementSibling

})

// console.log(likes)

/***** Deliverable 3 *****/

const newSightingForm = document.querySelector('form#new-animal-sighting-form')

newSightingForm.addEventListener('submit', function(event){

    event.preventDefault()
    
    // console.log('Submitted')
    console.dir(event.target)

    const speciesInput = event.target[0].value
    const videoLink = event.target[1].value
    const photoInput = event.target[2].value
    const descriptionInput = event.target[3].value

    const newSightingObject = {

        species: speciesInput,
        link: videoLink,
        photo: photoInput,
        description: descriptionInput,
        id: traveler.animalSightings[traveler.animalSightings.length - 1].id + 1
    }

    // articlesArray.push(newArticleObject)
    renderAnimalSightingPost(newSightingObject)
    newSightingForm.reset()

})