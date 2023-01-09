import Experience from "../Experience";
import Room from "./Room";
import Background from "./Background";
import Floor from "./Floor";
import Environment from "./Environment";
import Controls from "./Controls";
import Audio from "./Audio";
export default class World {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;
    this.resources = this.experience.resources;

    this.resources.on("ready", () => {
      this.environment = new Environment();
      this.room = new Room();
      this.background = new Background();
      this.floor = new Floor();
      this.controls = new Controls();
      this.audio = new Audio();
    });
  }

  resize() {}

  update() {
    if (this.room) {
      this.room.update();
    }

    if (this.controls) {
      this.controls.update();
    }
  }
}
