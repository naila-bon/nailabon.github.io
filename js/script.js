//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

// Setup
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ alpha: true }); //Alpha: true allows for the transparent background

//Add lights to the scene
const ambientLight = new THREE.AmbientLight(0x333333);
const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(5, 5, 5);
scene.add(ambientLight, pointLight)

//Add mesh
const loader = new GLTFLoader();

loader.load('../media/model.gltf', (gltf) => {
  const model = gltf.scene;
  scene.add(model);
});

camera.position.set(-5, 4, 5 );
camera.rotation.y = -0.8

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

function animate() {
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}

animate()

function moveCamera(){
  const t = document.body.getBoundingClientRect().top;
  const scrollPercentage = (t / (document.body.scrollHeight - window.innerHeight)) * 100;


  let targetPosition;
      let targetRotation;

      if (scrollPercentage < 25) {
        targetPosition = new THREE.Vector3(-5, 4, 5);
        targetRotation = new THREE.Vector3(0, -0.8, 0);
      } else if (scrollPercentage < 50) {
        targetPosition = new THREE.Vector3(-5, 4, 0);
        targetRotation = new THREE.Vector3(0, -1.6, 0);
      } else if (scrollPercentage < 75) {
        targetPosition = new THREE.Vector3(0, 4, 5);
        targetRotation = new THREE.Vector3(0, 0, 0);
      } else {
        targetPosition = new THREE.Vector3(-5, 4, 5);
        targetRotation = new THREE.Vector3(0, -0.8, 0);
      }

      camera.position.lerp(targetPosition, 0.1);
      camera.rotation.y += (targetRotation.y - camera.rotation.y) * 0.05;
    }

// Add a scroll event listener to move the camera
window.addEventListener("scroll", moveCamera);

//Add a listener to the window, so we can resize the window and the camera
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});


//Helpers
// const lightHelper = new THREE.PointLightHelper(ambientLight)
// const gripHelper = new THREE.GridHelper(10, 10, 0xaec6cf, 0xaec6cf)
// const cameraHelper = new THREE.CameraHelper(camera);
// scene.add(lightHelper, gripHelper, cameraHelper)

