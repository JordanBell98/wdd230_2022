document.getElementById('last-modify').innerHTML = (document.lastModified);

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

const visitDate = localStorage.setItem("visitDate", visitDate);
const todaysDate = Date.now();
localStorage.setItem("visitDate", todaysDate);
const comparedDate = todaysDate - visitDate;

function days() {
    if (visitDate = null) {
        document.querySelector("#lastVisit").innerText = "This is your first visit";
    } else {
        document.querySelector("lastVisit").innerText = comparedDate;
    }
}

