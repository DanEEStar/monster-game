// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class OverheadWorld extends Phaser.Scene {
  constructor() {
    super("OverheadWorld");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {
    // background
    const background = this.add.rectangle(640, 360, 1280, 720);
    background.isFilled = true;
    background.fillColor = 1516884;

    // title
    const title = this.add.text(640, 300, "", {});
    title.setOrigin(0.5, 0.5);
    title.text = "Overhead World";
    title.setStyle({
      color: "#ffffff",
      fontFamily: "Arial",
      fontSize: "52px",
      fontStyle: "bold",
    });

    // status
    const status = this.add.text(640, 370, "", {});
    status.setOrigin(0.5, 0.5);
    status.text = "Ready for development";
    status.setStyle({ color: "#bbf7d0", fontFamily: "Arial", fontSize: "24px" });

    // backButton
    const backButton = this.add.rectangle(640, 620, 250, 56);
    backButton.isFilled = true;
    backButton.fillColor = 3359061;

    // backLabel
    const backLabel = this.add.text(640, 620, "", {});
    backLabel.setOrigin(0.5, 0.5);
    backLabel.text = "Back to Menu";
    backLabel.setStyle({ color: "#ffffff", fontFamily: "Arial", fontSize: "22px" });

    this.backButton = backButton;

    this.events.emit("scene-awake");
  }

  private backButton!: Phaser.GameObjects.Rectangle;

  /* START-USER-CODE */

  create() {
    this.editorCreate();

    this.backButton
      .setInteractive({ useHandCursor: true })
      .on("pointerover", () => this.backButton.setFillStyle(0x475569))
      .on("pointerout", () => this.backButton.setFillStyle(0x334155))
      .on("pointerdown", () => this.scene.start("Start"));
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
