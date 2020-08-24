import { Player } from "@/objects/player";

export class MainScene extends Phaser.Scene {
    backgroud!: Phaser.GameObjects.Image;
    player!: Player;

    constructor() {
        super({
            key: "MainScene",
        });
    }

    preload(): void {
        this.load.image("bg", "assets/wintertileset/BG/BG.png");
        Player.preload(this);
    }

    create(): void {
        this.backgroud = this.add.image(0, 0, "bg");
        this.backgroud.setOrigin(0, 0);
        this.player = new Player(this, 100, 300);
        this.player.play("player_idle");
    }
}
