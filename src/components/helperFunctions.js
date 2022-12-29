import * as THREE from 'three';

function getCubePositions(scene, positionRay) {
  //takes in the scene and ray and returns an array of all cubes in every slab. positive x slab, positive y, etc
  var positions = {px: [], py: [], pz: [], x: [], y: [], z: [], nx: [], ny: [], nz: []};
  var intersectsAssignRay;

//positive x slab
  positionRay.ray.origin.copy(new THREE.Vector3(2, 5, 2));
  positionRay.ray.direction.copy({x: 0, y: -1, z: 0});
  intersectsAssignRay = positionRay.intersectObject(scene, true);

  //casting a ray directed toward position of the first cube in the positive x slab, and adding the cube that the ray hit
  for (let i = 0; i < intersectsAssignRay.length; i++) {
    if (!positions.px.includes(intersectsAssignRay[i].object.parent.parent)) {
      positions.px.push(intersectsAssignRay[i].object.parent.parent)
    }
  }
  //
  positionRay.ray.origin.copy(new THREE.Vector3(2, 5, 0));
  positionRay.ray.direction.copy({x: 0, y: -1, z: 0});
  intersectsAssignRay = positionRay.intersectObject(scene, true);

  for (let i = 0; i < intersectsAssignRay.length; i++) {
    if (!positions.px.includes(intersectsAssignRay[i].object.parent.parent)) {
      positions.px.push(intersectsAssignRay[i].object.parent.parent)
    }
  }
  //
  positionRay.ray.origin.copy(new THREE.Vector3(2, 5, -2));
  positionRay.ray.direction.copy({x: 0, y: -1, z: 0});
  intersectsAssignRay = positionRay.intersectObject(scene, true);

  for (let i = 0; i < intersectsAssignRay.length; i++) {
    if (!positions.px.includes(intersectsAssignRay[i].object.parent.parent)) {
      positions.px.push(intersectsAssignRay[i].object.parent.parent)
    }
  }


// positive y slab
  positionRay.ray.origin.copy(new THREE.Vector3(5, 2, 2));
  positionRay.ray.direction.copy({x: -1, y: 0, z: 0});
  intersectsAssignRay = positionRay.intersectObject(scene, true);

  for (let i = 0; i < intersectsAssignRay.length; i++) {
    if (!positions.py.includes(intersectsAssignRay[i].object.parent.parent)) {
      positions.py.push(intersectsAssignRay[i].object.parent.parent)
    }
  }
  //
  positionRay.ray.origin.copy(new THREE.Vector3(5, 2, 0));
  positionRay.ray.direction.copy({x: -1, y: 0, z: 0});
  intersectsAssignRay = positionRay.intersectObject(scene, true);

  for (let i = 0; i < intersectsAssignRay.length; i++) {
    if (!positions.py.includes(intersectsAssignRay[i].object.parent.parent)) {
      positions.py.push(intersectsAssignRay[i].object.parent.parent)
    }
  }
  //
  positionRay.ray.origin.copy(new THREE.Vector3(5, 2, -2));
  positionRay.ray.direction.copy({x: -1, y: 0, z: 0});
  intersectsAssignRay = positionRay.intersectObject(scene, true);

  for (let i = 0; i < intersectsAssignRay.length; i++) {
    if (!positions.py.includes(intersectsAssignRay[i].object.parent.parent)) {
      positions.py.push(intersectsAssignRay[i].object.parent.parent)
    }
  }


//positive z slab
  positionRay.ray.origin.copy(new THREE.Vector3(2, 5, 2));
  positionRay.ray.direction.copy({x: 0, y: -1, z: 0});
  intersectsAssignRay = positionRay.intersectObject(scene, true);

  for (let i = 0; i < intersectsAssignRay.length; i++) {
    if (!positions.pz.includes(intersectsAssignRay[i].object.parent.parent)) {
      positions.pz.push(intersectsAssignRay[i].object.parent.parent)
    }
  }
  //
  positionRay.ray.origin.copy(new THREE.Vector3(0, 5, 2));
  positionRay.ray.direction.copy({x: 0, y: -1, z: 0});
  intersectsAssignRay = positionRay.intersectObject(scene, true);

  for (let i = 0; i < intersectsAssignRay.length; i++) {
    if (!positions.pz.includes(intersectsAssignRay[i].object.parent.parent)) {
      positions.pz.push(intersectsAssignRay[i].object.parent.parent)
    }
  }
  //
  positionRay.ray.origin.copy(new THREE.Vector3(-2, 5, 2));
  positionRay.ray.direction.copy({x: 0, y: -1, z: 0});
  intersectsAssignRay = positionRay.intersectObject(scene, true);

  for (let i = 0; i < intersectsAssignRay.length; i++) {
    if (!positions.pz.includes(intersectsAssignRay[i].object.parent.parent)) {
      positions.pz.push(intersectsAssignRay[i].object.parent.parent)
    }
  }


//x slab
  positionRay.ray.origin.copy(new THREE.Vector3(0, 5, -2));
  positionRay.ray.direction.copy({x: 0, y: -1, z: 0});
  intersectsAssignRay = positionRay.intersectObject(scene, true);

  for (let i = 0; i < intersectsAssignRay.length; i++) {
    if (!positions.x.includes(intersectsAssignRay[i].object.parent.parent)) {
      positions.x.push(intersectsAssignRay[i].object.parent.parent)
    }
  }
  //
  positionRay.ray.origin.copy(new THREE.Vector3(0, 5, 0));
  positionRay.ray.direction.copy({x: 0, y: -1, z: 0});
  intersectsAssignRay = positionRay.intersectObject(scene, true);

  for (let i = 0; i < intersectsAssignRay.length; i++) {
    if (!positions.x.includes(intersectsAssignRay[i].object.parent.parent) && intersectsAssignRay[i].object.parent.parent.children.length < 20) {
      positions.x.push(intersectsAssignRay[i].object.parent.parent)
    }
  }
  //
  positionRay.ray.origin.copy(new THREE.Vector3(0, 5, 2));
  positionRay.ray.direction.copy({x: 0, y: -1, z: 0});
  intersectsAssignRay = positionRay.intersectObject(scene, true);

  for (let i = 0; i < intersectsAssignRay.length; i++) {
    if (!positions.x.includes(intersectsAssignRay[i].object.parent.parent)) {
      positions.x.push(intersectsAssignRay[i].object.parent.parent)
    }
  }


//y slab
  positionRay.ray.origin.copy(new THREE.Vector3(-5, 0, -2));
  positionRay.ray.direction.copy({x: 1, y: 0, z: 0});
  intersectsAssignRay = positionRay.intersectObject(scene, true);

  for (let i = 0; i < intersectsAssignRay.length; i++) {
    if (!positions.y.includes(intersectsAssignRay[i].object.parent.parent)) {
      positions.y.push(intersectsAssignRay[i].object.parent.parent)
    }
  }
  //
  positionRay.ray.origin.copy(new THREE.Vector3(-5, 0, 0));
  positionRay.ray.direction.copy({x: 1, y: 0, z: 0});
  intersectsAssignRay = positionRay.intersectObject(scene, true);

  for (let i = 0; i < intersectsAssignRay.length; i++) {
    if (!positions.y.includes(intersectsAssignRay[i].object.parent.parent) && intersectsAssignRay[i].object.parent.parent.children.length < 20) {
      positions.y.push(intersectsAssignRay[i].object.parent.parent)
    }
  }
  //
  positionRay.ray.origin.copy(new THREE.Vector3(-5, 0, 2));
  positionRay.ray.direction.copy({x: 1, y: 0, z: 0});
  intersectsAssignRay = positionRay.intersectObject(scene, true);

  for (let i = 0; i < intersectsAssignRay.length; i++) {
    if (!positions.y.includes(intersectsAssignRay[i].object.parent.parent)) {
      positions.y.push(intersectsAssignRay[i].object.parent.parent)
    }
  }

//z slab
  positionRay.ray.origin.copy(new THREE.Vector3(2, 5, 0));
  positionRay.ray.direction.copy({x: 0, y: -1, z: 0});
  intersectsAssignRay = positionRay.intersectObject(scene, true);

  for (let i = 0; i < intersectsAssignRay.length; i++) {
    if (!positions.z.includes(intersectsAssignRay[i].object.parent.parent)) {
      positions.z.push(intersectsAssignRay[i].object.parent.parent)
    }
  }
  //
  positionRay.ray.origin.copy(new THREE.Vector3(0, 5, 0));
  positionRay.ray.direction.copy({x: 0, y: -1, z: 0});
  intersectsAssignRay = positionRay.intersectObject(scene, true);

  for (let i = 0; i < intersectsAssignRay.length; i++) {
    if (!positions.z.includes(intersectsAssignRay[i].object.parent.parent) && intersectsAssignRay[i].object.parent.parent.children.length < 20) {
      positions.z.push(intersectsAssignRay[i].object.parent.parent)
    }
  }
  //
  positionRay.ray.origin.copy(new THREE.Vector3(-2, 5, 0));
  positionRay.ray.direction.copy({x: 0, y: -1, z: 0});
  intersectsAssignRay = positionRay.intersectObject(scene, true);

  for (let i = 0; i < intersectsAssignRay.length; i++) {
    if (!positions.z.includes(intersectsAssignRay[i].object.parent.parent)) {
      positions.z.push(intersectsAssignRay[i].object.parent.parent)
    }
  }


//negative x slab
  positionRay.ray.origin.copy(new THREE.Vector3(-2, 5, -2));
  positionRay.ray.direction.copy({x: 0, y: -1, z: 0});
  intersectsAssignRay = positionRay.intersectObject(scene, true);

  for (let i = 0; i < intersectsAssignRay.length; i++) {
    if (!positions.nx.includes(intersectsAssignRay[i].object.parent.parent)) {
      positions.nx.push(intersectsAssignRay[i].object.parent.parent)
    }
  }
  //
  positionRay.ray.origin.copy(new THREE.Vector3(-2, 5, 0));
  positionRay.ray.direction.copy({x: 0, y: -1, z: 0});
  intersectsAssignRay = positionRay.intersectObject(scene, true);

  for (let i = 0; i < intersectsAssignRay.length; i++) {
    if (!positions.nx.includes(intersectsAssignRay[i].object.parent.parent)) {
      positions.nx.push(intersectsAssignRay[i].object.parent.parent)
    }
  }
  //
  positionRay.ray.origin.copy(new THREE.Vector3(-2, 5, 2));
  positionRay.ray.direction.copy({x: 0, y: -1, z: 0});
  intersectsAssignRay = positionRay.intersectObject(scene, true);

  for (let i = 0; i < intersectsAssignRay.length; i++) {
    if (!positions.nx.includes(intersectsAssignRay[i].object.parent.parent)) {
      positions.nx.push(intersectsAssignRay[i].object.parent.parent)
    }
  }


//negative y slab
  positionRay.ray.origin.copy(new THREE.Vector3(-5, -2, -2));
  positionRay.ray.direction.copy({x: 1, y: 0, z: 0});
  intersectsAssignRay = positionRay.intersectObject(scene, true);

  for (let i = 0; i < intersectsAssignRay.length; i++) {
    if (!positions.ny.includes(intersectsAssignRay[i].object.parent.parent)) {
      positions.ny.push(intersectsAssignRay[i].object.parent.parent)
    }
  }
  //
  positionRay.ray.origin.copy(new THREE.Vector3(-5, -2, 0));
  positionRay.ray.direction.copy({x: 1, y: 0, z: 0});
  intersectsAssignRay = positionRay.intersectObject(scene, true);

  for (let i = 0; i < intersectsAssignRay.length; i++) {
    if (!positions.ny.includes(intersectsAssignRay[i].object.parent.parent)) {
      positions.ny.push(intersectsAssignRay[i].object.parent.parent)
    }
  }
  //
  positionRay.ray.origin.copy(new THREE.Vector3(-5, -2, 2));
  positionRay.ray.direction.copy({x: 1, y: 0, z: 0});
  intersectsAssignRay = positionRay.intersectObject(scene, true);

  for (let i = 0; i < intersectsAssignRay.length; i++) {
    if (!positions.ny.includes(intersectsAssignRay[i].object.parent.parent)) {
      positions.ny.push(intersectsAssignRay[i].object.parent.parent)
    }
  }


//negative z slab
  positionRay.ray.origin.copy(new THREE.Vector3(2, 5, -2));
  positionRay.ray.direction.copy({x: 0, y: -1, z: 0});
  intersectsAssignRay = positionRay.intersectObject(scene, true);

  for (let i = 0; i < intersectsAssignRay.length; i++) {
    if (!positions.nz.includes(intersectsAssignRay[i].object.parent.parent)) {
      positions.nz.push(intersectsAssignRay[i].object.parent.parent)
    }
  }
  //
  positionRay.ray.origin.copy(new THREE.Vector3(0, 5, -2));
  positionRay.ray.direction.copy({x: 0, y: -1, z: 0});
  intersectsAssignRay = positionRay.intersectObject(scene, true);

  for (let i = 0; i < intersectsAssignRay.length; i++) {
    if (!positions.nz.includes(intersectsAssignRay[i].object.parent.parent)) {
      positions.nz.push(intersectsAssignRay[i].object.parent.parent)
    }
  }
  //
  positionRay.ray.origin.copy(new THREE.Vector3(-2, 5, -2));
  positionRay.ray.direction.copy({x: 0, y: -1, z: 0});
  intersectsAssignRay = positionRay.intersectObject(scene, true);

  for (let i = 0; i < intersectsAssignRay.length; i++) {
    if (!positions.nz.includes(intersectsAssignRay[i].object.parent.parent)) {
      positions.nz.push(intersectsAssignRay[i].object.parent.parent)
    }
  }

  return positions;

}

