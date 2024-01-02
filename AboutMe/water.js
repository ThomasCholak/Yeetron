// used code from for water shaders:
// https://github.com/mrdoob/three.js/blob/master/examples/webgl_shaders_ocean.html 

import * as THREE from 'three';

import { Water } from 'three/addons/objects/Water.js';  // need to import for water simulation
import { Sky } from 'three/addons/objects/Sky.js';

let water, sun;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
window.addEventListener( 'resize', onWindowResize );  // listener for window resizing

camera.position.z = 10;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// creates futuristic-looking cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 );

var material = new THREE.MeshStandardMaterial( { // https://stackoverflow.com/questions/45029209/silver-polished-material-in-three-js
    metalness: 1,
    roughness: 0.5,
} );

const cube = new THREE.Mesh( geometry, material );
cube.scale.set(0.75, 0.75, 0.75);
cube.position.set(4, 2, 1);
scene.add( cube );

sun = new THREE.Vector3();  // creates the 'sun'

// Water

const waterGeometry = new THREE.PlaneGeometry( 10000, 10000 );
scene.fog = new THREE.Fog(0x001e0f, 2, 500);

water = new Water(
    waterGeometry,
    {
        textureWidth: 512,
        textureHeight: 512,
        waterNormals: new THREE.TextureLoader().load('waternormals.jpg', function (texture) {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        }),
        sunDirection: new THREE.Vector3(),
        sunColor: 0xaaaaaa,
        waterColor: 0x001e0f, // dark blue
        distortionScale: 20,
        fog: scene.fog !== undefined,
    }
);

water.rotation.x = - 3.11 / 2;

scene.add(water);

// Skybox

const sky = new Sky();
sky.scale.setScalar( 10000 );
scene.add(sky);

const skyUniforms = sky.material.uniforms;

skyUniforms[ 'turbidity' ].value = 10;
skyUniforms[ 'rayleigh' ].value = 12;
skyUniforms[ 'mieCoefficient' ].value = 0.005;
skyUniforms[ 'mieDirectionalG' ].value = 0.8;

const parameters = {
    elevation: 7,
    azimuth: 2
};

// Sets up the sun 
const pmremGenerator = new THREE.PMREMGenerator( renderer );
const sceneEnv = new THREE.Scene();

let renderTarget;

const phi = THREE.MathUtils.degToRad(90 - parameters.elevation); // can change these values for different effects on cubes
const theta = THREE.MathUtils.degToRad(parameters.azimuth);

sun.setFromSphericalCoords(1, phi, theta);

sky.material.uniforms[ 'sunPosition' ].value.copy(sun);  // material composition affected by sun's position
water.material.uniforms[ 'sunDirection' ].value.copy(sun).normalize();

if ( renderTarget !== undefined ) renderTarget.dispose();

sceneEnv.add(sky);
renderTarget = pmremGenerator.fromScene(sceneEnv);
scene.add(sky);

scene.environment = renderTarget.texture;


// animation frames
function animate() {
    const time = performance.now() * 0.0001;

	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    

    water.material.uniforms[ 'time' ].value += 1.0 / 2750.0;  // causes water to 'ripple'

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

animate();