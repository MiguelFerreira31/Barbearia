
//#region navbar 
function toggleNavbar() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

//#endregion





//#region swiper home

const progressCircle = document.querySelector(".autoplay-progress svg");
 const progressContent = document.querySelector(".autoplay-progress span");

 const swiperEl = document.querySelector("swiper-container");
 swiperEl.addEventListener("autoplaytimeleft", (e) => {
   const [swiper, time, progress] = e.detail;
   progressCircle.style.setProperty("--progress", 1 - progress);
   progressContent.textContent = `${Math.ceil(time / 1000)}s`;
   
 });


 //#endregion