var getSlabs = function (scene, mouse, camera, raycaster) {
  //returns face clicked, which slab and needs to be moved and which axis it needs to rotate on if user slides up or down, and which slab needs to be moved and which axis it needs to rotate on if user slides left or right

  var info = {face: '', upDown: {slab: '', rotate: ''}, rightLeft: {slab: '', rotate: ''}};

  //casting a ray and seeing the position of the cube it hit
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(scene);
  var facePoint = intersects[0].point;

  //seeing which face was clicked. after getting the absolute value of x, y, and z on the position vector of the clicked cube, the highest of the three will tell which axis the clicked face is on. then if that axis in the cube's position vector is negative, we can add a negative to our face, giving us which face of the cube was clicked
  var highest = [facePoint.x, 'x'];
  if (Math.abs(facePoint.y) > Math.abs(highest[0])) {
    highest = [facePoint.y, 'y'];
  };
  if (Math.abs(facePoint.z) > Math.abs(highest[0])) {
    highest = [facePoint.z, 'z'];
  }
  if (highest[0] > 0) {
    info.face = highest[1];
  } else {
    info.face = '-' + highest[1];
  }

  //depending on the face clicked and cube point clicked, we can add the corresponding slabs to our object to be used later when doing our rotation animation
  if (info.face === 'x' || info.face === '-x') {
    if (facePoint.z < -1) {
      info.upDown.slab = 'nz';
      info.upDown.rotate = 'z';
    } else if (facePoint.z > 1) {
      info.upDown.slab = 'pz';
      info.upDown.rotate = 'z';
    } else {
      info.upDown.slab = 'z';
      info.upDown.rotate = 'z';
    }

    if (facePoint.y < -1) {
      info.rightLeft.slab = 'ny';
      info.rightLeft.rotate = 'y';
    } else if (facePoint.y > 1) {
      info.rightLeft.slab = 'py';
      info.rightLeft.rotate = 'y';
    } else {
      info.rightLeft.slab = 'y';
      info.rightLeft.rotate = 'y';
    }
  }

  if (info.face === 'y' || info.face === '-y') {
    if (facePoint.x < -1) {
      info.upDown.slab = 'nx';
      info.upDown.rotate = 'x';
    } else if (facePoint.x > 1) {
      info.upDown.slab = 'px';
      info.upDown.rotate = 'x';
    } else {
      info.upDown.slab = 'x';
      info.upDown.rotate = 'x';
    }

    if (facePoint.z < -1) {
      info.rightLeft.slab = 'nz';
      info.rightLeft.rotate = 'z';
    } else if (facePoint.z > 1) {
      info.rightLeft.slab = 'pz';
      info.rightLeft.rotate = 'z';
    } else {
      info.rightLeft.slab = 'z';
      info.rightLeft.rotate = 'z';
    }
  }

  if (info.face === 'z' || info.face === '-z') {
    if (facePoint.x < -1) {
      info.upDown.slab = 'nx';
      info.upDown.rotate = 'x';
    } else if (facePoint.x > 1) {
      info.upDown.slab = 'px';
      info.upDown.rotate = 'x';
    } else {
      info.upDown.slab = 'x';
      info.upDown.rotate = 'x';
    }

    if (facePoint.y < -1) {
      info.rightLeft.slab = 'ny';
      info.rightLeft.rotate = 'y';
    } else if (facePoint.y > 1) {
      info.rightLeft.slab = 'py';
      info.rightLeft.rotate = 'y';
    } else {
      info.rightLeft.slab = 'y';
      info.rightLeft.rotate = 'y';
    }
  }

  return info;

}

