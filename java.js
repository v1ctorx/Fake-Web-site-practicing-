const page = document.querySelector("body");
const button = document.querySelector("#buttonBtn");

button.addEventListener("click", function () {
    page.classList.toggle("light-mode");
});


const buttond = document.querySelector("#carsButton");
const carsSection = document.querySelector("#cars");

buttond.addEventListener("click", function () {
    carsSection.scrollIntoView({
        behavior: "smooth"
    });
});


const buttonmovie = document.querySelector("#movieButton");
const movieSection = document.querySelector("#documentary");

buttonmovie.addEventListener("click", function () {
    movieSection.scrollIntoView({
        behavior: "smooth"
    });
});


/// Parte do back-end
fetch("https://cars-hub-api.onrender.com/cars")
    .then((response) => {
        return response.json();
    })
    .then((cars) => {

        console.log(cars);

        const container = document.querySelector("#card-container");

        cars.forEach((car) => {

            const card = document.createElement("div");
            card.classList.add("card");

            const image = document.createElement("img");
            image.src = car.image;
            image.alt = `${car.brand} ${car.model}`;

            const content = document.createElement("div");
            content.classList.add("content-card");

            const description = document.createElement("p");
            description.textContent = car.description;

            const button = document.createElement("button");
            button.textContent = "Read more";

            button.addEventListener("click", () => {
            window.location.href = "pagecars.html";
    });

    content.appendChild(description);
    content.appendChild(button);

    card.appendChild(image);
    card.appendChild(content);

    container.appendChild(card);
      });
    });