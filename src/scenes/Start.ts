// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Start extends Phaser.Scene {
  constructor() {
    super("Start");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {
    // background
    const background = this.add.rectangle(640, 360, 1280, 720);
    background.isFilled = true;
    background.fillColor = 1318460;

    // title
    const title = this.add.text(640, 130, "", {});
    title.setOrigin(0.5, 0.5);
    title.text = "Monster Game";
    title.setStyle({
      color: "#f8fafc",
      fontFamily: "Arial",
      fontSize: "52px",
      fontStyle: "bold",
    });

    // prompt
    const prompt = this.add.text(640, 195, "", {});
    prompt.setOrigin(0.5, 0.5);
    prompt.text = "Choose an area";
    prompt.setStyle({ color: "#a5b4fc", fontFamily: "Arial", fontSize: "24px" });

    // overheadWorldButton
    const overheadWorldButton = this.add.rectangle(640, 300, 440, 72);
    overheadWorldButton.isFilled = true;
    overheadWorldButton.fillColor = 3122027;
    overheadWorldButton.isStroked = true;
    overheadWorldButton.strokeColor = 8622079;
    overheadWorldButton.lineWidth = 2;

    // overheadWorldLabel
    const overheadWorldLabel = this.add.text(640, 300, "", {});
    overheadWorldLabel.setOrigin(0.5, 0.5);
    overheadWorldLabel.text = "Overhead World";
    overheadWorldLabel.setStyle({
      color: "#ffffff",
      fontFamily: "Arial",
      fontSize: "28px",
    });

    // battleButton
    const battleButton = this.add.rectangle(640, 410, 440, 72);
    battleButton.isFilled = true;
    battleButton.fillColor = 3122027;
    battleButton.isStroked = true;
    battleButton.strokeColor = 8622079;
    battleButton.lineWidth = 2;

    // battleLabel
    const battleLabel = this.add.text(640, 410, "", {});
    battleLabel.setOrigin(0.5, 0.5);
    battleLabel.text = "Battle Scene";
    battleLabel.setStyle({ color: "#ffffff", fontFamily: "Arial", fontSize: "28px" });

    // platformerButton
    const platformerButton = this.add.rectangle(640, 520, 440, 72);
    platformerButton.isFilled = true;
    platformerButton.fillColor = 3122027;
    platformerButton.isStroked = true;
    platformerButton.strokeColor = 8622079;
    platformerButton.lineWidth = 2;

    // platformerLabel
    const platformerLabel = this.add.text(640, 520, "", {});
    platformerLabel.setOrigin(0.5, 0.5);
    platformerLabel.text = "Platformer Scene";
    platformerLabel.setStyle({
      color: "#ffffff",
      fontFamily: "Arial",
      fontSize: "28px",
    });

    this.overheadWorldButton = overheadWorldButton;
    this.battleButton = battleButton;
    this.platformerButton = platformerButton;

    this.events.emit("scene-awake");
  }

  private overheadWorldButton!: Phaser.GameObjects.Rectangle;
  private battleButton!: Phaser.GameObjects.Rectangle;
  private platformerButton!: Phaser.GameObjects.Rectangle;

  /* START-USER-CODE */

  create() {
    this.editorCreate();

    this.setupMenuButton(this.overheadWorldButton, "OverheadWorld");
    this.setupMenuButton(this.battleButton, "Battle");
    this.setupMenuButton(this.platformerButton, "Platformer");
  }

  private setupMenuButton(button: Phaser.GameObjects.Rectangle, targetScene: string) {
    button
      .setInteractive({ useHandCursor: true })
      .on("pointerover", () => button.setFillStyle(0x4338ca))
      .on("pointerout", () => button.setFillStyle(0x2fa36b))
      .on("pointerdown", () => this.scene.start(targetScene));
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
