const isScrolledIntoView = (el) => {
    let rect = el.getBoundingClientRect();
    let elemTop = rect.top;
    let elemBottom = rect.bottom;

    // Partially visible elements return true:
    isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

setInterval(() => {
    for (let image of document.getElementsByClassName("aboutImage")) {
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

onScroll();

function process (name, title) {
    document.getElementById('process').className = name;

    for(let title of document.getElementsByClassName('processTitle')) {
        title.style.color = 'grey';
    }

    document.getElementById(title).style.color = 'white';
}

function processRestore () {
    for(let title of document.getElementsByClassName('processTitle')) {
        title.style.color = 'white';
    }
    
    document.getElementById('process').className = '';
}

// stopResponsiveTransition();

// function stopResponsiveTransition() {
//     const classes = document.body.classList;
//     let timer = null;
//     window.addEventListener('resize', function () {
//         if (timer) {
//             clearTimeout(timer);
//             timer = null;
//         } else {
//             classes.add('stop-transition');
//         }
//         timer = setTimeout(() => {
//             classes.remove('stop-transition');
//             timer = null;
//         }, 100);
//     });
// }