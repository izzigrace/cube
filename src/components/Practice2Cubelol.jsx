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


// fix (0, 1, 0) shit with scene vs wholeCube group



//slabs of -z or +z etc to see location
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

    // window.addEventListener('pointerup', (event) => {
    //   controls.enabled = false;
    // })

    //rotate on mouse scroll
    // window.addEventListener('wheel', onMouseWheel, false);
    // function onMouseWheel (event) {
    //   // event.preventDefault();
    //   scene.rotation.y += (event.deltaX) * 0.008;
    //   scene.rotation.x += (event.deltaY) * 0.008;
    // } sadly had to get rid of this


  const sceneRaycaster = new THREE.Raycaster();

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

    sceneRaycaster.setFromCamera(mouse, camera);
    const intersectsCube = sceneRaycaster.intersectObject(scene);
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
      console.log('ray direction', raycaster.ray.direction);

      // controls.enabled = true;
      // if (intersects.length === 0) {
      //   return;
      // }
      // controls.enabled = false;
      // console.log(scene.children);

      // xAxisGroup.push(intersects[0].object.parent);
      // yAxisGroup.push(intersects[0].object.parent);

      var facePoint = intersects[0].point;
      console.log('intersects[0]', intersects[0].object.geometry);
      console.log('this is the clicked cube', intersects[0].object.parent);
      var positionArray = intersects[0].object.geometry.attributes.position.array;
      var [x, y, z] = [positionArray[34*3], positionArray[34*3 + 1], positionArray[34*3 + 2]];
      console.log(x, y, z);
      console.log('this is the clicked cube position', x, y, z);


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
      // What is this down here doing
      setTimeout(() => {
        isAnimating = false;
        while (rotateGroup.children.length) {
          scene.attach(rotateGroup.children[0]);
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
    // const scene = new THREE.Group();
    //start of rendering TWENTY SEVEN CUBES
    const gltfLoader = new GLTFLoader();
    var groupOfCube1 = new THREE.Group();
    scene.add(groupOfCube1);
    var groupOfCube2 = new THREE.Group();
    scene.add(groupOfCube2);
    var groupOfCube3 = new THREE.Group();
    scene.add(groupOfCube3);
    var groupOfCube4 = new THREE.Group();
    scene.add(groupOfCube4);
    var groupOfCube5 = new THREE.Group();
    scene.add(groupOfCube5);
    var groupOfCube6 = new THREE.Group();
    scene.add(groupOfCube6);
    var groupOfCube7 = new THREE.Group();
    scene.add(groupOfCube7);
    var groupOfCube8 = new THREE.Group();
    scene.add(groupOfCube8);
    var groupOfCube9 = new THREE.Group();
    scene.add(groupOfCube9);
    var groupOfCube10 = new THREE.Group();
    scene.add(groupOfCube10);
    var groupOfCube11 = new THREE.Group();
    scene.add(groupOfCube11);
    var groupOfCube12 = new THREE.Group();
    scene.add(groupOfCube12);
    var groupOfCube13 = new THREE.Group();
    scene.add(groupOfCube13);
    var groupOfCube14 = new THREE.Group();
    scene.add(groupOfCube14);
    var groupOfCube15 = new THREE.Group();
    scene.add(groupOfCube15);
    var groupOfCube16 = new THREE.Group();
    scene.add(groupOfCube16);
    var groupOfCube17 = new THREE.Group();
    scene.add(groupOfCube17);
    var groupOfCube18 = new THREE.Group();
    scene.add(groupOfCube18);
    var groupOfCube19 = new THREE.Group();
    scene.add(groupOfCube19);
    var groupOfCube20 = new THREE.Group();
    scene.add(groupOfCube20);
    var groupOfCube21 = new THREE.Group();
    scene.add(groupOfCube21);
    var groupOfCube22 = new THREE.Group();
    scene.add(groupOfCube22);
    var groupOfCube23 = new THREE.Group();
    scene.add(groupOfCube23);
    var groupOfCube24 = new THREE.Group();
    scene.add(groupOfCube24);
    var groupOfCube25 = new THREE.Group();
    scene.add(groupOfCube25);
    var groupOfCube26 = new THREE.Group();
    scene.add(groupOfCube26);


    function loadGltfs () {
      gltfLoader.load(singlecube1, function(gltf) {
        let cube1 = gltf.scene;
        groupOfCube1.attach(cube1);
        cube1.name = 'cube1';
      });
      gltfLoader.load(singlecube2, function(gltf) {
        let cube2 = gltf.scene;
        groupOfCube2.attach(cube2);
        cube2.name = 'cube2';
      });
      gltfLoader.load(singlecube3, function(gltf) {
        let cube3 = gltf.scene;
        groupOfCube3.attach(cube3);
        cube3.name = 'cube3';
      });
      gltfLoader.load(singlecube4, function(gltf) {
        let cube4 = gltf.scene;
        groupOfCube4.attach(cube4);
        cube4.name = 'cube4';
      });
      gltfLoader.load(singlecube5, function(gltf) {
        let cube5 = gltf.scene;
        groupOfCube5.attach(cube5);
        cube5.name = 'cube5';
      });
      gltfLoader.load(singlecube6, function(gltf) {
        let cube6 = gltf.scene;
        groupOfCube6.attach(cube6);
        cube6.name = 'cube6';
      });
      gltfLoader.load(singlecube7, function(gltf) {
        let cube7 = gltf.scene;
        groupOfCube7.attach(cube7);
        cube7.name = 'cube7';
      });
      gltfLoader.load(singlecube8, function(gltf) {
        let cube8 = gltf.scene;
        groupOfCube8.attach(cube8);
        cube8.name = 'cube8';
      });
      gltfLoader.load(singlecube9, function(gltf) {
        let cube9 = gltf.scene;
        groupOfCube9.attach(cube9);
        cube9.name = 'cube9';
      });
      gltfLoader.load(singlecube10, function(gltf) {
        let cube10 = gltf.scene;
        groupOfCube10.attach(cube10);
        cube10.name = 'cube10';
      });
      gltfLoader.load(singlecube11, function(gltf) {
        let cube11 = gltf.scene;
        groupOfCube11.attach(cube11);
        cube11.name = 'cube11';
      });
      gltfLoader.load(singlecube12, function(gltf) {
        let cube12 = gltf.scene;
        groupOfCube12.attach(cube12);
        cube12.name = 'cube12';
      });
      gltfLoader.load(singlecube13, function(gltf) {
        let cube13 = gltf.scene;
        groupOfCube13.attach(cube13);
        cube13.name = 'cube13';
      });
      gltfLoader.load(singlecube14, function(gltf) {
        let cube14 = gltf.scene;
        groupOfCube14.attach(cube14);
        cube14.name = 'cube14';
      });
      gltfLoader.load(singlecube15, function(gltf) {
        let cube15 = gltf.scene;
        groupOfCube15.attach(cube15);
        cube15.name = 'cube15';
      });
      gltfLoader.load(singlecube16, function(gltf) {
        let cube16 = gltf.scene;
        groupOfCube16.attach(cube16);
        cube16.name = 'cube16';
      });
      gltfLoader.load(singlecube17, function(gltf) {
        let cube17 = gltf.scene;
        groupOfCube17.attach(cube17);
        cube17.name = 'cube17';
      });
      gltfLoader.load(singlecube18, function(gltf) {
        let cube18 = gltf.scene;
        groupOfCube18.attach(cube18);
        cube18.name = 'cube18';
      });
      gltfLoader.load(singlecube19, function(gltf) {
        let cube19 = gltf.scene;
        groupOfCube19.attach(cube19);
        cube19.name = 'cube19';
      });
      gltfLoader.load(singlecube20, function(gltf) {
        let cube20 = gltf.scene;
        groupOfCube20.attach(cube20);
        cube20.name = 'cube20';
      });
      gltfLoader.load(singlecube21, function(gltf) {
        let cube21 = gltf.scene;
        groupOfCube21.attach(cube21);
        cube21.name = 'cube21';
      });
      gltfLoader.load(singlecube22, function(gltf) {
        let cube22 = gltf.scene;
        groupOfCube22.attach(cube22);
        cube22.name = 'cube22';
      });
      gltfLoader.load(singlecube23, function(gltf) {
        let cube23 = gltf.scene;
        groupOfCube23.attach(cube23);
        cube23.name = 'cube23';
      });
      gltfLoader.load(singlecube24, function(gltf) {
        let cube24 = gltf.scene;
        groupOfCube24.attach(cube24);
        cube24.name = 'cube24';
      });
      gltfLoader.load(singlecube25, function(gltf) {
        let cube25 = gltf.scene;
        groupOfCube25.attach(cube25);
        cube25.name = 'cube25';
      });
      gltfLoader.load(singlecube26, function(gltf) {
        let cube26 = gltf.scene;
        groupOfCube26.attach(cube26);
        cube26.name = 'cube26';
      });
    }
    loadGltfs();
    //ending mini cubes finally and adding group of all of them to scene
    // scene.add(scene);
    // scene.position.set(0, 1, 0);


    // setTimeout(() => {
    //   for (let i = 0; i < scene.children.length; i++) {
    //     if (scene.children[i].children[0] && scene.children[i].children[0].children[0].position.x > 0) {
    //       scene.children[i].children[0].children[0].children[0].material.color.set(0xff0000); //set color red
    //     }
    //   }
    // }, 10000);

    console.log('SCENE CHILDREN', scene.children);


    // var xax = new THREE.Group();
    // scene.attach(xax);
    // xax.name = 'xax';
    // xax.position.set(0, 1, 0);

    // setTimeout(() => {
    //   console.log('first position', scene.children[5].children[0].children[0].matrixWorld);
    //   scene.children[5].children[0].rotation.y += (PI / 2);
    //   scene.children[5].children[0].updateMatrix(true)
    //   scene.children[5].children[0].updateMatrixWorld();
    // }, 1000);
    // setTimeout(() => {
    //   console.log('second position', scene.children[5].children[0].children[0].matrixWorld);
    //   console.log('distance', scene.children[5].children[0].children[0].position.distanceTo(scene.children[4].position));
    // }, 2000)


    //raycaster from (0, 0, 0) to everycube, get direction and
    var positions = {};
    var positionRay = new THREE.Raycaster();

    setTimeout(() => {
      // positionRay.setFromCamera(mouse, camera);
      positionRay.ray.origin.copy(new THREE.Vector3(2, 5, 2));
      positionRay.ray.direction.copy({x: 0, y: -3, z: 0});
      var intersectsAssignRay = positionRay.intersectObject(scene, true);
      console.log('ray position in assign func intersects', intersectsAssignRay);
      console.log('wtf', positionRay.ray.origin);
      scene.add(new THREE.ArrowHelper(positionRay.ray.direction, positionRay.ray.origin, 300, 0xff0000) );
      for (let i = 0; i < intersectsAssignRay.length; i++) {

      }
    }, 1000)
      // iterate through cubes, make raycaster go from center to cube, see what axis it traveled on, put that axis as the object key and the cube as the property in an object for positions
      // {+x: [cubeGroup1, cubeGroup2] +y: []}


///////


// setTimeout(() => {
//   var xax = [];
//   for (let i = 0; i < scene.children.length; i++) {
//     if (scene.children[i].children[0] && scene.children[i].children[0].children[0].position.y > 0) {
//       xax.push(scene.children[i].children[0]);
//     }
//   }

// //////////
// var rotato = xax[0].rotation;
// var tween1 = new TWEEN.Tween({rY: rotato.y})
//   .to( {rY: rotato.y + (PI / 2)}, 400)
//       .easing(TWEEN.Easing.Quintic.Out)
//   .onComplete(() => {
//     // remove cubes from group
//     console.log('scene children', scene.children);
//     console.log('xax', xax);
//     console.log('TWEEN COMPLETED :)))))))');
//   })

//   console.log(xax[0].lookAt(new THREE.Vector3(0, 0, 0)));
//   console.log(xax[0].lookAt(new THREE.Vector3(0, 0, 0)));
// tween1.onUpdate((object: {rY: number}, elapsed: number) => {
//   // scene.children[5].rotation.y = object.rY;
//   // scene.children[4].rotation.y = object.rY;
//     for (let i = 0; i < xax.length; i++) {
//       xax[i].parent.rotation.y = object.rY;
//       // xax[i].rotateOnWorldAxis (new THREE.Vector3(), object.rY );
//     }
//     // xax.rotation.y = object.rY;
// })

// tween1.start();

// //i could have them each have their own group and the group only contains the one cube, and then have the groups position be 0,0 and rotate the group?


// // xax.rotation.y += (PI / 2);
// ///////////

//   // xax.rotation.y += 3.14;
//   // scene.attach(xax);

// }, 1000);




    // function tRotate( obj, angles, delay, pause ) {
    //   console.log('CONSOLE LOGGGGGGGG', obj);
    //   new TWEEN.Tween(scene.rotation)
    //           .delay(pause)
    //           .to( {
    //                   x: obj.rotation._x + angles.x,
    //                   y: obj.rotation._y + angles.y,
    //                   z: obj.rotation._z + angles.z
    //               }, delay )
    //           .onComplete(function() {
    //             setTimeout( tRotate, pause, obj, angles, delay, pause );
    //             console.log('VBUIREBVIUEBNVIUDANUFISALBFNSDIABNCUIABNUSDILBNVCUIDOSBNVCIUDSAKBVNDJKZBVNDUILSAHNFUISFBNCUIOWHNCFJUIWOAHDNCUIOWH');
    //           })
    //           .start();
    //   }
    //   tRotate(scene, {x:0,y:-Math.PI/2,z:0}, 1000, 1000 );




    let floatCompare = ( a, b ) => Math.abs(a-b)<.05;

    function animate(time) {
      requestAnimationFrame( animate );
      TWEEN.update(time);
      if (isAnimating) {
        // rotateGroup.quaternion.slerp(rotationTargetGroup.quaternion, 0.2);
        rotateSideFunction();
        if (floatCompare(rotateGroup.rotation[xyorz], isItEqualPi)) {
          isAnimating = false;
          rotateGroup.rotation[xyorz] = isItEqualPi;
        }
      } else {
        while (rotateGroup.children.length) {
          scene.attach(rotateGroup.children[0]);
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

export default Practice2Cube;