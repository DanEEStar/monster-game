// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import MarioMovementController, {
  type MarioInput,
} from "../objects/MarioMovementController";
/* END-USER-IMPORTS */

export default class Platformer extends Phaser.Scene {

	constructor() {
		super("Platformer");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// platformerMap
		this.cache.tilemap.add("platformerMap_115a4612-3b00-4198-ac3f-d5eafd86ca7d", {
			format: 1,
			data: {
				width: 40,
				height: 22,
				orientation: "orthogonal",
				tilewidth: 16,
				tileheight: 16,
				tilesets: [
					{
						columns: 16,
						margin: 0,
						spacing: 0,
						tilewidth: 16,
						tileheight: 16,
						tilecount: 192,
						firstgid: 1,
						image: "Grassy_Fields_Tileset",
						name: "Grassy_Fields_Tileset",
						imagewidth: 256,
						imageheight: 192,
					},
				],
				layers: [
					{
						type: "tilelayer",
						name: "ground",
						width: 40,
						height: 22,
						opacity: 1,
						data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 168, 173, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					},
					{
						type: "tilelayer",
						name: "cosmetic",
						width: 40,
						height: 22,
						opacity: 1,
						data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 0, 0, 0, 0, 0, 0, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 0, 0, 0, 0, 0, 0, 0, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 156, 156, 156, 156, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 0, 0, 0, 0, 0, 0, 0, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 0, 0, 0, 0, 35, 156, 156, 156, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 154, 154, 154, 154, 154, 154, 154, 154, 154, 0, 0, 35, 35, 35, 35, 35, 35, 0, 0, 0, 35, 35, 156, 156, 156, 156, 35, 35, 35, 35, 35, 35, 35, 109, 109, 109, 109, 109, 35, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 27, 0, 0, 0, 35, 35, 35, 35, 35, 35, 35, 125, 125, 125, 125, 125, 35, 35, 35, 35, 87, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 169, 43, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 141, 141, 141, 141, 141, 35, 35, 35, 102, 103, 104, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 2, 43, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 0, 0, 0, 0, 0, 35, 35, 35, 118, 119, 120, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 33, 59, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 135, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 0, 0, 0, 0, 0, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 0, 0, 0, 0, 35, 35, 123, 124, 35, 35, 35, 35, 156, 156, 153, 151, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 139, 140, 35, 35, 35, 35, 105, 106, 0, 0, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 0, 0, 0, 0, 35, 35, 121, 122, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 156, 137, 138, 156, 156, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 173, 35, 169, 35, 35, 35, 35, 35, 35, 0, 0, 0, 0, 0, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 0, 0, 0, 0, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 167, 35, 172, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 0, 0, 0, 0, 0, 0, 35, 35, 35, 35, 35, 0, 0, 0, 0, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					},
				],
			},
		});
		const platformerMap = this.add.tilemap("platformerMap_115a4612-3b00-4198-ac3f-d5eafd86ca7d");
		platformerMap.addTilesetImage("Grassy_Fields_Tileset");

		// ground
		const ground = platformerMap.createLayer("ground", ["Grassy_Fields_Tileset"], 0, 0)!;
		ground.scaleX = 2;
		ground.scaleY = 2;

		// cosmetic
		const cosmetic = platformerMap.createLayer("cosmetic", ["Grassy_Fields_Tileset"], 0, 0)!;
		cosmetic.scaleX = 2;
		cosmetic.scaleY = 2;

		this.platformerMap = platformerMap;

		this.events.emit("scene-awake");
	}

	private platformerMap!: Phaser.Tilemaps.Tilemap;

	/* START-USER-CODE */

  private static readonly PLAYER_TEXTURE_KEY = "platformer-player-placeholder";
  private static readonly PLAYER_WIDTH = 24;
  private static readonly PLAYER_HEIGHT = 32;
  private static readonly SPAWN_COLUMN = 5;

  private groundLayer!: Phaser.Tilemaps.TilemapLayer;
  private player!: Phaser.Physics.Arcade.Sprite;
  private movementController!: MarioMovementController;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private movementKeys!: {
    left: Phaser.Input.Keyboard.Key;
    right: Phaser.Input.Keyboard.Key;
  };
  private jumpKey!: Phaser.Input.Keyboard.Key;
  private runKey!: Phaser.Input.Keyboard.Key;
  private debugText!: Phaser.GameObjects.Text;
  private latestInput: MarioInput = {
    left: false,
    right: false,
    run: false,
    jumpDown: false,
    jumpPressed: false,
  };

