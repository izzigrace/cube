import React from 'react';
// import { Canvas } from '@react-three-fiber';
import Cube from './Cube.jsx';
import * as THREE from "three";
import { GLTFLoader } from '../three.js-master/examples/jsm/loaders/GLTFLoader.js';
import rubiksCube from '../models/rubikscube.gltf';
import { OrbitControls } from '../three.js-master/examples/jsm/controls/OrbitControls.js';
// import '../styles.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    var controls = new OrbitControls( camera, renderer.domElement );
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableRotate = true;
    controls.minPolarAngle = Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;
    // controls.minAzimuthAngle = Math.PI / 2;
    // controls.maxAzimuthAngle = Math.PI / 2;
    controls.autoRotate = false;
    camera.position.set( 0, 1, 2 );

    scene.background = new THREE.Color( 0xffffff );
    camera.position.z = 15;
    controls.update();

    const ambientLight = new THREE.AmbientLight( 0xffffff, 2 );
    // ambientLight.position.set(  0, 1, 2  );
    scene.add( ambientLight );

    const gltfLoader = new GLTFLoader();
    gltfLoader.load(rubiksCube, function(gltf) {
      console.log('entered gltf loader');
      let model = gltf.scene;
      scene.add(model);
    });

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
        <Cube />
      </div>
    )
  }
}

export default App;
