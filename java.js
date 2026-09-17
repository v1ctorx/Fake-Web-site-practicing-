const page = document.querySelector("body");
const button = document.querySelector("#buttonBtn");

button.addEventListener("click", function () {
    page.classList.toggle("light-mode");
});


const buttond = document.querySelector("#carsButton");
const carsSection = document.querySelector("#cars");

buttond.addEventListener("click", function(){

    carsSection.scrollIntoView({
        behavior: "smooth"
    });
});

const buttonb = document.querySelector("#movieB");
const movie = document.querySelector("#movieS");

buttonb.addEventListener("click", function(){

    carsSection.scrollIntoView({
        behavior: "smooth"
    });
});