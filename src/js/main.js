import * as THREE from 'three';

const container = document.getElementById("box");

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x0C0C0C );
const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
camera.position.z = 8;
camera.position.x = 2.75;
const renderer = new THREE.WebGLRenderer({ antialias: true});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(container.offsetWidth, container.offsetWidth);
container.appendChild(renderer.domElement);

const geometry1 = new THREE.TorusKnotGeometry( 1, 0.4, 128, 12, 2, 3);
const edges1 = new THREE.EdgesGeometry(geometry1); 
const line1 = new THREE.LineSegments(edges1, new THREE.LineBasicMaterial({color: 0x00ff00})); 
scene.add(line1);
line1.position.y = 2.75;
line1.position.z = -2;
/*const geometry2 = new THREE.TorusKnotGeometry( 1, 0.4, 128, 12, 2, 3);
const edges2 = new THREE.EdgesGeometry(geometry2); 
const line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({color: 0xffff00})); 
scene.add(line2);*/
/*line2.position.y = 4;*/

var speed = 0.005;
container.onclick = function(event) {
	speed += 0.005;
}

function slow() {
	if (speed > 0.005) speed -= 0.0025;
}
setInterval(slow, 250);

window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
    renderer.setSize(window.innerWidth, window.innerWidth);
	console.log(window.innerWidth);
}
renderer.setSize(window.innerWidth, window.innerWidth);

document.getElementById("box").addEventListener('click', openContact);
function openContact() {
    speed = .1;
	document.getElementById("box").style.transition = "transform 2s";
	document.getElementById("box").style.transform = "translateX(-50%)";
}

function animate() {
	requestAnimationFrame( animate );

	line1.rotation.y += speed;

	renderer.render( scene, camera );

}
animate();