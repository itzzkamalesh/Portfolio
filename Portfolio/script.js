/* SECTION SCROLL ANIMATION */

const sections = document.querySelectorAll("section");

function revealSections(){

sections.forEach(section => {

const position = section.getBoundingClientRect().top;
const screenHeight = window.innerHeight;

if(position < screenHeight - 100){
section.classList.add("show");
}

});

}

window.addEventListener("scroll", revealSections);


/* CERTIFICATE MODAL */

function openModal(img){

document.getElementById("imageModal").style.display="block";
document.getElementById("modalImg").src=img.src;

}

function closeModal(){

document.getElementById("imageModal").style.display="none";

}