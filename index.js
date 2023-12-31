

let themeButton = document.getElementById("theme-button");
// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {

    // Write your code to manipulate the DOM here
  
  document.body.classList.toggle("dark-mode");


  
  

}
themeButton.addEventListener("click", toggleDarkMode);

  let signNowButton = document.getElementById("sign-now-button");
  let count = 1;
const addSignature = (person)=>{
 
 
  
  const signatureElement = document.createElement("p");
  signatureElement.textContent = `🖊️ ${person.name} from ${person.home} supports this cause.`;
  let signaturesSection = document.getElementById('signatures');
  signaturesSection.appendChild(signatureElement);

  const oldCounter = document.getElementById('counter');
  
  if (oldCounter){
    oldCounter.remove();
  }
  console.log(oldCounter);
  
  count = count + 1;
  
  const countElement = document.createElement("p");
  countElement.id = "counter";
  countElement.textContent = "🖊️ " + count + " people have signed this petition and support this cause." 
  console.log(countElement);
  signaturesSection.appendChild(countElement);
   
  
  
}



// TODO: Complete validation form

const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;
  let person = {
    name: petitionInputs[0].value,
    home: petitionInputs[1].value,
    email: petitionInputs[2].value
  }
  // TODO: Loop through all inputs
  for (let i=0; i < petitionInputs.length; i++){
    if (petitionInputs[i].value.length < 2){
      petitionInputs[i].classList.add('error');
      containsErrors = true;
      
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }
    const email = document.getElementById('email');
    if (!email.value.includes('.com') && !email.value.includes('.org')){
      containsErrors = true;
      email.classList.add('error');
    } else {
      email.classList.remove('error');
    }
    if (containsErrors == false){
      addSignature(person);
      toggleModal(person);
      for (let j=0; j < petitionInputs.length; j++){
        petitionInputs[j].value = "";
        containsErrors = false;
      }
    
  }

  // TODO: Validate the value of each input



  // TODO: Call addSignature() and clear fields if no errors

}

signNowButton.addEventListener('click', validateForm);


let animation = {
  revealDistance : 150,
  initalOpacity : 0,
  transitionDelay : 0,
  transitionDuration : "2s",
  transitionProperty : "all",
  transitionTimingFunction : "ease"
}
let revealableContainers = document.querySelectorAll(".revealable");
const reveal = () =>{
  for (i=0; i< revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance){
      revealableContainers[i].classList.add("active");
      
    }
    else{
      revealableContainers[i].classList.remove("active");
    }
  }
}
window.addEventListener('scroll', reveal);


let scaleFactor = 1;
let modalImage = document.getElementById("modalImg");

const scaleImage = () =>{
  if(scaleFactor == 1){
    scaleFactor = 0.8;
  }
  else{
    scaleFactor = 1;
  }
  modalImage.style.transform = `scale(${scaleFactor})`;
}
const toggleModal = (person)=>{
  let modal = document.getElementById("thanks-modal");
  let modalContent = document.getElementById("thanks-modal-content")
  modal.style.display = "flex";
  modalContent.textContent = `Thank you ${person.name} from ${person.home} for signing this petition!!!`

  let intervalID = setInterval(() => {
    scaleImage();
  }, 500);
  
  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalID);
  }, 4000);

}

let closeButton = document.getElementById("close-modal-button");

const removeModal = () => {
  const modal = document.getElementById("thanks-modal");
  modal.style.display= "none";
}
closeButton.addEventListener("click", removeModal);


let reduceMotionButton = document.getElementById("motion-reducer");
const reduceMotion = () => {
  let animation ={
      opacity : 0.8,
      transitionDelay : 0,
      animationDistance: "0px",
      transitionDuration : "none",
      transitionProperty : "none",
      transitionTimingFunction : "none"
  }
  for (i=0; i< revealableContainers.length; i++) {
    revealableContainers[i].style.opacity = animation.opacity;
    revealableContainers[i].style.transform = `translateY(${animation.animationDistance})`;
    revealableContainers[i].style.transition = `all ${animation.transitionDelay} ${animation.transitionDelay} ${animation.transitionDuration} ${animation.transitionProperty} ${animation.transitionTimingFunction}`; 
    
  }
}
reduceMotionButton.addEventListener("click", reduceMotion);


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}