import * as THREE from "three";
import Experience from "../Experience";

export default class Background {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.setBackgroundColor();
  }

  setBackgroundColor() {
    const bgColor = new THREE.Color("skyblue");
    this.scene.background = bgColor;
  }

  resize() {}

  update() {}
}
