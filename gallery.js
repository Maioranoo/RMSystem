document.addEventListener("DOMContentLoaded", function () {

    const lightbox = document.getElementById("lightbox");
    const track = document.querySelector(".photo-marquee-track");
    if (!lightbox || !track) return;

    const lightboxImg = lightbox.querySelector(".lightbox-img");
    const closeBtn = lightbox.querySelector(".lightbox-close");

    function openLightbox(img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || "Foto do projeto";
        lightbox.hidden = false;
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        lightbox.hidden = true;
        lightboxImg.src = "";
        document.body.style.overflow = "";
    }

    track.addEventListener("click", function (event) {
        const img = event.target.closest("img");
        if (img) openLightbox(img);
    });

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) closeLightbox();
    });

    closeBtn.addEventListener("click", closeLightbox);

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
    });

});
