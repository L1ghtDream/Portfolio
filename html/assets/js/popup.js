function openPopup(executor) {
    var popupTemplate = document.getElementById("popup-template");

    let popup = popupTemplate.cloneNode(true);
    popup.id = "popup";
    popupTemplate.parentNode.appendChild(popup);

    executor(popup);

    // Animate
    popup.getElementsByClassName("content-view")[0].classList.add("elementToFadeIn");
    setTimeout(() => {
        popup.getElementsByClassName("content-view")[0].classList.remove("elementToFadeIn");
    }, 250);

    popup.hidden=false;
}

function closePopup() {
    var popup = document.getElementById("popup");

    popup.getElementsByClassName("content-view")[0].classList.add("elementToFadeOut");
    setTimeout(() => {
        popup.getElementsByClassName("content-view")[0].classList.remove("elementToFadeOut");
        popup.remove();
    }, 250);

}
