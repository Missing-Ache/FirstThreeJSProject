import * as THREE from "three";
import {SpotLight} from "three";
// 0. get the canvas element
const canvas= document.getElementById('canvas');

// 1. Create the scene

const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0')

// 2. Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3. Object

const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshBasicMaterial({ color: '#468585'})
const dodecahedron = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(2, 0.1,2);
const boxMaterial = new THREE.MeshBasicMaterial({ color: '#B4B4B3'})
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5;

scene.add(dodecahedron);
scene.add(box);

// 4. Light
const spotLight= new THREE.SpotLight(0x006769, 100);
SpotLight.position.set(1,1,1);
scene.add(spotLight);

// 5. renderer
const renderer= new THREE.WebGLRenderer({canvas});

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);



