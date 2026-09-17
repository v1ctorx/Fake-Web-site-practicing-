const page = document.querySelector("body");
const button = document.querySelector("#buttonBtn");

button.addEventListener("click", function () {
    page.classList.toggle("light-mode");
});
