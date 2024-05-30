const textAnimation = document.querySelector('.text-animation');
const letters = textAnimation.querySelectorAll('span');

letters.forEach((letter, index) => {
    letter.style.animation = `fadeIn 0.5s ease ${index * 0.4}s forwards`;
});