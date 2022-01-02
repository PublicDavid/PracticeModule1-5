const slideshowImage = ['1.jpg', '2.jpg', '3.jpg'];
const totalImages = slideshowImage.length;
let currentImage = 0;

let pagerElements;

const pager = document.querySelector('#pager');

const slideshowImageDisplay = document.querySelector('#spotlight-slideshow-image');

let timerId = 0;

(function init() {
    slideshowImageDisplay.src = `./images/${slideshowImage[0]}`;

    let pagerBullets = "";
    for (let i = 0; i < totalImages; i++) {
        pagerBullets += `<span class="pager-element" data-pager="${i}">&bull;</span>`;
    }

    pager.innerHTML = pagerBullets;

    pagerElements = document.querySelectorAll('.pager-element');
    pagerElements[0].classList.add('pager-active');

})();


timerId = setInterval(playSlideshow, 5000);

function playSlideshow() {
    clearInterval(timerId);
    const previousImage = currentImage;
    if (currentImage === totalImages - 1) {
        currentImage = 0;
    } else {
        currentImage++;
    }
    changeImage(previousImage, currentImage);
}

function changeImage (previousImage, currentImage) {
    pagerElements[previousImage].classList.remove('pager-active');
    slideshowImageDisplay.src = `./images/${slideshowImage[currentImage]}`;
    pagerElements[currentImage].classList.add('pager-active');
    timerId = setInterval(playSlideshow, 5000);
}

document.addEventListener('click', function(e) {
    console.log(e.target.dataset.pager);
    const previousImage = currentImage;
    currentImage = parseInt(e.target.dataset.pager);
    clearInterval(timerId);
    changeImage(previousImage, currentImage);
})