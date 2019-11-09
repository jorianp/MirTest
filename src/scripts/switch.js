const ios = document.querySelector('.intro__button-ios');
const android = document.querySelector('.intro__button-android');
const iphone = document.querySelector('.intro__ios');
const samsung = document.querySelector('.intro__android');

ios.addEventListener('click', () => {
    ios.classList.add('button-checked');
    android.classList.remove('button-checked');

    iphone.classList.add('intro__ios-chk');
    samsung.classList.remove('intro__android-dis');
});

android.addEventListener('click', () => {
    android.classList.add('button-checked');
    ios.classList.remove('button-checked');

    iphone.classList.remove('intro__ios-chk');
    samsung.classList.add('intro__android-dis');
})

