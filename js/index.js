const slider = document.querySelector(".image-container");
const images = document.querySelectorAll(".image-container img");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;

function updateSlider() {
    slider.style.transform = `translateX(-${index * 500}px)`; 
    slider.style.transition = "0.5s";
}

nextBtn.addEventListener("click", () => {
    index++;
    if (index >= images.length) index = 0;
    updateSlider();
});

prevBtn.addEventListener("click", () => {
    index--;
    if (index < 0) index = images.length - 1;
    updateSlider();
});

// Automatic Slide 

setInterval(() => {
    index++;
    if (index >= images.length) index = 0;
    updateSlider();
}, 3000);  // 3000ms = 3 seconds

