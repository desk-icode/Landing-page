const slides = document.querySelectorAll(".testimonial-card");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index) {

```
slides.forEach(slide =>
    slide.classList.remove("active")
);

dots.forEach(dot =>
    dot.classList.remove("active")
);

slides[index].classList.add("active");
dots[index].classList.add("active");

currentSlide = index;
```

}

dots.forEach((dot, index) => {
dot.addEventListener("click", () => {
showSlide(index);
});
});

setInterval(() => {

```
currentSlide++;

if (currentSlide >= slides.length) {
    currentSlide = 0;
}

showSlide(currentSlide);
```

}, 4000);
