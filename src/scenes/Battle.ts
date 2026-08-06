// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */

/* END-USER-IMPORTS */

class BattleController {
  player = {
    hp: 100,
    defense: 0,
    attack: 10,
  };

  rival = {
    hp: 100,
    defense: 0,
    attack: 10,
  };

  public getPlayer() {
    return this.player;
  }

  public getRival() {
    return this.rival;
  }

  public rival_turn() {
    switch (Math.abs(Math.random() * 2)) {
      case 0:
        return;
      case 1:
        this.rival.defense += 0.1 * Math.random();
        return;
      case 2:
        this.player.hp =
          this.player.hp -
          this.rival.attack * Math.random() * 2 * (1 - this.player.defense);
        return;
    }
  }

  public defense() {
    this.player.defense += 0.1 * Math.random();
  }

  public attack() {
    this.rival.hp =
      this.rival.hp - this.player.attack * Math.random() * 2 * (1 - this.rival.defense);
  }
}

const Style = {
  dialog_default: {
    color: "#000000ff",
    stroke: "#000000ff",
    strokeThickness: 0,
    "shadow.stroke": false,
  },
  dialog_select: {
    color: "#000000ff",
    stroke: "#000000ff",
    strokeThickness: 2,
    "shadow.stroke": true,
  },
};

export default class Battle extends Phaser.Scene {
  constructor() {
    super("Battle");
  }

  selectedDialogIdx = 0;
  dialogOptions: any[] = [];

  battleController = new BattleController();

  editorCreate(): void {
    // backButton
    const backButton = this.add.rectangle(128, 689, 250, 56);
    backButton.isFilled = true;
    backButton.fillColor = 3359061;

    // backLabel
    const backLabel = this.add.text(123, 692, "", {});
    backLabel.setOrigin(0.5, 0.5);
    backLabel.text = "Back to Menu";
    backLabel.setStyle({ color: "#ffffff", fontFamily: "Arial", fontSize: "22px" });

    // rival_image
    const rival_image = this.add.image(1022, 227, "elefant");
    rival_image.scaleX = 0.09425493338876229;
    rival_image.scaleY = 0.11490248000323693;

    // player_image
    const player_image = this.add.image(352, 416, "gorilla");
    player_image.scaleX = 0.4426316811464664;
    player_image.scaleY = 0.42157410449095606;

    // hp_player
    const hp_player = this.add.container(720, 448);

    // player_hp_full
    const player_hp_full = this.add.rectangle(192, 48, 128, 128);
    player_hp_full.scaleX = 3;
    player_hp_full.scaleY = 0.2;
    player_hp_full.isFilled = true;
    hp_player.add(player_hp_full);

    // player_hp_current
    const player_hp_current = this.add.rectangle(96, 48, 128, 128);
    player_hp_current.scaleX = 1.5;
    player_hp_current.scaleY = 0.2;
    player_hp_current.isFilled = true;
    player_hp_current.fillColor = 6061006;
    hp_player.add(player_hp_current);

    // player_name
    const player_name = this.add.text(32, 16, "", {});
    player_name.setOrigin(0.5, 0.5);
    player_name.text = "Gorilla";
    player_name.setStyle({ color: "#e9d5ff", fontFamily: "Arial", fontSize: "24px" });
    hp_player.add(player_name);

    // hp_rival
    const hp_rival = this.add.container(272, 80);

    // rival_hp_full
    const rival_hp_full = this.add.rectangle(192, 48, 128, 128);
    rival_hp_full.scaleX = 3;
    rival_hp_full.scaleY = 0.2;
    rival_hp_full.isFilled = true;
    hp_rival.add(rival_hp_full);

    // rival_hp_current
    const rival_hp_current = this.add.rectangle(96, 48, 128, 128);
    rival_hp_current.scaleX = 1.5;
    rival_hp_current.scaleY = 0.2;
    rival_hp_current.isFilled = true;
    rival_hp_current.fillColor = 6061006;
    hp_rival.add(rival_hp_current);

    // rival_name
    const rival_name = this.add.text(32, 16, "", {});
    rival_name.setOrigin(0.5, 0.5);
    rival_name.text = "Elefant";
    rival_name.setStyle({ color: "#e9d5ff", fontFamily: "Arial", fontSize: "24px" });
    hp_rival.add(rival_name);

    // dialog
    const dialog = this.add.container(0, 432);

    // dialog_background
    const dialog_background = this.add.rectangle(640, 224, 128, 128);
    dialog_background.scaleX = 10;
    dialog_background.isFilled = true;
    dialog.add(dialog_background);

    const new_dialog_option = (
      x: number,
      y: number,
      text: string,
      selected: boolean = false,
    ) => {
      const dialog_option = this.add.text(x, y, "", {});
      dialog_option.text = text;
      dialog_option.setStyle(selected ? Style.dialog_select : Style.dialog_default);
      return dialog_option;
    };

    this.dialogOptions.push({
      option: new_dialog_option(200, 625, "Attack", true),
      callback: () => {
        this.battleController.attack();
      },
    });
    this.dialogOptions.push({
      option: new_dialog_option(200, 675, "Defense"),
      callback: () => {
        this.battleController.defense();
      },
    });
    this.dialogOptions.push({
      option: new_dialog_option(400, 625, "Skip"),
      callback: () => {},
    });

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

    this.input.keyboard?.on("keydown", (event: any) => {
      console.log("keystroke w", event.key);

      this.dialogOptions.forEach((value) =>
        value.option.setStyle(Style.dialog_default),
      );

      this.selectedDialogIdx =
        (this.selectedDialogIdx - 1 + this.dialogOptions.length) %
        this.dialogOptions.length;
      this.dialogOptions[this.selectedDialogIdx].option.setStyle(Style.dialog_select);
    });
  }

  update(time: number, delta: number) {
    super.update(time, delta);
  }
}

/* END OF COMPILED CODE */

// You can write more code here
