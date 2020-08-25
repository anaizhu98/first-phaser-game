import { Player } from "@/objects";
import BG from "@assets/wintertileset/BG/BG.png";

export class MainScene extends Phaser.Scene {
    backgroud!: Phaser.GameObjects.Image;
    player!: Player;

    constructor() {
        super({
            key: "MainScene",
        });
    }

    preload(): void {
        this.load.image("bg", BG);
        Player.preload(this);
    }

    create(): void {
        this.backgroud = this.add.image(0, 0, "bg");
        this.backgroud.setOrigin(0, 0);
        this.player = new Player(this, 400, 300);
        this.player.anims.play("player_idle");
    }
}
