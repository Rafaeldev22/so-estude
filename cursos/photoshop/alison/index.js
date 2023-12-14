const abrir = document.querySelector("#abrir-modal");
const fechar = document.querySelector("#fechar");
const fade = document.querySelector("#fade");
const modal = document.querySelector("#card-modal");
const iframe = document.querySelector(".game")



fechar.addEventListener("click", () => {

    fecharVideo();
    toggleModal();


});

function toggleModal() {
    fade.classList.toggle("hide");
    modal.classList.toggle("hide");


}

[abrir, fechar, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});

function fabrir() {

    toggleModal()

}

function fecharVideo(){
    let iframe = document.querySelector(".game");

    var iframeSrc = iframe.src;
    iframe.src = iframeSrc;
}

function disableFullScreenOnMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        iframe.removeAttribute('allowfullscreen');
    }
}

// Chamar a função de desabilitar fullscreen no carregamento da página
disableFullScreenOnMobile();

