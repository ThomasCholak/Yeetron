document.addEventListener('DOMContentLoaded', function () {
    const bouncingImage = document.getElementById('goobs');
    let counterDisplayElem = document.querySelector('.counter-display');

    let i = 0;  // sets the counter

    bouncingImage.addEventListener('click', function () {  // activates animation on click with CSS frames
        bouncingImage.classList.add('bounce');
        i++;  // increases counter

        setTimeout(function () {
            bouncingImage.classList.remove('bounce');  // removes animation
        }, 800);

        updateDisplay();
    });

    function updateDisplay(){
        counterDisplayElem.innerHTML = "Jumps: " + i;  // replaces previous number with jump number
    };
});