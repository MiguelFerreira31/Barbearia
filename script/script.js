AOS.init();

  // Simulação de carregamento
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("conteudo").style.display = "block";
    }, 1000); // Tempo para o preloader ser visível
  });

//#region swiper home
var swiper = new Swiper(".mySwiper", {
  speed: 1000,
  parallax: true,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});
 //#endregion


 var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination.mySwiper2-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next.mySwiper2-next",
    prevEl: ".swiper-button-prev.mySwiper2-prev",
  },
});