  create(): void {
    this.editorCreate();

    this.groundLayer = this.getGroundLayer();
    // Phaser represents empty cells as -1 at runtime, while the scene data uses 0.
    this.platformerMap.setCollisionByExclusion([-1, 0], true, true, this.groundLayer);

    const worldWidth = this.platformerMap.widthInPixels * this.groundLayer.scaleX;
    const worldHeight = this.platformerMap.heightInPixels * this.groundLayer.scaleY;

    this.cameras.main.setBounds(0, 0, worldWidth, worldHeight);

    this.createPlayerTexture();
    const spawn = this.getSpawnPosition();

    this.player = this.physics.add.sprite(
      spawn.x,
      spawn.y,
      Platformer.PLAYER_TEXTURE_KEY,
    );
    this.player.setDisplaySize(Platformer.PLAYER_WIDTH, Platformer.PLAYER_HEIGHT);
    this.player.setDepth(10);

    const body = this.player.body as Phaser.Physics.Arcade.Body;
    body.setSize(Platformer.PLAYER_WIDTH, Platformer.PLAYER_HEIGHT, true);
    body.allowGravity = false;

    this.physics.add.collider(this.player, this.groundLayer);

    this.setupInput();
    this.movementController = new MarioMovementController(this.player);
    this.physics.world.on("worldstep", this.updateMovement, this);
    this.events.once("shutdown", this.removePhysicsStepListener, this);
    this.debugText = this.add
      .text(16, 16, "", {
        backgroundColor: "#111827",
        color: "#ffffff",
        fontFamily: "monospace",
        fontSize: "16px",
      })
      .setPadding(8)
      .setScrollFactor(0)
      .setDepth(100);
  }

  update(): void {
    const input = this.readInput();
    this.latestInput = {
      ...input,
      // Keep the edge until the next fixed physics step consumes it.
      jumpPressed: this.latestInput.jumpPressed || input.jumpPressed,
    };

    if (this.player.y > this.getGroundBottom() + Platformer.PLAYER_HEIGHT) {
      this.respawnPlayer();
    }

    this.updateDebugText();
  }

  private updateMovement(deltaSeconds: number): void {
    this.movementController.update(deltaSeconds * 1000, this.latestInput);
    this.latestInput.jumpPressed = false;
  }

  private removePhysicsStepListener(): void {
    this.physics.world.off("worldstep", this.updateMovement, this);
  }

  private getGroundLayer(): Phaser.Tilemaps.TilemapLayer {
    const layer = this.platformerMap.getLayer("ground");

    if (!layer) {
      throw new Error("Platformer scene requires a ground tilemap layer.");
    }

    return layer.tilemapLayer;
  }

  private createPlayerTexture(): void {
    if (this.textures.exists(Platformer.PLAYER_TEXTURE_KEY)) {
      return;
    }

    const graphics = this.add.graphics();
    graphics.fillStyle(0x4ade80, 1);
    graphics.fillRoundedRect(
      1,
      1,
      Platformer.PLAYER_WIDTH - 2,
      Platformer.PLAYER_HEIGHT - 2,
      5,
    );
    graphics.lineStyle(2, 0x14532d, 1);
    graphics.strokeRoundedRect(
      1,
      1,
      Platformer.PLAYER_WIDTH - 2,
      Platformer.PLAYER_HEIGHT - 2,
      5,
    );
    graphics.generateTexture(
      Platformer.PLAYER_TEXTURE_KEY,
      Platformer.PLAYER_WIDTH,
      Platformer.PLAYER_HEIGHT,
    );
    graphics.destroy();
  }

  private getSpawnPosition(): Phaser.Math.Vector2 {
    for (let tileY = this.platformerMap.height - 1; tileY >= 0; tileY -= 1) {
      const tile = this.groundLayer.getTileAt(Platformer.SPAWN_COLUMN, tileY);

      if (tile && tile.index > 0) {
        return new Phaser.Math.Vector2(
          tile.getCenterX(),
          tile.getTop() - Platformer.PLAYER_HEIGHT / 2,
        );
      }
    }

    const tileWidth = this.platformerMap.tileWidth * this.groundLayer.scaleX;
    const tileHeight = this.platformerMap.tileHeight * this.groundLayer.scaleY;

    return new Phaser.Math.Vector2(
      Platformer.SPAWN_COLUMN * tileWidth + tileWidth / 2,
      this.getGroundBottom() - tileHeight - Platformer.PLAYER_HEIGHT / 2,
    );
  }

  private getGroundBottom(): number {
    return (
      this.groundLayer.y + this.platformerMap.heightInPixels * this.groundLayer.scaleY
    );
  }

  private setupInput(): void {
    const keyboard = this.input.keyboard;

    if (!keyboard) {
      throw new Error("Platformer scene requires keyboard input.");
    }

    this.cursors = keyboard.createCursorKeys();
    this.movementKeys = keyboard.addKeys({
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    }) as typeof this.movementKeys;
    this.jumpKey = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.runKey = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);
  }

  private readInput(): MarioInput {
    return {
      left: this.cursors.left.isDown || this.movementKeys.left.isDown,
      right: this.cursors.right.isDown || this.movementKeys.right.isDown,
      run: this.runKey.isDown,
      jumpDown: this.jumpKey.isDown,
      jumpPressed: Phaser.Input.Keyboard.JustDown(this.jumpKey),
    };
  }

  private respawnPlayer(): void {
    const spawn = this.getSpawnPosition();
    const body = this.player.body as Phaser.Physics.Arcade.Body;

    body.reset(spawn.x, spawn.y);
    this.movementController.reset();
  }

  private updateDebugText(): void {
    const state = this.movementController.getDebugState();

    this.debugText.setText(
      [
        `vx: ${state.velocityX.toFixed(1)}`,
        `vy: ${state.velocityY.toFixed(1)}`,
        `grounded: ${state.grounded ? "yes" : "no"}`,
        `target speed: ${state.targetVelocityX.toFixed(1)}`,
        `acceleration: ${state.accelerationMode}`,
        `state: ${state.movementState}`,
      ].join("\n"),
    );
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
