// You can write more code here

/* START OF COMPILED CODE */
export class BattleController {
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
