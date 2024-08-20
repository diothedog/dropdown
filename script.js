const dropdownBtn = document.querySelector("#dropdownbtn");
const links = document.querySelector(".dropdown-links");

dropdownBtn.addEventListener("click", function() {
    links.classList.toggle("visible");
})