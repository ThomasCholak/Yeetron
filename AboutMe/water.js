// used code from for water shaders:
// https://github.com/mrdoob/three.js/blob/master/examples/webgl_shaders_ocean.html 
// and from here too:
// https://github.com/mrdoob/three.js/blob/master/examples/webgl_materials_cubemap_dynamic.html

import * as THREE from 'three';

import { Water } from 'three/addons/objects/Water.js';  // need to import for water simulation
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

document.addEventListener('wheel', onWheel); // wheel event listener (need for animating on scroll wheel)
window.addEventListener( 'resize', onWindowResize );  // listener for window resizing

let water, sun;
var renderer;
let cubeCamera, cubeRenderTarget, material, cube;

renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

new RGBELoader()
	.setPath( 'images/' )  // image from: https://polyhaven.com/a/kloofendal_48d_partly_cloudy_puresky
	.load( 'sky.hdr', function ( texture ) {

		texture.mapping = THREE.EquirectangularReflectionMapping;

		scene.background = texture;
		scene.environment = texture;

} );

// need a camera in order to create a 'reflection'
cubeRenderTarget = new THREE.WebGLCubeRenderTarget( 256 );
cubeRenderTarget.texture.type = THREE.HalfFloatType;

cubeCamera = new THREE.CubeCamera( 1, 1000, cubeRenderTarget );

material = new THREE.MeshStandardMaterial( {
    envMap: cubeRenderTarget.texture,
    roughness: 0.05,
    metalness: 1
});

cube = new THREE.Mesh( new THREE.BoxGeometry( 40, 40, 40  ), material );
cube.position.set(200, 50, 378);

scene.add( cube );

document.body.appendChild( renderer.domElement );
camera.position.z = 600;

sun = new THREE.Vector3();  // creates the 'sun'

// Plane (bathtub photo)
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('images/furrybath.jpg');
const planeGeometry = new THREE.PlaneGeometry(2.5, 3);
const planeMaterial = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.scale.set(2, 2, 2);
plane.position.set(0, -8, 595);
scene.add(plane);

// Water

const waterGeometry = new THREE.PlaneGeometry( 10000, 10000 );

water = new Water(
	waterGeometry, {
		textureWidth: 512,
		textureHeight: 512,
		waterNormals: new THREE.TextureLoader().load( 'waternormals.jpg', function (texture) {

			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

		} ),
		sunDirection: new THREE.Vector3(),
		sunColor: 0xffffff,
		waterColor: 0x001e0f,
		distortionScale: 3.7,
		fog: scene.fog !== undefined
	}
);

water.rotation.x = - 1.5; // MATH.pi didn't work for some reason from the original code

scene.add(water);

let rotation = true;
let speed = 0.002;

// animation frames
function animate() {
	requestAnimationFrame(animate);

    cubeCamera.update( renderer, scene );

	renderer.render(scene, camera);

    water.material.uniforms['time'].value += 1.0 / 100.0;  // causes water to 'ripple'

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // caps rotation of plane and then rotates other direction
    if (rotation) {
        plane.rotation.y -= speed;
        if (plane.rotation.y <= -Math.PI / 20) {
            rotation = false;
        }
    } else {
        plane.rotation.y += speed;
        if (plane.rotation.y >= Math.PI / 20) {
            rotation = true;
        }
    }
}

const threshold = -8.1;  // sets threshold as to how far the plane (bathtub) can be scrolled

// controls for scrolling (uses 'onWheel' event controls)
function onWheel(event) {
    const deltaY = event.deltaY * 0.005;
    const curPositionY = plane.position.y + deltaY;
  
    if (curPositionY >= threshold) {  // prevents further movement via threshold
      plane.position.y = curPositionY;
  
      renderer.render(scene, camera);
    }
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}

animate();
