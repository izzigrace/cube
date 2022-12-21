import React from 'react';
import * as THREE from "three";
import { GLTFLoader } from '../three.js-master/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '../three.js-master/examples/jsm/controls/OrbitControls.js';
import { TWEEN } from '../three.js-master/examples/jsm/libs/tween.module.min';
import sound from '../models/cube sound.mp3';
import sound2 from '../models/cube sound2.mp3';
import sound3 from '../models/cube sound3.mp3';
import sound4 from '../models/cube sound4.mp3';
import singlecube1 from '../models/oneCubeObjToOrg.gltf';
import singlecube2 from '../models/oneCubeObjToOrg2.gltf';
import singlecube3 from '../models/oneCubeObjToOrg3.gltf';
import singlecube4 from '../models/oneCubeObjToOrg4.gltf';
import singlecube5 from '../models/oneCubeObjToOrg5.gltf';
import singlecube6 from '../models/oneCubeObjToOrg6.gltf';
import singlecube7 from '../models/oneCubeObjToOrg7.gltf';
import singlecube8 from '../models/oneCubeObjToOrg8.gltf';
import singlecube9 from '../models/oneCubeObjToOrg9.gltf';
import singlecube10 from '../models/oneCubeObjToOrg10.gltf';
import singlecube11 from '../models/oneCubeObjToOrg11.gltf';
import singlecube12 from '../models/oneCubeObjToOrg12.gltf';
import singlecube13 from '../models/oneCubeObjToOrg13.gltf';
import singlecube14 from '../models/oneCubeObjToOrg14.gltf';
import singlecube15 from '../models/oneCubeObjToOrg15.gltf';
import singlecube16 from '../models/oneCubeObjToOrg16.gltf';
import singlecube17 from '../models/oneCubeObjToOrg17.gltf';
import singlecube18 from '../models/oneCubeObjToOrg18.gltf';
import singlecube19 from '../models/oneCubeObjToOrg19.gltf';
import singlecube20 from '../models/oneCubeObjToOrg20.gltf';
import singlecube21 from '../models/oneCubeObjToOrg21.gltf';
import singlecube22 from '../models/oneCubeObjToOrg22.gltf';
import singlecube23 from '../models/oneCubeObjToOrg23.gltf';
import singlecube24 from '../models/oneCubeObjToOrg24.gltf';
import singlecube25 from '../models/oneCubeObjToOrg25.gltf';
import singlecube26 from '../models/oneCubeObjToOrg26.gltf';
import { getCubePositions, getSlabs } from './helperFunctions';

//add sounds


// fix (0, 1, 0) shit with scene vs wholeCube group
//function that takes in the click face and the rotation axis or right or left or whatever, then it rotates the with the information given

class Practice2Cube extends React.Component {
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


  const sceneRaycaster = new THREE.Raycaster();

  var mouseOnCube = false;
  // var mouseMoveDirection = {x: null, y: null};
  var leftOrRight = '';
  var upOrDown = '';
  var upDownLeftOrRight = '';
  var threeX = '';
  var threeY = '';
  var threeZ = '';

  var highest = threeX;
  var whichAxis = 'x';

  var dontDoMouseUp = false;

  function shuffle(history) {

  }

  var threeSpaceMouseLocOnMove;

  window.addEventListener('mousemove', (event) => {
    //seeing if mouse is over cube, disabling orbit controls if it is
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    sceneRaycaster.setFromCamera(mouse, camera);
    const intersectsCube = sceneRaycaster.intersectObject(scene);
    if (intersectsCube.length === 0) {
      controls.enableRotate = true;
      mouseOnCube = false;
    } else {
      controls.enableRotate = false;
      mouseOnCube = true;

      //get  three dimensional location of mouse
      var threeSpaceMouseLocRayOnMove = new THREE.Raycaster();
      threeSpaceMouseLocRayOnMove.setFromCamera(mouse, camera);
      var threeSpaceMouseIntersectsOnMove = threeSpaceMouseLocRayOnMove.intersectObject(scene);
      threeSpaceMouseLocOnMove = threeSpaceMouseIntersectsOnMove[0].point;
    }

    //setting last position of mouse (for after click to see which direction it moved)
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


    threeX = threeSpaceMouseLocOnMove.x - threeSpaceMouseLocOnDown.x;
    threeY = threeSpaceMouseLocOnMove.y - threeSpaceMouseLocOnDown.y;
    threeZ = threeSpaceMouseLocOnMove.z - threeSpaceMouseLocOnDown.z;

    if (threeY > highest) {
      highest = threeY;
      whichAxis = 'y';
    }
    if (threeZ > highest) {
      highest = threeZ;
      whichAxis = 'z';
    }

    if (threeSpaceMouseLocOnMove[whichAxis] - threeSpaceMouseLocOnDown[whichAxis] < 0) {
      whichAxis = '-' + whichAxis;
    }

  })

