const options = {
    targetSelector: '#scene',
    width: 800, height: 600,
    backgroundColor: 0xeaff47
}

const renderer = new THREE.WebGLRenderer();

renderer.setSize(
    options.width, options.height
);

document.querySelector(
    options.targetSelector)
    .appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(
    options.backgroundColor
);


const camera = new THREE.PerspectiveCamera(
    50, options.width / options.height
);

camera.position.z = 5;

const light = new THREE.HemisphereLight(
    0x404040, 4
);

scene.add(light);