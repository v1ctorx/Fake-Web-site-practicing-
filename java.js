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

const buttonmovie = document.querySelector("#movieButton");
const movieSection = document.querySelector("#documentary");

buttonmovie.addEventListener("click", function(){

    movieSection.scrollIntoView({
        behavior: "smooth"
    });
});
