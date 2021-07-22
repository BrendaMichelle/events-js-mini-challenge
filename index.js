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
    if (element.style.color === "red") {
        element.style.color = "black"
    } else {
        element.style.color = "red"
    }
}

header.style.color = "black"
header.addEventListener("click", ()=>toggleColor(header))
/***** Deliverable 2 *****/
let likeCount = 1000
 const likeButton= document.querySelector(".like-button")
 function addLike(){
     likeCount++
     let likeDisplay=document.querySelector(".likes")
     likeDisplay.innerHTML=likeCount.toString() + " Likes"
 }
 likeButton.addEventListener("click", addLike)

/***** Deliverable 3 *****/
form=document.querySelector("form#new-animal-sighting-form")

function addNewSighting(event){
    event.preventDefault()
    object={}
    object["species"]=form.species.value
    object["photo"]=form.photo.value
    object["link"]=form.link.value
    object["description"]=form.description.value
    object["id"]=document.querySelector("li").length+1
    renderAnimalSightingPost(object)
}

form.addEventListener("submit", addNewSighting)