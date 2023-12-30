// code for animating the respective 3D elements on the home page

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

// loads spinning cube into scene
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('textures/image.jpg');
const material = new THREE.MeshBasicMaterial({ map: texture });
const cube = new THREE.Mesh(cubeGeometry, material);
cube.position.set(0.8, 0, -1.5);

scene.add(cube); // adds cube to the scene

const mouse = new THREE.Vector2();  // mouse listener

const light = new THREE.DirectionalLight(0xf6c193, 1);  // sets color to light brown
light.position.set(5, 5, 5);
light.intensity = 2;
scene.add(light);

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let model;

const loader = new GLTFLoader();
loader.load('scene.gltf', (gltf) => {
    model = gltf.scene;

    model.position.set(1, 0, 0);
    model.scale.set(1, 1, 1);

    scene.add(model);

    camera.position.set(0, 0, 0);

    animate();
  });

  document.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

const animate = () => {
    requestAnimationFrame(animate);

    if (model) {
        model.rotation.x -= 0.0005; // x-axis rotation
        model.rotation.y -= 0.0005; // y-axis rotation
    }

    if (cube) {
      // sets the initial rotation
      cube.rotation.x += 0.001;
      cube.rotation.y += 0.001;
      
      // animates the cube via mouse movements
      cube.rotation.x += mouse.y * 0.01;
      cube.rotation.y += mouse.x * 0.01;
    }

  renderer.render(scene, camera);
  };

animate();
