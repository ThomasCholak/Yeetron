import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1);
light.intensity = 2;
scene.add(light);

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let model;

const loader = new GLTFLoader();
loader.load('scene.gltf', (gltf) => {
    model = gltf.scene;

    model.position.set(0, 0, 0);
    model.scale.set(1, 1, 1);

    scene.add(model);

    camera.position.set(0, 0, 0);

    animate();
  });

const animate = () => {
    requestAnimationFrame(animate);
    if (model) {
        model.rotation.x -= 0.0005; // x-axis rotation
        model.rotation.y -= 0.0005; // y-axis rotation
    }

  renderer.render(scene, camera);
  };

animate();