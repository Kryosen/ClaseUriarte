// CONFIGURACION DEL CANVAS PARA EL JUEGO

let place = "Spawn Point";

function createSpawn(point) {
  punto = new Phaser.Geom.Rectangle(
    point.x,
    point.y,
    point.width,
    point.height
  );

  return punto;
}

const config = {
  type: Phaser.AUTO,
  width: 300,
  height: 200,
  parent: "game-container",
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
  scene: [Scene1, Scene2, Scene3],
};

const game = new Phaser.Game(config);
