document.addEventListener("DOMContentLoaded", function () {

    let index = 0;

    const slides = document.querySelector(".slides");
    const imagens = document.querySelectorAll(".slides img");
    const container = document.querySelector(".carrossel");

    function atualizarCarrossel() {
        const larguraImagem = imagens[0].offsetWidth;
        slides.style.transform = `translateX(-${index * larguraImagem}px)`;
    }

    window.avancar = function () {

        const larguraImagem = imagens[0].offsetWidth;
        const larguraTotal = slides.scrollWidth;
        const larguraContainer = container.offsetWidth;

        const maxIndex = Math.floor((larguraTotal - larguraContainer) / larguraImagem);

        if (index < maxIndex) {
            index++;
            atualizarCarrossel();
        }
    }

    window.voltar = function () {
        if (index > 0) {
            index--;
            atualizarCarrossel();
        }
    }

});