    //make raycaster
    const mouse = new THREE.Vector2();
    var mouseLocOnDown = {x: null, y: null};
    var info;
    var threeSpaceMouseLocOnDown;


    window.addEventListener('mousedown', (event) => {

      if (mouseOnCube) {
        dontDoMouseUp = false;

        //set mouse location
        mouseLocOnDown.x = event.clientX;
        mouseLocOnDown.y = event.clientY;

      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      info = getSlabs(scene, mouse, camera, raycaster);

      var threeSpaceMouseLocRay = new THREE.Raycaster();
      threeSpaceMouseLocRay.setFromCamera(mouse, camera);
      var threeSpaceMouseIntersects = threeSpaceMouseLocRay.intersectObject(scene);
      threeSpaceMouseLocOnDown = threeSpaceMouseIntersects[0].point;
      console.log('threemouselocOnDown', threeSpaceMouseLocOnDown);


    } else {
      dontDoMouseUp = true;
    }

    });

    var isAnimating = false;

    const raycaster = new THREE.Raycaster();

    window.addEventListener('mouseup', (event) => {
      if (!dontDoMouseUp) {
      if (isAnimating) {
        return;
      }

      var positionRay = new THREE.Raycaster();
      getCubePositions(scene, positionRay);
      var positions = getCubePositions(scene, positionRay);

      var history = [];


      function rotateSlab(info, history) {
        isAnimating = true;

        function rotateSide(axis, rAxis, side, angle) {
          var tween1;
          var rotato = new THREE.Group();
          scene.attach(rotato);
          var rotatoArr = [];

          for (let i = 0; i < positions[info[side].slab].length; i++) {
            rotato.attach(positions[info[side].slab][i]);
            rotatoArr.push(positions[info[side].slab][i]);
          }

          tween1 = new TWEEN.Tween({[rAxis]: 0})
            .to( {[rAxis]: angle}, 400)
            .easing(TWEEN.Easing.Quintic.Out)
            .onComplete(() => {
              for (let i = 0; i < rotatoArr.length; i++) {
                scene.attach(rotatoArr[i]);
              }
              scene.remove(rotato);
            })
          tween1.onUpdate((object: {[rAxis]: number}, elapsed: number) => {
              rotato.rotation[axis] = object[rAxis];
          })
          tween1.start();
        }

        if (upDownLeftOrRight === 'right') {
          rotateSide('y', 'rY', 'rightLeft', (PI / 2));
          console.log(camera.rotation);
        }

        if (upDownLeftOrRight === 'left') {
          rotateSide('y', 'rY', 'rightLeft', -(PI / 2));
          console.log(scene.children);
        }

        if (info.face === 'z') {
          if (upDownLeftOrRight === 'up') {
            rotateSide('x', 'rX', 'upDown', -(PI / 2));
          }

          if (upDownLeftOrRight === 'down') {
            rotateSide('x', 'rX', 'upDown', (PI / 2));
          }
        }
        if (info.face === '-z') {
          if (upDownLeftOrRight === 'up') {
            rotateSide('x', 'rX', 'upDown', (PI / 2));
          }

          if (upDownLeftOrRight === 'down') {
            rotateSide('x', 'rX', 'upDown', -(PI / 2));
          }
        }

        if (info.face === '-x') {
          if (upDownLeftOrRight === 'up') {
            rotateSide('z', 'rZ', 'upDown', -(PI / 2));
          }

          if (upDownLeftOrRight === 'down') {
            rotateSide('z', 'rZ', 'upDown', (PI / 2));
          }
        }
        if (info.face === 'x') {
          if (upDownLeftOrRight === 'up') {
            rotateSide('z', 'rZ', 'upDown', (PI / 2));
          }

          if (upDownLeftOrRight === 'down') {
            rotateSide('z', 'rZ', 'upDown', -(PI / 2));
          }
        }


      }

      rotateSlab(info, history);


      // console.log(upDownLeftOrRight);


    }

    isAnimating = false;
    })


    //make group of mini cubes
    // const scene = new THREE.Group();
    //start of rendering TWENTY SEVEN CUBES


