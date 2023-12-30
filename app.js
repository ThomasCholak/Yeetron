document.addEventListener('DOMContentLoaded', function () {
    if (('ontouchstart' in window || navigator.maxTouchPoints) && window.innerWidth <= 768) {  // fix for laptops with touch features
        yeet_anim_mob(); // Mobile browser
    } else {
        yeet_anim(); // Non-mobile browser
    }
});
  
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

function yeet_anim_mob()  // sets the frames of the animation
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

function displayText(text) {
    var console_str = '<pre>' + text + '</pre>';
    desktopHeader.innerHTML = console_str;
}

function displayText_mob(text) {  // function for mobile
    var console_str = '<pre>' + text + '</pre>';
    mobileHeader.innerHTML = console_str;
}
function displayText_mob(text, targetElement) {
    var console_str = '<pre>' + text + '</pre>';
    mobileHeader.innerHTML = console_str;
}
