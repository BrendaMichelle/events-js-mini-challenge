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
function renderAnimalSightingPost(animalObject) {
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


header.addEventListener('click', () => {
  if (header.style.color === "red") {
    header.style.color = "black";
  } else {
    header.style.color = "red";
  }
});


/***** Deliverable 2 *****/
const likeButton = document.querySelector('.like-button')
let likesDisplay = document.querySelector('.likes')

likeButton.addEventListener('click', () => {
  traveler.likes++;

  likesDisplay.textContent = `${traveler.likes} Likes`;
});


/***** Deliverable 3 *****/
const animalSightingForm = document.querySelector('form#new-animal-sighting-form')
animalSightingForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const speciesInput = event.target.species.value;
  const linkInput = event.target.link.value;
  const photoInput = event.target.photo.value;
  const descriptionInput = event.target.descriptionvalue;

  const post = {
    species: speciesInput,
    link: linkInput,
    photo: photoInput,
    description: descriptionInput
  };

  renderAnimalSightingPost(post);

  event.target.reset();
}); 