    function loadGltfs () {
      const gltfLoader = new GLTFLoader();
      gltfLoader.load(singlecube1, function(gltf) {
        let cube1 = gltf.scene;
        scene.attach(cube1);
        cube1.name = 'cube1';
      });
      gltfLoader.load(singlecube2, function(gltf) {
        let cube2 = gltf.scene;
        scene.attach(cube2);
        cube2.name = 'cube2';
      });
      gltfLoader.load(singlecube3, function(gltf) {
        let cube3 = gltf.scene;
        scene.attach(cube3);
        cube3.name = 'cube3';
      });
      gltfLoader.load(singlecube4, function(gltf) {
        let cube4 = gltf.scene;
        scene.attach(cube4);
        cube4.name = 'cube4';
      });
      gltfLoader.load(singlecube5, function(gltf) {
        let cube5 = gltf.scene;
        scene.attach(cube5);
        cube5.name = 'cube5';
      });
      gltfLoader.load(singlecube6, function(gltf) {
        let cube6 = gltf.scene;
        scene.attach(cube6);
        cube6.name = 'cube6';
      });
      gltfLoader.load(singlecube7, function(gltf) {
        let cube7 = gltf.scene;
        scene.attach(cube7);
        cube7.name = 'cube7';
      });
      gltfLoader.load(singlecube8, function(gltf) {
        let cube8 = gltf.scene;
        scene.attach(cube8);
        cube8.name = 'cube8';
      });
      gltfLoader.load(singlecube9, function(gltf) {
        let cube9 = gltf.scene;
        scene.attach(cube9);
        cube9.name = 'cube9';
      });
      gltfLoader.load(singlecube10, function(gltf) {
        let cube10 = gltf.scene;
        scene.attach(cube10);
        cube10.name = 'cube10';
      });
      gltfLoader.load(singlecube11, function(gltf) {
        let cube11 = gltf.scene;
        scene.attach(cube11);
        cube11.name = 'cube11';
      });
      gltfLoader.load(singlecube12, function(gltf) {
        let cube12 = gltf.scene;
        scene.attach(cube12);
        cube12.name = 'cube12';
      });
      gltfLoader.load(singlecube13, function(gltf) {
        let cube13 = gltf.scene;
        scene.attach(cube13);
        cube13.name = 'cube13';
      });
      gltfLoader.load(singlecube14, function(gltf) {
        let cube14 = gltf.scene;
        scene.attach(cube14);
        cube14.name = 'cube14';
      });
      gltfLoader.load(singlecube15, function(gltf) {
        let cube15 = gltf.scene;
        scene.attach(cube15);
        cube15.name = 'cube15';
      });
      gltfLoader.load(singlecube16, function(gltf) {
        let cube16 = gltf.scene;
        scene.attach(cube16);
        cube16.name = 'cube16';
      });
      gltfLoader.load(singlecube17, function(gltf) {
        let cube17 = gltf.scene;
        scene.attach(cube17);
        cube17.name = 'cube17';
      });
      gltfLoader.load(singlecube18, function(gltf) {
        let cube18 = gltf.scene;
        scene.attach(cube18);
        cube18.name = 'cube18';
      });
      gltfLoader.load(singlecube19, function(gltf) {
        let cube19 = gltf.scene;
        scene.attach(cube19);
        cube19.name = 'cube19';
      });
      gltfLoader.load(singlecube20, function(gltf) {
        let cube20 = gltf.scene;
        scene.attach(cube20);
        cube20.name = 'cube20';
      });
      gltfLoader.load(singlecube21, function(gltf) {
        let cube21 = gltf.scene;
        scene.attach(cube21);
        cube21.name = 'cube21';
      });
      gltfLoader.load(singlecube22, function(gltf) {
        let cube22 = gltf.scene;
        scene.attach(cube22);
        cube22.name = 'cube22';
      });
      gltfLoader.load(singlecube23, function(gltf) {
        let cube23 = gltf.scene;
        scene.attach(cube23);
        cube23.name = 'cube23';
      });
      gltfLoader.load(singlecube24, function(gltf) {
        let cube24 = gltf.scene;
        scene.attach(cube24);
        cube24.name = 'cube24';
      });
      gltfLoader.load(singlecube25, function(gltf) {
        let cube25 = gltf.scene;
        scene.attach(cube25);
        cube25.name = 'cube25';
      });
      gltfLoader.load(singlecube26, function(gltf) {
        let cube26 = gltf.scene;
        scene.attach(cube26);
        cube26.name = 'cube26';
      });
    }
    loadGltfs();
    //ending mini cubes finally and adding group of all of them to scene

    // scene.add(scene);
    // scene.position.set(0, 1, 0);

    console.log('SCENE CHILDREN', scene.children);

///////

//if it gets stuck when looking at the very bottom it could be that the raycasters in the very middle for the z slab are getting in the way? like the mouse is touching the ray so it thinks mouse is over cube? idk


    function animate(time) {
      requestAnimationFrame( animate );
      TWEEN.update(time);

      if (isAnimating) {
      } else {
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

export default Practice2Cube;