/***** Deliverable 1 *****/


 
header.style.color = "green"
/***** Deliverable 2 *****/
 




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

let button = document.getElementById('header');  
let color = button.style.color;
button.addEventListener('click', function ( ){
    color = button.style.color = color === 'black' ? 'red' : 'black';
});


/***** Deliverable 2 *****/
let heart = document.querySelector(".like-button")
let inc = document.querySelector(".likes")
heart.addEventListener("click", function ( ){
    let numlikes = parseInt(inc.innerHTML) +1
    inc.textContent = `${numlikes} Likes`
});

/***** Deliverable 3 *****/
let form = document.querySelector("#new-animal-sighting-form")

form.addEventListener('submit', event =>{
    event.preventDefault( )
    
    console.log("Form submission has happened")
        species = document.querySelector("#animal-species")
        const li = document.createElement("li")
        const p = document.createElement("p")
        input = document.querySelector("#sighting-description")
        p.textContent = input.value 
    
        const img = document.createElement("img")
        img_input = document.querySelector("#animal-photo")
        img.textContent = img_input.value 
        img.src = img_input.value 
        img.alt =document.querySelector("#animal-species")


        const a = document.createElement("a")
        vid_input = document.querySelector("#animal-link")
        vid_input.textContent = vid_input.value 
        vid_input.href = vid_input.value 
        vid_input.target = "_blank"
    // wasnt able to show the video, could you help me understand how to? g
    
        li.append(p, img, a)
    
        const animalsUl = document.querySelector("#animals")
        animalsUl.append(li)
})
