let navBar = document.querySelector(".navBar");
let baseForNavClose = document.querySelector(".baseForNavClose");
let backBaseNav = document.getElementById("backBaseNav");

let home = document.getElementById("home");

function openNavBar() {
  navBar.classList.add("showNavbar");
  baseForNavClose.classList.add("navCloseAnimate");
}

function navClose() {
  navBar.classList.remove("showNavbar");
  baseForNavClose.classList.remove("navCloseAnimate");
}

const headerFixedOnScroll = () => {
  if (window.scrollY >= 500) {
    home.classList.add("onSrcollCssHome");
    home.classList.remove("home");
    backBaseNav.style.display = "block";
    return;
  } else {
    home.classList.remove("onSrcollCssHome");
    home.classList.add("home");
    backBaseNav.style.display = "none";
  }
};

window.addEventListener("scroll", headerFixedOnScroll);

/* let calcScrollValue = () => {
  let scrollProgress = document.getElementById("scrollProgress");
  let progressValue = document.getElementById("progressValue");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue; */

/* Galllery Section JS */
const gallery = document.querySelectorAll(".gallery .image"),
  previewbox = document.querySelector(".preview-box"),
  subPreviewBox = document.querySelector(".subPreviewBox"),
  previewImg = subPreviewBox.querySelector("img"),
  closeIccon = subPreviewBox.querySelector(".closeIccon");
currentimg = subPreviewBox.querySelector(".current-img");
totalimg = subPreviewBox.querySelector(".total-img");

window.onload = () => {
  for (let i = 0; i < gallery.length; i++) {
    totalimg.textContent = gallery.length;
    let newIndex = i;
    let clickImgIndex;
    gallery[i].onclick = () => {
      clickImgIndex = newIndex;
      function preview() {
        currentimg.textContent = newIndex + 1;
        let selectedImgUrl = gallery[newIndex].querySelector("img").src;
        previewImg.src = selectedImgUrl;
      }

      const prevBtn = document.querySelector(".prev");
      const nextBtn = document.querySelector(".next");

      if (newIndex == 0) {
        prevBtn.style.display = "none";
      }
      if (newIndex >= gallery.length - 1) {
        nextBtn.style.display = "none";
      }

      prevBtn.onclick = () => {
        newIndex--;
        if (newIndex == 0) {
          preview();
          prevBtn.style.display = "none";
        } else {
          preview();
          nextBtn.style.display = "block";
        }
      };

      nextBtn.onclick = () => {
        newIndex++;
        if (newIndex >= gallery.length - 1) {
          preview();
          nextBtn.style.display = "none";
        } else {
          preview();
          prevBtn.style.display = "block";
        }
      };

      preview();
      previewbox.classList.add("show");

      closeIccon.onclick = () => {
        newIndex = clickImgIndex;
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        previewbox.classList.remove("show");
      };
    };
  }
};