var isItSolved = function(scene, rayCaster) {
  //returns true if cube is solved, false if not

  var solved = true;

  //casting a ray at every cube on a shared face to see if all the colors are the same. repeating this 4 times to check 4 sides, if the 4 sides' 9 cubes each have the same color, the cube is solved and variable solved stays true. else, solve becomes false.
  function makeRay(one, two, three, spacer, x, y, z, array) {
    rayCaster.ray.origin.copy(new THREE.Vector3(one, two, three));
    rayCaster.ray.direction.copy({x: x, y: y, z: z});
    var intersectsRay = rayCaster.intersectObject(scene, true);
    array.push(intersectsRay[0].object.material.color.r);
  }

  var arr1 = [];
  makeRay(-5, 2, 2, '', 1, 0, 0, arr1);
  makeRay(-5, 2, 0, '', 1, 0, 0, arr1);
  makeRay(-5, 2, -2, '', 1, 0, 0, arr1);
  makeRay(-5, 0, 2, '', 1, 0, 0, arr1);
  makeRay(-5, 0, 0, '', 1, 0, 0, arr1);
  makeRay(-5, 0, -2, '', 1, 0, 0, arr1);
  makeRay(-5, -2, 2, '', 1, 0, 0, arr1);
  makeRay(-5, -2, 0, '', 1, 0, 0, arr1);
  makeRay(-5, -2, -2, '', 1, 0, 0, arr1);

  var arr2 = [];
  makeRay(5, 2, 2, '', -1, 0, 0, arr2);
  makeRay(5, 2, 0, '', -1, 0, 0, arr2);
  makeRay(5, 2, -2, '', -1, 0, 0, arr2);
  makeRay(5, 0, 2, '', -1, 0, 0, arr2);
  makeRay(5, 0, 0, '', -1, 0, 0, arr2);
  makeRay(5, 0, -2, '', -1, 0, 0, arr2);
  makeRay(5, -2, 2, '', -1, 0, 0, arr2);
  makeRay(5, -2, 0, '', -1, 0, 0, arr2);
  makeRay(5, -2, -2, '', -1, 0, 0, arr2);

  var arr3 = [];
  makeRay(0, 5, 2, '', 0, -1, 0, arr3);
  makeRay(0, 5, 0, '', 0, -1, 0, arr3);
  makeRay(0, 5, -2, '', 0, -1, 0, arr3);
  makeRay(2, 5, 0, '', 0, -1, 0, arr3);
  makeRay(2, 5, 2, '', 0, -1, 0, arr3);
  makeRay(-2, 5, 0, '', 0, -1, 0, arr3);
  makeRay(2, 5, -2, '', 0, -1, 0, arr3);
  makeRay(-2, 5, 2, '', 0, -1, 0, arr3);
  makeRay(-2, 5, -2, '', 0, -1, 0, arr3);

  var arr4 = [];
  makeRay(0, 2, -5, '', 0, 0, 1, arr4);
  makeRay(0, 0, -5, '', 0, 0, 1, arr4);
  makeRay(0, -2, -5, '', 0, 0, 1, arr4);
  makeRay(2, 2, -5, '', 0, 0, 1, arr4);
  makeRay(2, 0, -5, '', 0, 0, 1, arr4);
  makeRay(2, -2, -5, '', 0, 0, 1, arr4);
  makeRay(-2, 2, -5, '', 0, 0, 1, arr4);
  makeRay(-2, 0, -5, '', 0, 0, 1, arr4);
  makeRay(-2, -2, -5, '', 0, 0, 1, arr4);

  var arr1first = arr1[0];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr1first) {
      solved = false;
    }
  }
  var arr2first = arr2[0];
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] !== arr2first) {
      solved = false;
    }
  }
  var arr3first = arr3[0];
  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] !== arr3first) {
      solved = false;
    }
  }
  var arr4first = arr4[0];
  for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] !== arr4first) {
      solved = false;
    }
  }

  return solved;

}

export { getCubePositions, getSlabs, isItSolved }
