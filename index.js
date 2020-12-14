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

// header.addEventListener('click', toggleColor())

function toggleColor() {
    if (header.style.color === "green") {
        header.style.color = "crimson"
    } else {
        header.style.color = "green"
    }
}

header.addEventListener("click", function(){
    toggleColor(header)
})

// header.addEventListener('click', toggleColor => {
//     if (header.style.color = "green"){
//         header.style.color = "crimson";
//     } else {
//         header.style.color = "green";
//     }

// })

/***** Deliverable 2 *****/

const likeButton = document.querySelector(".like-button");
console.log("Here is the like button", likeButton);

const likesnum = document.querySelector(".likes");

likeButton.addEventListener('click', event =>{
    traveler.likes++;
    // console.log(traveler.likes);
    likesnum.textContent = `${traveler.likes} Likes`
})


/***** Deliverable 3 *****/

const newAnimal = document.querySelector("#new-animal-sighting-form");
console.log(newAnimal);

newAnimal.addEventListener("submit", function(evt){
    evt.preventDefault();
    console.log("Form submission done")

    let theSpecies = evt.target.species.value
    let thePhotoURL = evt.target.photo.value
    let theVideoURL = evt.target.link.value
    let theDescription = evt.target.description.value

    turnAnimalToHTML(theSpecies, thePhotoURL, theVideoURL, theDescription);

    evt.target.reset();

})

function turnAnimalToHTML(theSpecies, thePhotoURL, theVideoURL, theDescription){

    const li = document.createElement("li")
    // li.dataset.id = animalObject.id

    const p = document.createElement("p")
    p.textContent = theDescription

    const img = document.createElement("img")
    img.src = thePhotoURL
    img.alt = theSpecies

    const a = document.createElement("a")
    a.href = theVideoURL
    a.target = "_blank"
    a.textContent = `Here's a video about the ${theSpecies} species!`

    li.append(p, img, a)

    const animalsUl = document.querySelector("#animals")
    animalsUl.append(li)

}