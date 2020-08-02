const isScrolledIntoView = (el) => {
    let rect = el.getBoundingClientRect();
    let elemTop = rect.top;
    let elemBottom = rect.bottom;

    // Partially visible elements return true:
    isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

setInterval(() => {
    for (let image of document.getElementsByClassName("servicePicture")) {
        if (!image.h) {
            image.h = 17.5;
        }

        if (isScrolledIntoView(image)) {
            image.h *= 0.95;
        } else {
            image.h = 17.5;
        }

        if (image.h < 0) {
            image.h = 0;
        }

        image.style = `background-position-y: ${image.h}vw;`
    }
}, 10)