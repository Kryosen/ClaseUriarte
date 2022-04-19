// let cursors;
// let player;
// let showDebug = false

class Scene3 extends Phaser.Scene {
  constructor() {
    super("Lab");
  }

  preload() {
    // SE CARGA EL MAPA DEL JUEGO CON SUS FUNCIONES (BLOQUES DE COLISION) MEDIANTE UN PNG HECHO POR LA APLICACION TEXTUREPACKER+
    this.load.image(
      "tiles",
      "Images/Game Boy _ GBC - Pokémon Red _ Blue - Tileset.png"
    );
    this.load.tilemapTiledJSON("map2", "Images/Pokemon-map-lab-JSON.tmj");

    // SE UNA UN ATLAS DE IMAGENES PARA TENER TODAS LAS TEXTURAS DEL PERSONAJE EN MOVIMIENTO EN UN SOLO PNG (Spritesheet)

    this.load.atlas(
      "atlas",
      "Images/Atlas/atlasPlayer.png",
      "Images/Atlas/atlasPlayer.json"
    );

    this.load.audio("oak lab", ["Sounds/oak lab.mp3"]);
  }

  create() {
    this.bgMuusic = this.sound.add("oak lab", {
      volume: 0.3,
      loop: false,
    });
    this.bgMuusic.play();

    const map = this.make.tilemap({ key: "map2" });

    // LOS PARAMETROS SON  LOS MISMOS NOMBRES USADOS EN UNA APLICACION LLAMADA TILED Y PASAN A SER LAS JEY DE CADA CAPA DEL JUEGO

    const tileset = map.addTilesetImage(
      "Game Boy _ GBC - Pokémon Red _ Blue - Tileset",
      "tiles"
    );

    // PARAMETROS: NOMBRES DE CADA CAPA DEL JUEGO EN TILED
    const belowLayer = map.createLayer("Floor", tileset, 0, 0);
    const worldLayer = map.createLayer("Middle", tileset, 0, 0);
    const aboveLayer = map.createLayer("Top", tileset, 0, 0);

    worldLayer.setCollisionByProperty({ collides: true });

    // ACA ASIGNAMOS LA CANTIDAD DE CAPAS QUE VA A HABER EN EL JUEGO PARA QUE EXISTA PROFUNDIDAD DENTRO DEL MAPA (SI VAS A ATRAS DE LOS TECHOS DE LAS CASAS NO PODES VER AL PERSONAJE)
    aboveLayer.setDepth(10);

    // EN TILED CREAMOS UN OBJETO LLAMADO SPAWN POINT PARA POSICIONAR AL PERSONAJE AL EMPEZAR EL JUEGO
    const spawnPoint = map.findObject("Objects", (obj) => obj.name === place);

    // CREAMOS UNA CAJA ALREDEDOR DEL PERSONAJE PARA QUE PUEDA INTERACTUAR CON LAS FISICAS DEL JUEGO
    player = this.physics.add
      .sprite(spawnPoint.x + 6, spawnPoint.y, "atlas", "trainer-front")
      .setSize(14, 14)
      .setOffset(1, 1);

    // ESTO CHEQUEA LAS COLISIONES DEL PERSONAJE CON EL JUEGO
    this.physics.add.collider(player, worldLayer);

    // ACA SE CREAN LAS ANIMACIONES DEL PERSONAJE CON RESPECTO A LA IMAGEN DEL ATLAS PARA PODER SER USADAN EN EL JUEGO
    const anims = this.anims;
    anims.create({
      key: "trainer-left-walk",
      frames: anims.generateFrameNames("atlas", {
        prefix: "trainer-left-walk.",
        start: 0,
        end: 3,
        zeroPad: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });
    anims.create({
      key: "trainer-right-walk",
      frames: anims.generateFrameNames("atlas", {
        prefix: "trainer-right-walk.",
        start: 0,
        end: 3,
        zeroPad: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });
    anims.create({
      key: "trainer-front-walk",
      frames: anims.generateFrameNames("atlas", {
        prefix: "trainer-front-walk.",
        start: 0,
        end: 3,
        zeroPad: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });
    anims.create({
      key: "trainer-back-walk",
      frames: anims.generateFrameNames("atlas", {
        prefix: "trainer-back-walk.",
        start: 0,
        end: 3,
        zeroPad: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });

    //SE CREA LA CAMARA PARA QUE SIGA AL PERSONAJE
    const camera = this.cameras.main;
    camera.startFollow(player);
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    cursors = this.input.keyboard.createCursorKeys();

    //  ACA AGREGUE UN  COMANDO QUE CREA UNA CAPA CON LOS OBJETOS COLISION PARA PODER VER COMO INTERACTUA EL PERSONAJE CON LOS OTROS OBJETOS DEL MAPA. SE ACTIVA CON LA TECLA D
    this.input.keyboard.once("keydown-D", (event) => {
      this.physics.world.createDebugGraphic();

      const graphics = this.add.graphics().setAlpha(0.75).setDepth(20);
      worldLayer.renderDebug(graphics, {
        tileColor: null, // COLOR DE LOS OBJETOS SIN COLISION
        collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // COLOR DE LOS OBJETOS CON COLISION
        faceColor: new Phaser.Display.Color(40, 39, 37, 255), // COLO DE LOS BORDES DE COLISION
      });
    });

    const worldMap = map.findObject(
      "Objects",
      (obj) => obj.name === "worldMap"
    );

    const worldMap2 = map.findObject(
      "Objects",
      (obj) => obj.name === "worldMap2"
    );

    const worldMap3 = map.findObject(
      "Objects",
      (obj) => obj.name === "worldMap3"
    );

    this.worldMap = createSpawn(worldMap);

    this.worldMap2 = createSpawn(worldMap2);

    this.worldMap3 = createSpawn(worldMap3);
  }

  update(time, delta) {
    const speed = 75;
    const prevVelocity = player.body.velocity.clone();

    // DETIENE AL PERSONAJE PARA QUE NO SIGA CAMINANDO EN CASO DE COLISION
    player.body.setVelocity(0);

    // MOVIMIENTO HORIZONTAL
    if (cursors.left.isDown) {
      player.body.setVelocityX(-speed);
    } else if (cursors.right.isDown) {
      player.body.setVelocityX(speed);
    }

    // MOVIMIENTO VERTICAL
    if (cursors.up.isDown) {
      player.body.setVelocityY(-speed);
    } else if (cursors.down.isDown) {
      player.body.setVelocityY(speed);
    }

    // PARA QUE EL PERSONAJE NO SE MUEVA MAS RAPDIO EN DIAGONAL
    player.body.velocity.normalize().scale(speed);

    // ACTUALIZA LA TEXTURA DEL PERSONAJE DEPENDIENDO DE LA TECLA QUE ESTEMOS TOCANDO PARA MOVER AL PERSONAJE
    if (cursors.left.isDown) {
      player.anims.play("trainer-left-walk", true);
    } else if (cursors.right.isDown) {
      player.anims.play("trainer-right-walk", true);
    } else if (cursors.up.isDown) {
      player.anims.play("trainer-back-walk", true);
    } else if (cursors.down.isDown) {
      player.anims.play("trainer-front-walk", true);
    } else {
      player.anims.stop();

      // SI NO NOS MOVEMOS, POSICIONA AL PERSONAJE SIN MOVERSE EN UNA DE LAS DIRECIONES
      if (prevVelocity.x < 0) player.setTexture("atlas", "trainer-left");
      else if (prevVelocity.x > 0) player.setTexture("atlas", "trainer-right");
      else if (prevVelocity.y < 0) player.setTexture("atlas", "trainer-back");
      else if (prevVelocity.y > 0) player.setTexture("atlas", "trainer-front");
    }

    if (
      this.worldMap.contains(
        player.x + player.width / 3,
        player.y + player.height / 3
      )
    ) {
      this.bgMuusic.stop();
      place = "Spawn Point Lab";
      this.scene.start("playGame");
    }

    if (
      this.worldMap2.contains(
        player.x + player.width / 3,
        player.y + player.height / 3
      )
    ) {
      this.bgMuusic.stop();
      place = "Spawn Point House";
      this.scene.start("playGame");
    }

    if (
      this.worldMap3.contains(
        player.x + player.width / 3,
        player.y + player.height / 3
      )
    ) {
      this.bgMuusic.stop();
      place = "Spawn Point House2";
      this.scene.start("playGame");
    }
  }
}
