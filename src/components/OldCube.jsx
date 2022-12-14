//this file can be ignored. this project was an assignment for Hack Reactor; we were given 2 days to do any project we wanted but i didnt finish completey how i invisioned. I wanted to keep this to look back on what i could do in a few days/a week (i started a little early) when i was first learning to make apps, so this is all kind of not my best code and isnt used or displayed on the screen. the main file is Cube.jsx


import React from 'react';
import * as THREE from "three";
import { GLTFLoader } from '../three.js-master/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '../three.js-master/examples/jsm/controls/OrbitControls.js';
import sound from '../models/cube sound.mp3';
import sound2 from '../models/cube sound2.mp3';
import sound3 from '../models/cube sound3.mp3';
import sound4 from '../models/cube sound4.mp3';
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

//slabs of -z or +z etc to see location

class OldCube extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let { abs, PI } = Math;
    var cubeSound = new Audio(sound);
    var cubeSound2 = new Audio(sound2);
    var cubeSound3 = new Audio(sound3);
    var cubeSound4 = new Audio(sound4);

    //make and render scene
    var scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xffffff );

    // webglrenderer displays your scene using webgl. antialias: true is making it more realistic by smoothing jagged lines
    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    //make and position camera
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.set( 0, 12, 0 );

    //make lights
    const ambientLight = new THREE.AmbientLight( 0xffffff, 2 );
    scene.add( ambientLight );
    const directLight = new THREE.DirectionalLight(0xffffff, 2);
    directLight.position.set(  0, 1, 2  );
    scene.add(directLight);


    //set orbit controls
    var controls = new OrbitControls( camera, renderer.domElement );
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableRotate = true;
    // controls.minPolarAngle = Math.PI / 2;
    // controls.maxPolarAngle = Math.PI / 2;
    controls.autoRotate = false;

    //handles window resizing
    function onWindowResize (event) {
      let width = (window.innerWidth)|0;
      let height = (window.innerHeight)|0;
      renderer.setSize(width, height, true);
      camera.aspect = width/height;
      camera.updateProjectionMatrix();
    }
    onWindowResize();
    window.addEventListener('resize', onWindowResize, false);

    // window.addEventListener('pointerup', (event) => {
    //   controls.enabled = false;
    // })

    //rotate on mouse scroll
    // window.addEventListener('wheel', onMouseWheel, false);
    // function onMouseWheel (event) {
    //   // event.preventDefault();
    //   wholeCube.rotation.y += (event.deltaX) * 0.008;
    //   wholeCube.rotation.x += (event.deltaY) * 0.008;
    // } sadly had to get rid of this


  const wholeCubeRaycaster = new THREE.Raycaster();

  var mouseOnCube = false;
  // var mouseMoveDirection = {x: null, y: null};
  var leftOrRight = '';
  var upOrDown = '';
  var upDownLeftOrRight = '';
  var dontDoMouseUp = false;

  window.addEventListener('mousemove', (event) => {
    //seeing if mouse is over cube, disabling orbit controls if it is
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    wholeCubeRaycaster.setFromCamera(mouse, camera);
    const intersectsCube = wholeCubeRaycaster.intersectObject(scene);
    if (intersectsCube.length === 0) {
      controls.enableRotate = true;
      mouseOnCube = false;
    } else {
      controls.enableRotate = false;
      mouseOnCube = true;
    }

    //setting last position of mouse
    leftOrRight = (
      event.clientX > mouseLocOnDown.x ? 'right'
      : event.clientX < mouseLocOnDown.x ? 'left'
      : 'none'
    );
    upOrDown = (
      event.clientY > mouseLocOnDown.y ? 'down'
      : event.clientY < mouseLocOnDown.y ? 'up'
      : 'none'
    );

    mouseLocOnDown.x = event.clientX;
    mouseLocOnDown.y = event.clientY;

    if (upOrDown === 'none') {
      upDownLeftOrRight = leftOrRight;
    }
    if (leftOrRight === 'none') {
      upDownLeftOrRight = upOrDown;
    }

  })

    //make raycaster
    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    var mouseLocOnDown = {x: null, y: null};
    var yAxisGroup = [];
    var xAxisGroup = [];
    var pushIfNotExists = function(thing, array) {
      if (!array.includes(thing)) {
        array.push(thing);
      }
    }

    window.addEventListener('mousedown', (event) => {
      xAxisGroup = [];
      yAxisGroup = [];

      if (mouseOnCube) {
        dontDoMouseUp = false;

        //set mouse location
        mouseLocOnDown.x = event.clientX;
        mouseLocOnDown.y = event.clientY;

      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(scene);

      // controls.enabled = true;
      // if (intersects.length === 0) {
      //   return;
      // }
      // controls.enabled = false;
      // console.log(scene.children);

      // xAxisGroup.push(intersects[0].object.parent);
      // yAxisGroup.push(intersects[0].object.parent);

      var facePoint = intersects[0].point;

      //making raycaster FROM what was clicked
      var raycaster2 = new THREE.Raycaster();
      raycaster2.ray.origin.copy(facePoint);
      console.log('origin of raycaster2', raycaster2.ray.origin);
      raycaster2.ray.direction.copy({x: 0, y: 0, z: -1});
      console.log('raycaster2 direction', raycaster2.ray.direction);
      const intersects2 = raycaster2.intersectObject(scene);
      // var functionToMakeRayCasterDirection = ()

      for (let i = 0; i < intersects2.length; i++) {
        pushIfNotExists(intersects2[i].object.parent, xAxisGroup);
        pushIfNotExists(intersects2[i].object.parent, yAxisGroup);
      }

      //just set raycaster2 to a new direction and push those intersects to the array. or make raycaster2's origin set to xaxis array[0], [1], [2], because there will only be 3 things in the intersects at this point since weve only done the part where we get the parents of the first three and push them


      //make raycaster for each cube that was selected from last raycaster,  Y AXIS CUBES
      var raycaster3 = new THREE.Raycaster();
      var intersects3;
      if (intersects2[0]) {
        raycaster3.ray.origin.copy(intersects2[0].point);
        raycaster3.ray.direction.copy({x: 0, y: -1, z: 0});
        intersects3 = raycaster3.intersectObject(scene);
        for (let i = 0; i < intersects3.length; i ++) {
          pushIfNotExists(intersects3[i].object.parent, yAxisGroup);
        }
      }

      var raycaster4 = new THREE.Raycaster();
      var intersects4;
      if(intersects2[2]) {
        raycaster4.ray.origin.copy(intersects2[2].point);
        raycaster4.ray.direction.copy({x: 0, y: -1, z: 0});
        intersects4 = raycaster4.intersectObject(scene);
        for (let i = 0; i < intersects4.length; i ++) {
          pushIfNotExists(intersects4[i].object.parent, yAxisGroup);
        }
      }

      var raycaster5 = new THREE.Raycaster();
      var intersects5;
      if (intersects2[4]) {
        raycaster5.ray.origin.copy(intersects2[4].point);
        raycaster5.ray.direction.copy({x: 0, y: -1, z: 0});
        intersects5 = raycaster5.intersectObject(scene);
        for (let i = 0; i < intersects5.length; i ++) {
          pushIfNotExists(intersects5[i].object.parent, yAxisGroup);
        }
      }


      //make raycaster for each cube that was selected from last raycaster,  X AXIS CUBES
      var raycaster6 = new THREE.Raycaster();
      raycaster6.ray.origin.copy(intersects2[0].point);
      raycaster6.ray.direction.copy({x: -1, y: 0, z: 0});
      const intersects6 = raycaster6.intersectObject(scene);
      for (let i = 0; i < intersects6.length; i ++) {
        pushIfNotExists(intersects6[i].object.parent, xAxisGroup);
      }

      var raycaster7 = new THREE.Raycaster();
      raycaster7.ray.origin.copy(intersects2[2].point);
      raycaster7.ray.direction.copy({x: -1, y: 0, z: 0});
      const intersects7 = raycaster7.intersectObject(scene);
      for (let i = 0; i < intersects7.length; i ++) {
        pushIfNotExists(intersects7[i].object.parent, xAxisGroup);
      }

      var raycaster8 = new THREE.Raycaster();
      raycaster8.ray.origin.copy(intersects2[4].point);
      raycaster8.ray.direction.copy({x: -1, y: 0, z: 0});
      const intersects8 = raycaster8.intersectObject(scene);
      for (let i = 0; i < intersects8.length; i ++) {
        pushIfNotExists(intersects8[i].object.parent, xAxisGroup);
      }

    } else {
      dontDoMouseUp = true;
    }
    // console.log('GROUP X', xAxisGroup);
    // console.log('GROUP Y', yAxisGroup);
    });
    //make group at (0, 0) attach cubes to them, rotate, then attach them back to the parent

    var rotateGroup = new THREE.Group();
    scene.add(rotateGroup);
    rotateGroup.position.set(0, 1, 0);
    var rotationTargetGroup = new THREE.Group();
    rotationTargetGroup.position.set(0, 1, 0);
    scene.add(rotationTargetGroup);
    var isAnimating = false;
    var rotateSideFunction;
    var xyorz;
    var isItEqualPi;

    window.addEventListener('mouseup', (event) => {
      // console.log(dontDoMouseUp);
      if (!dontDoMouseUp) {
      if (isAnimating) {
        return;
      }
      setTimeout(() => {
        isAnimating = false;
        while (rotateGroup.children.length) {
          wholeCube.attach(rotateGroup.children[0]);
        }
        rotationTargetGroup = new THREE.Group();
        rotationTargetGroup.position.set(0, 1, 0);
        scene.add(rotationTargetGroup);
      }, 1000)
      // console.log(upDownLeftOrRight);

      if (upDownLeftOrRight === 'right') {
        if (this.props.sound) {
          cubeSound2.play();
        }
        for (let i = 0; i < xAxisGroup.length; i++) {
          rotateGroup.attach(xAxisGroup[i]);
        }

        rotateSideFunction = function() {
          rotateGroup.rotation.y += 0.06;
        }
        xyorz = 'y';
        isItEqualPi = rotateGroup.rotation.y + (PI / 2);
        isAnimating = true;
      }
      if (upDownLeftOrRight === 'left') {
        if (this.props.sound) {
          cubeSound4.play();
        }
        for (let i = 0; i < xAxisGroup.length; i++) {
          rotateGroup.attach(xAxisGroup[i]);
        }
        rotateSideFunction = function() {
          rotateGroup.rotation.y -= 0.06;
        }
        xyorz = 'y';
        isItEqualPi = rotateGroup.rotation.y - (PI / 2);
        isAnimating = true;
      }

      if (upDownLeftOrRight === 'up') {
        if (this.props.sound) {
          cubeSound2.play();
        }
        for (let i = 0; i < yAxisGroup.length; i++) {
          rotateGroup.attach(yAxisGroup[i]);
        }
        rotateSideFunction = function() {
          rotateGroup.rotation.x -= 0.06;
        }
        xyorz = 'x';
        isItEqualPi = rotateGroup.rotation.x - (PI / 2);
        isAnimating = true;
      }
      if (upDownLeftOrRight === 'down') {
        if (this.props.sound) {
          cubeSound.play();
        }
        for (let i = 0; i < yAxisGroup.length; i++) {
          rotateGroup.attach(yAxisGroup[i]);
        }
        rotateSideFunction = function() {
          rotateGroup.rotation.x += 0.06;
        }
        xyorz = 'x';
        isItEqualPi = rotateGroup.rotation.x + (PI / 2);
        isAnimating = true;
      }

    }

    })


    //make group of mini cubes
    const wholeCube = new THREE.Group();
    //start of rendering TWENTY SEVEN CUBES
    const gltfLoader = new GLTFLoader();
    function loadGltfs () {
      gltfLoader.load(singlecube1, function(gltf) {
        let cube1 = gltf.scene;
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
        console.log('cube22', cube22.children[0].children[0].position);
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
    }
    loadGltfs();
    //ending mini cubes finally and adding group of all of them to scene
    scene.add(wholeCube);
    wholeCube.position.set(0, 1, 0);

    setTimeout(() => {
      console.log('whoelcube', wholeCube.children[0].children[0].position.x);
      console.log('whatever', wholeCube.children[0].children);
      for (let i = 0; i < wholeCube.children[0].children.length; i++) {
        if (wholeCube.children[0].children[i] && wholeCube.children[0].children[i].position.x === 0) {
          console.log('hi');
          console.log('position -__-', wholeCube.children[0].children[i].position);
          console.log('color', wholeCube.children[0].children[i].children[0].material.color);
          wholeCube.children[0].children[i].children[0].material.color.set(0xff0000);
        }
      }
    }, 1000);

    let floatCompare = ( a, b ) => Math.abs(a-b)<.05;

    function animate() {
      requestAnimationFrame( animate );
      if (isAnimating) {
        // rotateGroup.quaternion.slerp(rotationTargetGroup.quaternion, 0.2);
        rotateSideFunction();
        if (floatCompare(rotateGroup.rotation[xyorz], isItEqualPi)) {
          isAnimating = false;
          rotateGroup.rotation[xyorz] = isItEqualPi;
        }
      } else {
        while (rotateGroup.children.length) {
          wholeCube.attach(rotateGroup.children[0]);
        }
      }

      controls.update();
      renderer.render( scene, camera );
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

export default OldCube;