function changeImage() {
    var image =document.getElementById("main-image");
    var windowWidth = window.innerWidth;

    if (windowWidth >= 729) {
        image.src = "./assets/images/image-web-3-desktop.jpg";
    } else {
        image.src = "./assets/images/image-web-3-mobile.jpg"
    }
}

window.addEventListener('resize', changeImage);

changeImage();