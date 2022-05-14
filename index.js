const cover = document.querySelector(".top");
const shadowOfCover = document.querySelector(".shadow");
const wholeGift = document.querySelector(".gift");
const eris = document.querySelector(".eris");
const erisImg = document.querySelector(".eris-img");
const krem = document.querySelector(".krem");
const kremImg = document.querySelector(".krem-img");
const photos = document.querySelector(".photos");

let statusOfGift = "closed";
function openGift() {
  if (statusOfGift === "closed") {
    cover.style.transform = "rotate(120deg)";
    shadowOfCover.style.display = "none";
    statusOfGift = "open";
    eris.style.fontSize = "1.1rem";
    eris.style.bottom = "70vh";
    eris.style.right = "40%";
    erisImg.style.width = "30vw";
    setTimeout(() => {
      krem.style.fontSize = "1.1rem";
      krem.style.bottom = "40vh";
      kremImg.style.width = "30vw";
    }, 1000);
  } else if (statusOfGift === "open") {
    statusOfGift = "closed";
    kremImg.style.width = "2vw";
    krem.style.fontSize = "0.2rem";
    krem.style.bottom = "50px";
    setTimeout(() => {
      eris.style.fontSize = "0.2rem";
      eris.style.bottom = "50px";
      erisImg.style.width = "2vw";
      eris.style.right = "48vw";
      setTimeout(() => {
        cover.style.transform = "rotate(0deg)";
      }, 500);
      setTimeout(() => {
        shadowOfCover.style.display = "flex";
      }, 1400);
    }, 500);
  }
}

wholeGift.addEventListener("click", openGift);
