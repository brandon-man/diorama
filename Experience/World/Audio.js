import * as THREE from "three";
import Experience from "../Experience";

export default class Audio {
  constructor() {
    this.experience = new Experience();
    this.camera = this.experience.camera;

    this.setAudio();
  }
  setAudio() {
    // create an AudioListener and add it to the camera
    const listener = new THREE.AudioListener();

    // create a global audio source
    const sound = new THREE.Audio(listener);

    const playButton = document.getElementsByClassName("play-button");

    playButton[0].addEventListener("click", () => {
      if (sound.isPlaying === false) {
        // load a sound and set it as the Audio object's buffer
        const audioLoader = new THREE.AudioLoader();
        audioLoader.load("sounds/tears.mp3", function (buffer) {
          sound.setBuffer(buffer);
          sound.autoplay = true;
          sound.setLoop(true);
          sound.setVolume(0.5);
          sound.play();
          sound.isPlaying = true;
        });
      } else {
        sound.pause();
        sound.isPlaying = false;
      }
    });
  }

  resize() {}

  update() {}
}
