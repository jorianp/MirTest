import Glide from "@glidejs/glide";
import "../../node_modules/@glidejs/glide/dist/css/glide.core.css";
import "../../node_modules/@glidejs/glide/dist/css/glide.theme.css";


const glide = new Glide('.glide', {
    focusAt: "center",
    startAt: 3,
    perView: 7,
    peek: 0,
});

glide.mount();

const slides = document.querySelectorAll('.glide__slide');

glide.on('run.after', () => {
    slides.forEach((item) => {
        const image = item.querySelector('.control__screen')
        if (item.classList.contains('glide__slide--active')) {
            image.classList.add('control__screen--active');
            item.classList.add('control__slide-li--active');
            // item.setAttribute('style', 'width: 322px;');
        }
        else {
            image.classList.remove('control__screen--active');
            item.classList.remove('control__slide-li--active');
            // item.setAttribute('style', 'width: 262px;');
        }
    });
})