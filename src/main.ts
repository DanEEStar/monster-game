import Phaser from "phaser";

import Battle from "./scenes/Battle";
import OverheadWorld from "./scenes/OverheadWorld";
import Platformer from "./scenes/Platformer";
import Preload from "./scenes/Preload";
import Start from "./scenes/Start";

class Boot extends Phaser.Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    this.load.pack("pack", "assets/preload-asset-pack.json");
  }

  create() {
    this.scene.start("Preload");
  }
}

window.addEventListener("load", function () {
  const game = new Phaser.Game({
    width: 1280,
    height: 720,
    backgroundColor: "#2f2f2f",
    parent: "game-container",
    scale: {
      mode: Phaser.Scale.ScaleModes.FIT,
      autoCenter: Phaser.Scale.Center.CENTER_BOTH,
    },
    scene: [Boot, Preload, Start, OverheadWorld, Battle, Platformer],
  });

  game.scene.start("Boot");
});
