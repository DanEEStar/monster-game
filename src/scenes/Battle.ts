// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

const Style = {
    "dialog_default": {"color": "#000000ff", "stroke": "#000000ff", "strokeThickness": 0, "shadow.stroke": false},
    "dialog_select": {"color": "#000000ff", "stroke": "#000000ff", "strokeThickness": 2, "shadow.stroke": true},
}


export default class Battle extends Phaser.Scene {


    constructor() {
        super("Battle");

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    selectedDialogIdx = 0;
    dialogOptions: any[] = []

    editorCreate(): void {

        // backButton
        const backButton = this.add.rectangle(128, 689, 250, 56);
        backButton.isFilled = true;
        backButton.fillColor = 3359061;

        // backLabel
        const backLabel = this.add.text(123, 692, "", {});
        backLabel.setOrigin(0.5, 0.5);
        backLabel.text = "Back to Menu";
        backLabel.setStyle({"color": "#ffffff", "fontFamily": "Arial", "fontSize": "22px"});

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
        player_name.setStyle({"color": "#e9d5ff", "fontFamily": "Arial", "fontSize": "24px"});
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
        rival_name.setStyle({"color": "#e9d5ff", "fontFamily": "Arial", "fontSize": "24px"});
        hp_rival.add(rival_name);

        // dialog
        const dialog = this.add.container(0, 432);

        // dialog_background
        const dialog_background = this.add.rectangle(640, 224, 128, 128);
        dialog_background.scaleX = 10;
        dialog_background.isFilled = true;
        dialog.add(dialog_background);


        // dialog_option_1
        const dialog_option_1 = this.add.text(208, 624, "", {});
        dialog_option_1.text = "Option 1";
        dialog_option_1.setStyle(Style.dialog_default);

        // dialog_option_2
        const dialog_option_2 = this.add.text(208, 672, "", {});
        dialog_option_2.text = "Option 2\n";
        dialog_option_2.setStyle(Style.dialog_select);


        // dialog_option_3
        const dialog_option_3 = this.add.text(400, 624, "", {});
        dialog_option_3.text = "Option 3\n";
        dialog_option_3.setStyle(Style.dialog_default);

        this.dialogOptions.push(dialog_option_1)
        this.dialogOptions.push(dialog_option_2)
        this.dialogOptions.push(dialog_option_3)

        this.backButton = backButton;

        this.events.emit("scene-awake");
    }

    private backButton!: Phaser.GameObjects.Rectangle;

    /* START-USER-CODE */

    create() {
        this.editorCreate();

        this.backButton
            .setInteractive({useHandCursor: true})
            .on("pointerover", () => this.backButton.setFillStyle(0x475569))
            .on("pointerout", () => this.backButton.setFillStyle(0x334155))
            .on("pointerdown", () => this.scene.start("Start"));

        /*
            this.dialogOptions.forEach(value => {
                value.setStyle(Style.dialog_default);
            });
            this.selectedDialog = (this.selectedDialog - 1 + this.dialogOptions.length) % this.dialogOptions.length;
            this.dialogOptions[this.selectedDialog].setStyle(Style.dialog_select);
        */

        this.input.keyboard?.on("keydown", (event: any) => {
            console.log("keystroke w", event)


            this.dialogOptions.forEach(value => {
                value.setStyle(Style.dialog_default);
            });


            this.selectedDialogIdx = (this.selectedDialogIdx - 1 + this.dialogOptions.length) % this.dialogOptions.length;
            this.dialogOptions[this.selectedDialogIdx].setStyle(Style.dialog_select);
        });
    }

    update(time: number, delta: number) {
        super.update(time, delta);

    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
