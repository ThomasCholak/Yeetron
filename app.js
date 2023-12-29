document.addEventListener('DOMContentLoaded', function ()
{
    start_str();
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        yeet_anim_mob();  // mobile browser
      } else {
        yeet_anim();  // non-mobile browser
      }
});

function start_str()  // loading screen
{
    let myString = "L";

    setTimeout(function() {
        myString += "o";
        document.body.innerHTML = myString;
    }, 50);

    setTimeout(function() {
        myString += "a";
        document.body.innerHTML = myString;
    }, 100);

    setTimeout(function() {
        myString += "d";
        document.body.innerHTML = myString;
    }, 110);
    setTimeout(function() {
        myString += "i";
        document.body.innerHTML = myString;
    }, 150);

    setTimeout(function() {
        myString += "n";
        document.body.innerHTML = myString;
    }, 160);

    setTimeout(function() {
        myString += "g";
        document.body.innerHTML = myString;
    }, 200);

    setTimeout(function() {
        myString += ".";
        document.body.innerHTML = myString;
    }, 300);

    setTimeout(function() {
        myString += ".";
        document.body.innerHTML = myString;
    }, 350);

    setTimeout(function() {
        myString += ".";
        document.body.innerHTML = myString;
    }, 399);
}
  
function yeet_anim()  // sets the frames of the animation
{
    var yeet_str1 = "<br>" +
    " _   _   _____   _____   _______   _____    _____    ____   __<br>" +
    "| | | | |  ___| |  ___| |       | |     \\  |     |  |    \\ |  |<br>" +
    "|_   _| | |___  | |___   ￣| |￣  | |￣| | | |￣| |  |     \\|  |<br>" +
    "  | |   |  ___| |  ___|    | |    |  ￣ /  | | | |  |         |<br>" +
    "  | |   | |___  | |___     | |    | |\\ \\   | |_| |  |  |\\     |<br>" +
    "  | |   |     | |     |    | |    | | \\ \\  |     |  |  | \\    |<br>" +
    "   ￣    ￣￣￣   ￣￣￣     ￣     ￣   ￣   ￣￣￣   ￣￣  ￣￣";

    var yeet_str2 = "<br><br>" +
    " _   _   _____   _____   _______   _____    _____    ____   __<br>" +
    "| | | | |  ___| |  ___| |       | |     \\  |     |  |    \\ |  |<br>" +
    "|_   _| | |___  | |___   ￣| |￣  | |￣| | | |￣| |  |     \\|  |<br>" +
    "  | |   |  ___| |  ___|    | |    |  ￣ /  | | | |  |         |<br>" +
    "  | |   | |___  | |___     | |    | |\\ \\   | |_| |  |  |\\     |<br>" +
    "  | |   |     | |     |    | |    | | \\ \\  |     |  |  | \\    |<br>" +
    "   ￣    ￣￣￣   ￣￣￣     ￣     ￣   ￣   ￣￣￣   ￣￣  ￣￣";

    var currentIndex = 0;
    var texts = [yeet_str1, yeet_str2];
  
    setInterval(function ()
    {
      displayText(texts[currentIndex]);
      currentIndex = (currentIndex + 1) % texts.length;
    }, 400);
}

function yeet_anim()  // sets the frames of the animation
{
    var yeet_str1 = "<br>" +
    " _   _   _____   _____   _______  <br>" +
    "| | | | |  ___| |  ___| |       | <br>" +
    "|_   _| | |___  | |___   ￣| |￣ <br>" +
    "  | |   |  ___| |  ___|    | |    <br>" +
    "  | |   | |___  | |___     | |    <br>" +
    "  | |   |     | |     |    | |   <br>" +
    "   ￣    ￣￣￣   ￣￣￣     ￣    ";

    var yeet_str2 = "<br><br>" +
    " _   _   _____   _____   _______  <br>" +
    "| | | | |  ___| |  ___| |       | <br>" +
    "|_   _| | |___  | |___   ￣| |￣  <br>" +
    "  | |   |  ___| |  ___|    | |    <br>" +
    "  | |   | |___  | |___     | |    <br>" +
    "  | |   |     | |     |    | |    <br>" +
    "   ￣    ￣￣￣   ￣￣￣     ￣     ";

    var currentIndex = 0;
    var texts = [yeet_str1, yeet_str2];
  
    setInterval(function ()
    {
      displayText(texts[currentIndex]);
      currentIndex = (currentIndex + 1) % texts.length;
    }, 400);
}
  
function displayText(text)
{
    clearConsole();
    var console_str = '<pre>' + text + '</pre>';
    document.body.innerHTML = console_str;
}
  
function clearConsole()  // function to clear the console
{
    document.body.innerHTML = '';
}
