import * as THREE from "three";
import Experience from "../Experience";

export default class Floor {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.setFloor();
  }

  setFloor() {
    this.geometry = new THREE.CircleGeometry(3, 32);
    this.material = new THREE.MeshStandardMaterial({
      color: 0xf4b183,
      side: THREE.DoubleSide,
    });
    this.circle = new THREE.Mesh(this.geometry, this.material);
    this.circle.rotation.x = Math.PI / 2;
    this.circle.position.y = -0.3;
    this.circle.receiveShadow = true;
    this.scene.add(this.circle);
  }

  resize() {}

  update() {}
}
