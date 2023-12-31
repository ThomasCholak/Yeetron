<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>yeetron.io</title>
  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <script type="module" src="main.js"></script>
    
  <header id="desktopHeader">
    <pre><p>
 _   _   _____   _____   _______   _____    _____    ____   __
| |_| | |  ___| |  ___| |       | |     \  |     |  |    \ |  |
|_   _| | |___  | |___   ￣| |￣  | |￣| | | |￣| |  |     \|  |
  | |   |  ___| |  ___|    | |    |  ￣ /  | | | |  |         |
  | |   | |___  | |___     | |    | |\ \   | |_| |  |  |\     |
  | |   |     | |     |    | |    | | \ \  |     |  |  | \    |
  ￣     ￣￣￣   ￣￣￣    ￣      ￣   ￣   ￣￣￣   ￣￣  ￣￣
    </p></pre>
  </header>

  <header id="mobileHeader" class="mobile-only">
    <p><pre>
 _   _   _____   _____   _______
| |_| | |  ___| |  ___| |       |
|_   _| | |___  | |___   ￣| |￣
  | |   |  ___| |  ___|    | |
  | |   | |___  | |___     | | 
  | |   |     | |     |    | |
  ￣     ￣￣￣   ￣￣￣    ￣ 
    </pre></p>
  </header>

  <script src="app.js"></script>

  <!-- HTML element with the text to highlight -->
  <p id="aboutMe" class="about_Me">About Me</p>
  <p id="enterD" class="enter_D">Enter<br>the Dungeon</p>
  <p id="gamesb" class="games_b">Games</p>

  <!-- mobile formatting -->
  <p id="aboutMe_mob" class="about_Me_mob">About Me</p>
  <p id="enterD_mob" class="enter_D_mob">Enter the<br> Dungeon</p>
  <p id="gamesb_mob" class="games_b_mob">Games</p>

  <!-- Scripting javascript file to allow for 3D models -->
  <script async src="https://unpkg.com/es-module-shims@1.6.3/dist/es-module-shims.js"></script>
  <script type="importmap">
    {
      "imports": {
        "three": "https://unpkg.com/three/build/three.module.js",
        "three/addons/": "https://unpkg.com/three/examples/jsm/"
      }
    }
  </script>

</body>
</html>
