import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';
// import {OrbitControls} from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js'
// import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader.js'


const scene = new THREE.Scene();
// scene.background = new THREE.Color(0xffffff)

// const loader = new THREE.TextureLoader();
// scene.background = loader.load( 'https://images.freeimages.com/images/large-previews/704/clouds-1362303.jpg' );

//objloader

// const loader = new OBJLoader();
// loader.load(
    
//     //resource URL
//     './assets/plane.obj',

//     //function called when resource is loaded
//     function( object ) {
//         scene.add(object);
//     },
//     //function when loading is in progress
//     function ( xhr ) {
//         console.log((xhr.loaded / xhr.total * 100) + '% loaded');
//     }, 
//     //function when loading has error
//     function ( error ) {
//         console.log('error in loading')
//     }
// );






//Meshes

const cubeGeometry = new THREE.BoxGeometry(2,1)
const cubeMaterial = new THREE.MeshBasicMaterial({color: 0x333333})
const boxMesh = new THREE.Mesh(cubeGeometry,cubeMaterial)
boxMesh.position.set(-1.2, 0, -3)

scene.add(boxMesh)

const camera = new THREE.
PerspectiveCamera(
    75,
    innerWidth/400,
    0.1,
    1000
    )

const renderer = new THREE.WebGLRenderer({ alpha: true })
renderer.setClearColor( 0x000000, 0 );
renderer.setSize(innerWidth, 400 );
renderer.setPixelRatio(devicePixelRatio)

const parentDiv = document.getElementById('Header')
// console.log(parentDiv)
parentDiv.appendChild(renderer.domElement)



var counter = 0;
// 100 iterations
var increase = Math.PI * 2 / 100;

function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene,camera)
    // boxMesh.rotation.x += 0.01
    // let y = Math.sin( counter/3 ) 01;

    let y = 0.1* Math.sin((counter-0.5)/4)
    let x = 0.1* Math.sin((counter-0.1)/2)

    // console.log(y)
    counter += increase;
    boxMesh.rotation.z = y
    boxMesh.rotation.x = x
    boxMesh.position.y = y*3
    boxMesh.rotation.y = -0.5


    // console.log(intersects)
    // if(intersects){
    //     console.log('intersecting')
    // }
}


animate()

const resizeUpdateInterval = 500;

addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = 400;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
},
)



//THIS FUNCTION HAS SCROLL SOLUTIONS FOR BOTH SCRIPTS

function yHandler(){

    //threejs - effect
    var yChange = window.pageYOffset/100;
    var zChange = window.pageYOffset/300;
    boxMesh.position.set(-1.2+ yChange, 0, -3+ zChange)

    // var solutions = document.getElementById('all')
    // var contentHeight = solutions.offsetHeight;
    var yOffset = window.pageYOffset;
    var y = yOffset + window.innerHeight
    // var obj = document.getElementById('s1')

    // var obj = $(".scroll-enable")
    // var objt = $(".solutions");
    var s1 = document.getElementsByClassName('scroll-enable');

    // var topPos = s1[0].offsetTop;
    console.log(s1.length)
    for (let i= 0 ; i < s1.length ; i++){
        var objPos = s1[i].offsetTop 
        
        if( objPos<= y-200 ){
            s1[i].classList.add('scroll-in-view')
            // console.log('yes',i)
        }
    }
}

window.onscroll = yHandler;

