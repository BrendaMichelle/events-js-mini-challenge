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

const profile_H2 = document.querySelector("#profile h2")
profile_H2.textContent = traveler.name

const profile_Em = document.querySelector("#profile em")
profile_Em.textContent = traveler.nickname

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
const element = toggleColor(document.querySelector("h1#header"))

function toggleColor(element) {
    element.addEventListener('click', function(){
    if (element.style.color === "green") {
        element.style.color = "black"
    } else {
        element.style.color = "red"
    }})}


/***** Deliverable 2 *****/
const like = document.querySelector("button.like-button")
like.addEventListener('click', function(){
    traveler.likes+=1
    likes.textContent =`${traveler.likes} Likes`
})

/***** Deliverable 3 *****/
const form = document.querySelector('form#new-animal-sighting-form')
    form.addEventListener('submit', function(event){
        event.preventDefault()
        const species= event.target[0].value
        const video=event.target.link.value
        const photo= event.target.photo.value
        const description=event.target.description.value

        const array= traveler.animalSightings
        const newid =array[array.length -1].id +1
        const animalObj={
            species: species,
            photo: photo,
            link: video,
            description: description,
            id: newid,
            travelerId: 1
        }
        array.push(animalObj)
        renderAnimalSightingPost(animalObj)
        form.reset()
    })
