import React from 'react';
// import { Canvas } from '@react-three-fiber';
import Cube from './Cube.jsx';
import * as THREE from "three";
import { GLTFLoader } from '../three.js-master/examples/jsm/loaders/GLTFLoader.js';
import rubiksCube from '../models/rubikscube.gltf';
import { OrbitControls } from '../three.js-master/examples/jsm/controls/OrbitControls.js';
import style from './App.module.css';
import gradientLeft from '../pics/1.png';
import gradientRight from '../pics/2.png';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xffffff );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.set( 0, 15, 2 );
    camera.lookAt(new THREE.Vector3(1,1,20))
    // camera.position.z = 15;

    var controls = new OrbitControls( camera, renderer.domElement );
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableRotate = true;
    controls.minPolarAngle = Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;
    // controls.minAzimuthAngle = Math.PI / 2;
    // controls.maxAzimuthAngle = Math.PI / 2;
    controls.autoRotate = false;

    // controls.update();

    const ambientLight = new THREE.AmbientLight( 0xffffff, 2 );
    // ambientLight.position.set(  0, 1, 2  );
    scene.add( ambientLight );
    const directLight = new THREE.DirectionalLight(0xffffff, 2);
    scene.add(directLight);

    const gltfLoader = new GLTFLoader();
    gltfLoader.load(rubiksCube, function(gltf) {
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
      <div className={style.app} >
        <div className={style.allButtons}>
          <button className={style.shuffle}>SHUFFLE</button>
          <button className={style.solve}>SOLVE</button>
          <button className={style.startTimer}>START TIMER</button>
        </div>
        <Cube />
        <div>
          <img src={gradientLeft} className={style.gradientLeftPic} alt="gradient background"></img>
          <img src={gradientRight} className={style.gradientRightPic} alt="gradient background"></img>
        </div>
      </div>
    )
  }
}

export default App;
