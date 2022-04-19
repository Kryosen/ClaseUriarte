let opening;

class Scene1 extends Phaser.Scene {
  constructor() {
    super("gameMenu");
  }

  preload() {
    // SE CARGA EL MAPA DEL JUEGO CON SUS FUNCIONES (BLOQUES DE COLISION) MEDIANTE UN PNG HECHO POR LA APLICACION TEXTUREPACKER

    this.load.audio("opening", ["Sounds/opening.mp3"]);
  }

  create() {
    this.bgMuusic = this.sound.add("opening", { volume: 0.3, loop: false });
    this.bgMuusic.play();

    this.add.text(40, 95, "Bienvenido a Pokemon Red");
    setTimeout(() => {
      this.bgMuusic.stop();
      this.scene.start("playGame");
    }, 10000);
  }
}
