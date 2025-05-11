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

const scrollBtn = document.getElementById("scrollToTopBtn");

function atualizarBotaoProgresso() {
  const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollAtual = document.documentElement.scrollTop;
  const porcentagem = Math.round((scrollAtual / scrollTotal) * 100);

  scrollBtn.style.background = `conic-gradient(#252525 ${porcentagem}%, #e0e0e0 ${porcentagem}%)`;
  scrollBtn.style.display = scrollAtual > 100 ? "flex" : "none";
}

window.voltarAoTopo = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.addEventListener("scroll", atualizarBotaoProgresso);
