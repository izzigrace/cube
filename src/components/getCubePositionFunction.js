import * as THREE from 'three';

function getCubePositions(scene) {
  var positions = {px: [], py: [], pz: [], x: [], y: [], z: [], nx: [], ny: [], nz: []};
  var positionRay = new THREE.Raycaster();
  var intersectsAssignRay

//positive x slab
  positionRay.ray.origin.copy(new THREE.Vector3(2, 5, 2));
  positionRay.ray.direction.copy({x: 0, y: -1, z: 0});
  intersectsAssignRay = positionRay.intersectObject(scene, true);

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
    console.log('erm', intersectsAssignRay[i].object.parent.parent);
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
    console.log('erm', intersectsAssignRay[i].object.parent.parent);
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

}

module.exoports = {
  getCubePositions: getCubePositions
}