const testinomials = [
  {
    name: "Jessica R.",
    image: "../assets/StImg1.webp",
    testinomial: `"I cannot express how happy we are with the photos from our wedding day! Every moment was captured beautifully, and the attention to detail was incredible. Looking through the pictures feels like reliving the day all over again. Highly recommend!"`,
  },
  {
    name: "Daniel T.",
    image: "../assets/danial.jpg",
    testinomial: `"I hired them to cover my 30th birthday party, and the results were phenomenal. From candid shots of my friends laughing to posed group photos, every picture told a story. These are memories I will cherish forever!"`,
  },
  {
    name: "Emily and Mark L.",
    image: "../assets/StImg4.webp",
    testinomial: `"We wanted a unique holiday card this year, and the photographer exceeded our expectations. The lighting, the background, and the overall vibe were just perfect. We received so many compliments on the photos. Thank you for your creativity!"`,
  },
  {
    name: "Michael P., Event Coordinator",
    image: "../assets/StImg2.webp",
    testinomial: `"Our company’s annual gala was captured flawlessly. From the vibrant décor to the happy faces of our guests, every photo turned out amazing. It’s not easy to make a corporate event look so magical, but you nailed it!"`,
  },
];

let i = 0;

let j = testinomials.length;

let testinomialContainer = document.getElementById("review");
let nextBtn = document.getElementById("reviewnextBtn");
let prevBtn = document.getElementById("reviewprevBtn");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimnial();
});

prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimnial();
});

let displayTestimnial = () => {
  testinomialContainer.innerHTML = `
      <div class="peopleImg"> 
      <img src=${testinomials[i].image}>
      </div>
      <span>${testinomials[i].name}</span>
      <p>${testinomials[i].testinomial}</p>
        `;
};

displayTestimnial();
