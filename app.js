// animating text on the screen

document.addEventListener('DOMContentLoaded', function () {
    if ('ontouchstart' in window || navigator.maxTouchPoints) {  // checks for mobile or laptop device
        yeet_anim_mob(); // Mobile browser
    } else {
        yeet_anim(); // Non-mobile browser
        tabs_str();
        tabs_str2();
        highlight();
    }
});

// https://www.shecodes.io/athena/73101-how-to-highlight-text-when-cursor-is-on-it
function highlight() {  // code to highlight text
    const textToHighlight = document.getElementById('aboutMe');

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

function tabs_str() {  //animation "_" around the tab keys
    let res_str = "";
    let i = 0;

    var intervalId = setInterval(function() {
        res_str += "-";

        desktopIndex.innerHTML = res_str;  // top-horizontal lines
        desktopIndex2.innerHTML = res_str; // bottom-horizontal line

        i++;
        if (i === 50) {  // exits once interval equals 50
            clearInterval(intervalId);  
        }
    }, 50);
}


function tabs_str2() {  // function to aniumate vertical "|" bars
    let res_str = "";
    let i = 0;
    var intervalId = setInterval(function() {
        res_str += "|<br>";

        desktopIndex3.innerHTML = res_str; // left-most vertical line
        desktopIndex4.innerHTML = res_str;
        desktopIndex5.innerHTML = res_str;
        desktopIndex6.innerHTML = res_str;

        i++;
        if (i === 3) {
            clearInterval(intervalId);  
        }
    }, 1000);
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
