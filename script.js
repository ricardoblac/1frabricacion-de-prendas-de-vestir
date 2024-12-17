const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference
}
function closeImg(){
    fulImgBox.style.display = "none";
}


const carousel = document.getElementById("carousel");
const slides = document.querySelectorAll(".carousel-slide");

let currentIndex = 0;
let slideWidth = slides[0].clientWidth;
window.addEventListener("resize", () => {
    slideWidth = slides[0].clientWidth; 
});


function advanceCarousel() {
    currentIndex++;
    if (currentIndex > slides.length - 4) {
        currentIndex = 0; 
    }
    const offset = -slideWidth * currentIndex;
    carousel.style.transform = `translateX(${offset}px)`;
}

// Intervalo para avanzar cada 2.5 segundos
setInterval(advanceCarousel, 2500);





