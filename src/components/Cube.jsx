import React from 'react';
import * as THREE from "three";
import { GLTFLoader } from '../three.js-master/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '../three.js-master/examples/jsm/controls/OrbitControls.js';
import singlecube1 from '../models/singlecube1.gltf';
import singlecube2 from '../models/singlecube2.gltf';
import singlecube3 from '../models/singlecube3.gltf';
import singlecube4 from '../models/singlecube4.gltf';
import singlecube5 from '../models/singlecube5.gltf';
import singlecube6 from '../models/singlecube6.gltf';
import singlecube7 from '../models/singlecube7.gltf';
import singlecube8 from '../models/singlecube8.gltf';
import singlecube9 from '../models/singlecube9.gltf';
import singlecube10 from '../models/singlecube10.gltf';
import singlecube11 from '../models/singlecube11.gltf';
import singlecube12 from '../models/singlecube12.gltf';
import singlecube13 from '../models/singlecube13.gltf';
import singlecube14 from '../models/singlecube14.gltf';
import singlecube15 from '../models/singlecube15.gltf';
import singlecube16 from '../models/singlecube16.gltf';
import singlecube17 from '../models/singlecube17.gltf';
import singlecube18 from '../models/singlecube18.gltf';
import singlecube19 from '../models/singlecube19.gltf';
import singlecube20 from '../models/singlecube20.gltf';
import singlecube21 from '../models/singlecube21.gltf';
import singlecube22 from '../models/singlecube22.gltf';
import singlecube23 from '../models/singlecube23.gltf';
import singlecube24 from '../models/singlecube24.gltf';
import singlecube25 from '../models/singlecube25.gltf';
import singlecube26 from '../models/singlecube26.gltf';

class Cube extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xffffff );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.set( 0, 12, 2 );
    // camera.up.set(1, 1, 0);
    // camera.lookAt(new THREE.Vector3(0, 0, 0));
    // camera.position = new THREE.Vector3(-20, 20, 30);
    // camera.lookAt(scene.position);
    // camera.position.z = 15;

    var controls = new OrbitControls( camera, renderer.domElement );
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableRotate = true;
    controls.minPolarAngle = Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;
    controls.autoRotate = false;

    //make lights
    const ambientLight = new THREE.AmbientLight( 0xffffff, 2 );
    scene.add( ambientLight );
    const directLight = new THREE.DirectionalLight(0xffffff, 2);
    directLight.position.set(  0, 1, 2  );
    scene.add(directLight);
    //

    const wholeCube = new THREE.Group();
    //start of rendering TWENTY SEVEN CUBES
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(singlecube1, function(gltf) {
      let cube1 = gltf.scene;
      // scene.add(cube1);
      wholeCube.add(cube1);
    });
    gltfLoader.load(singlecube2, function(gltf) {
      let cube2 = gltf.scene;
      wholeCube.add(cube2);
    });
    gltfLoader.load(singlecube3, function(gltf) {
      let cube3 = gltf.scene;
      wholeCube.add(cube3);
    });
    gltfLoader.load(singlecube4, function(gltf) {
      let cube4 = gltf.scene;
      wholeCube.add(cube4);
    });
    gltfLoader.load(singlecube5, function(gltf) {
      let cube5 = gltf.scene;
      wholeCube.add(cube5);
    });
    gltfLoader.load(singlecube6, function(gltf) {
      let cube6 = gltf.scene;
      wholeCube.add(cube6);
    });
    gltfLoader.load(singlecube7, function(gltf) {
      let cube7 = gltf.scene;
      wholeCube.add(cube7);
    });
    gltfLoader.load(singlecube8, function(gltf) {
      let cube8 = gltf.scene;
      wholeCube.add(cube8);
    });
    gltfLoader.load(singlecube9, function(gltf) {
      let cube9 = gltf.scene;
      wholeCube.add(cube9);
    });
    gltfLoader.load(singlecube10, function(gltf) {
      let cube10 = gltf.scene;
      wholeCube.add(cube10);
    });
    gltfLoader.load(singlecube11, function(gltf) {
      let cube11 = gltf.scene;
      wholeCube.add(cube11);
    });
    gltfLoader.load(singlecube12, function(gltf) {
      let cube12 = gltf.scene;
      wholeCube.add(cube12);
    });
    gltfLoader.load(singlecube13, function(gltf) {
      let cube13 = gltf.scene;
      wholeCube.add(cube13);
    });
    gltfLoader.load(singlecube14, function(gltf) {
      let cube14 = gltf.scene;
      wholeCube.add(cube14);
    });
    gltfLoader.load(singlecube15, function(gltf) {
      let cube15 = gltf.scene;
      wholeCube.add(cube15);
    });
    gltfLoader.load(singlecube16, function(gltf) {
      let cube16 = gltf.scene;
      wholeCube.add(cube16);
    });
    gltfLoader.load(singlecube17, function(gltf) {
      let cube17 = gltf.scene;
      wholeCube.add(cube17);
    });
    gltfLoader.load(singlecube18, function(gltf) {
      let cube18 = gltf.scene;
      wholeCube.add(cube18);
    });
    gltfLoader.load(singlecube19, function(gltf) {
      let cube19 = gltf.scene;
      wholeCube.add(cube19);
    });
    gltfLoader.load(singlecube20, function(gltf) {
      let cube20 = gltf.scene;
      wholeCube.add(cube20);
    });
    gltfLoader.load(singlecube21, function(gltf) {
      let cube21 = gltf.scene;
      wholeCube.add(cube21);
    });
    gltfLoader.load(singlecube22, function(gltf) {
      let cube22 = gltf.scene;
      wholeCube.add(cube22);
    });
    gltfLoader.load(singlecube23, function(gltf) {
      let cube23 = gltf.scene;
      wholeCube.add(cube23);
    });
    gltfLoader.load(singlecube24, function(gltf) {
      let cube24 = gltf.scene;
      wholeCube.add(cube24);
    });
    gltfLoader.load(singlecube25, function(gltf) {
      let cube25 = gltf.scene;
      wholeCube.add(cube25);
    });
    gltfLoader.load(singlecube26, function(gltf) {
      let cube26 = gltf.scene;
      wholeCube.add(cube26);
    });
    //ending finally
    scene.add(wholeCube);
    wholeCube.position.set(-2, 0, -2);

    console.log(scene.children);
    // wholeCube.translate( 0, 0, 0 );
    // wholeCube.center();

    window.addEventListener('wheel', onMouseWheel, false);
    function onMouseWheel (event) {
      event.preventDefault();
      wholeCube.rotation.y += event.deltaX * 0.01;
      wholeCube.rotation.x += event.deltaY * 0.01;
      // camera.rotation.y -= event.deltaY * 0.00005;
    }

    function animate() {
      requestAnimationFrame( animate );
      renderer.render( scene, camera );
      controls.update();
    }
    animate();
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default Cube;