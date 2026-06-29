const loading = document.getElementById("loading");
const main = document.getElementById("main");
const birthdayPage = document.getElementById("birthdayPage");
const openBtn = document.getElementById("openBtn");
const music = document.getElementById("music");
const slide = document.getElementById("slide");
const typing = document.getElementById("typing");

// Loading
setTimeout(() => {
    loading.style.display = "none";
    main.classList.remove("hidden");
}, 3000);

// Daftar foto
const photos = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg"
];

let current = 0;

// Ganti foto
function changePhoto() {
    current++;
    if (current >= photos.length) {
        current = 0;
    }
    slide.src = photos[current];
}

// Tombol OPEN
openBtn.addEventListener("click", function () {

    main.classList.add("hidden");
    birthdayPage.classList.remove("hidden");

    // Mulai slideshow
    setInterval(changePhoto, 3000);

    // Putar musik
    music.currentTime = 
