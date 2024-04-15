import * as THREE from 'three';

const container = document.getElementById("box");

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x0C0C0C );
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(container.offsetWidth, container.offsetHeight);
container.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const edges = new THREE.EdgesGeometry(geometry); 
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 0x00ff00})); 
geometry.center();
scene.add(line);

camera.position.z = 6;
camera.position.y = -2;

/*container.addEventListener("mouseover", accelerate());
let speedY = 0;
function accelerate(event) {
	for (let i = 0; i < 50; i++) {
		speedY += .005;
	}
}*/

function animate() {

	requestAnimationFrame( animate );

	line.rotation.y += 0.005;

	renderer.render( scene, camera );

}

animate();