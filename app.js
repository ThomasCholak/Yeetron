// animating text on the screen

document.addEventListener('DOMContentLoaded', function () {
    if ('ontouchstart' in window || navigator.maxTouchPoints) {  // checks for mobile or laptop device
        yeet_anim_mob(); // Mobile browser
        highlight_mob();
    } else {
        yeet_anim(); // Non-mobile browser
        highlight();
    }
});

// https://www.shecodes.io/athena/73101-how-to-highlight-text-when-cursor-is-on-it
function highlight() {  // code to highlight text

    // About Me button
    aboutMe.addEventListener('mouseenter', () => {
        aboutMe.style.backgroundColor = 'white';
    });

    aboutMe.addEventListener('mouseleave', () => {
        aboutMe.style.backgroundColor = '';
    });

    aboutMe.addEventListener('mouseenter', () => {
        aboutMe.style.color = 'black';
    });

    aboutMe.addEventListener('mouseleave', () => {
        aboutMe.style.color = 'white';
    });

    // Enter the Dungeon button
    enterD.addEventListener('mouseenter', () => {
        enterD.style.backgroundColor = 'white';
    });

    enterD.addEventListener('mouseleave', () => {
        enterD.style.backgroundColor = '';
    });

    enterD.addEventListener('mouseenter', () => {
        enterD.style.color = 'black';
    });

    enterD.addEventListener('mouseleave', () => {
        enterD.style.color = 'white';
    });

    // Games button
    gamesb.addEventListener('mouseenter', () => {
        gamesb.style.backgroundColor = 'white';
    });

    gamesb.addEventListener('mouseleave', () => {
        gamesb.style.backgroundColor = '';
    });

    gamesb.addEventListener('mouseenter', () => {
        gamesb.style.color = 'black';
    });

    gamesb.addEventListener('mouseleave', () => {
        gamesb.style.color = 'white';
    });
}

function highlight_mob() {  // code to highlight text
    
    // About Me button
    aboutMe_mob.addEventListener('touchstart', () => {
        aboutMe_mob.style.backgroundColor = 'white';
    });

    aboutMe_mob.addEventListener('touchend', () => {
        aboutMe_mob.style.backgroundColor = '';
    });

    aboutMe_mob.addEventListener('touchstart', () => {
        aboutMe_mob.style.color = 'black';
    });

    aboutMe_mob.addEventListener('touchend', () => {
        aboutMe_mob.style.color = 'white';
    });

    // Enter the Dungeon button
    enterD_mob.addEventListener('touchstart', () => {
        enterD_mob.style.backgroundColor = 'white';
    });

    enterD_mob.addEventListener('touchend', () => {
        enterD_mob.style.backgroundColor = '';
    });

    enterD_mob.addEventListener('touchstart', () => {
        enterD_mob.style.color = 'black';
    });

    enterD_mob.addEventListener('touchend', () => {
        enterD_mob.style.color = 'white';
    });

    // Games button
    gamesb_mob.addEventListener('touchstart', () => {
        gamesb_mob.style.backgroundColor = 'white';
    });

    gamesb_mob.addEventListener('touchend', () => {
        gamesb_mob.style.backgroundColor = '';
    });

    gamesb_mob.addEventListener('touchstart', () => {
        gamesb_mob.style.color = 'black';
    });

    gamesb_mob.addEventListener('touchend', () => {
        gamesb_mob.style.color = 'white';
    });
}
  
function yeet_anim()  // sets the frames of the animation
{
    var yeet_str1 = "<br>" +
    " _   _   _____   _____   _______   _____    _____    ____   __<br>" +
    "| |_| | |  ___| |  ___| |       | |     \\  |     |  |    \\ |  |<br>" +
    "|_   _| | |___  | |___   ￣| |￣  | |￣| | | |￣| |  |     \\|  |<br>" +
    "  | |   |  ___| |  ___|    | |    |  ￣ /  | | | |  |         |<br>" +
    "  | |   | |___  | |___     | |    | |\\ \\   | |_| |  |  |\\     |<br>" +
    "  | |   |     | |     |    | |    | | \\ \\  |     |  |  | \\    |<br>" +
    "  ￣     ￣￣￣   ￣￣￣    ￣      ￣   ￣   ￣￣￣   ￣￣  ￣￣";

    var yeet_str2 = "<br>" +
    "&nbsp; _   _   _____   _____   _______   _____    _____    ____   __<br>" +
    "&nbsp;| |_| | |  ___| |  ___| |       | |     \\  |     |  |    \\ |  |<br>" +
    "&nbsp;|_   _| | |___  | |___   ￣| |￣  | |￣| | | |￣| |  |     \\|  |<br>" +
    "&nbsp;  | |   |  ___| |  ___|    | |    |  ￣ /  | | | |  |         |<br>" +
    "&nbsp;  | |   | |___  | |___     | |    | |\\ \\   | |_| |  |  |\\     |<br>" +
    "&nbsp;  | |   |     | |     |    | |    | | \\ \\  |     |  |  | \\    |<br>" +
    "&nbsp;  ￣     ￣￣￣   ￣￣￣    ￣      ￣   ￣   ￣￣￣   ￣￣  ￣￣";

    var currentIndex = 0;
    var texts = [yeet_str1, yeet_str2];
  
    setInterval(function () {
      displayText(texts[currentIndex]);
      currentIndex = (currentIndex + 1) % texts.length;
    }, 1000);
}

function yeet_anim_mob()  // sets the frames of anim (mobile)
{
    var yeet_str1 = "<br>" +
    " _   _   _____   _____   _______  <br>" +
    "| |_| | |  ___| |  ___| |       | <br>" +
    "|_   _| | |___  | |___   ￣| |￣ <br>" +
    "  | |   |  ___| |  ___|    | |    <br>" +
    "  | |   | |___  | |___     | |    <br>" +
    "  | |   |     | |     |    | |   <br>" +
    "  ￣     ￣￣￣   ￣￣￣     ￣    ";

    var yeet_str2 = "<br>" +
    "&nbsp; _   _   _____   _____   _______  <br>" +
    "&nbsp;| |_| | |  ___| |  ___| |       | <br>" +
    "&nbsp;|_   _| | |___  | |___   ￣| |￣  <br>" +
    "&nbsp;  | |   |  ___| |  ___|    | |    <br>" +
    "&nbsp;  | |   | |___  | |___     | |    <br>" +
    "&nbsp;  | |   |     | |     |    | |    <br>" +
    "&nbsp;  ￣     ￣￣￣   ￣￣￣     ￣     ";

    var currentIndex = 0;
    var texts = [yeet_str1, yeet_str2];
  
    setInterval(function () {
      displayText_mob(texts[currentIndex]);
      currentIndex = (currentIndex + 1) % texts.length;
    }, 1000);
}

function displayText(text) {  // replaces previous string with string of current index
    var console_str = '<pre>' + text + '</pre>';
    desktopHeader.innerHTML = console_str;
}

function displayText_mob(text) {  // function for mobile
    var console_str = '<pre>' + text + '</pre>';
    mobileHeader.innerHTML = console_str;
}
