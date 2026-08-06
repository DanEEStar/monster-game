// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Battle extends Phaser.Scene {

	constructor() {
		super("Battle");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// rival_name
		const rival_name = this.add.text(497, 95, "", {});
		rival_name.setOrigin(0.5, 0.5);
		rival_name.text = "Elefant";
		rival_name.setStyle({ "color": "#e9d5ff", "fontFamily": "Arial", "fontSize": "24px" });

		// backButton
		const backButton = this.add.rectangle(128, 689, 250, 56);
		backButton.isFilled = true;
		backButton.fillColor = 3359061;

		// backLabel
		const backLabel = this.add.text(123, 692, "", {});
		backLabel.setOrigin(0.5, 0.5);
		backLabel.text = "Back to Menu";
		backLabel.setStyle({ "color": "#ffffff", "fontFamily": "Arial", "fontSize": "22px" });

		// rival_image
		const rival_image = this.add.image(1022, 227, "elefant");
		rival_image.scaleX = 0.09425493338876229;
		rival_image.scaleY = 0.11490248000323693;

		// player_image
		const player_image = this.add.image(555, 362, "gorilla");
		player_image.scaleX = 0.5395141376172515;
		player_image.scaleY = 0.42157410449095606;

		// rival_hp_total
		const rival_hp_total = this.add.rectangle(651, 133, 128, 128);
		rival_hp_total.scaleX = 3.0231262345729277;
		rival_hp_total.scaleY = 0.21683839264859162;
		rival_hp_total.isFilled = true;

		// rival_hp_level
		const rival_hp_level = this.add.rectangle(559, 133, 128, 128);
		rival_hp_level.scaleX = 1.5963051320779478;
		rival_hp_level.scaleY = 0.21071865694711023;
		rival_hp_level.isFilled = true;
		rival_hp_level.fillColor = 6061006;

		// player_name
		const player_name = this.add.text(779, 427, "", {});
		player_name.setOrigin(0.5, 0.5);
		player_name.text = "Gorilla";
		player_name.setStyle({ "color": "#e9d5ff", "fontFamily": "Arial", "fontSize": "24px" });

		// player_hp_total
		const player_hp_total = this.add.rectangle(933, 465, 128, 128);
		player_hp_total.scaleX = 3.0231262345729277;
		player_hp_total.scaleY = 0.21683839264859162;
		player_hp_total.isFilled = true;

		// player_hp_level
		const player_hp_level = this.add.rectangle(841, 465, 128, 128);
		player_hp_level.scaleX = 1.5963051320779478;
		player_hp_level.scaleY = 0.21071865694711023;
		player_hp_level.isFilled = true;
		player_hp_level.fillColor = 6061006;

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
