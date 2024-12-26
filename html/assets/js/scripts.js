function openNav() {
    document.getElementsByClassName("side-nav")[0].style.visibility = "visible";
    document.getElementsByClassName("side-nav")[0].classList.add("animate__fadeInRight");
    document.getElementsByClassName("side-nav")[0].classList.remove("animate__fadeOutRight");
}

function closeNav() {
    document.getElementsByClassName("side-nav")[0].classList.remove("animate__fadeInRight");
    document.getElementsByClassName("side-nav")[0].classList.add("animate__fadeOutRight");
}

function copyEmail() {
    const tmp_textAread = document.createElement('textarea');

    tmp_textAread.value = "contact@voinearadu.com";

    // Make it not visible to the user
    tmp_textAread.setAttribute('readonly', '');
    tmp_textAread.style.position = 'absolute';
    tmp_textAread.style.left = '-9999px';


    // Add the element to the DOM
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');

    // Clear the element from the DOM
    document.body.removeChild(el);
}