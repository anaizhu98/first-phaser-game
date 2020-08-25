export class Player extends Phaser.GameObjects.Sprite {
    static texture: Phaser.Textures.Texture;

    private health = 100;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, Player.texture, "Idle__001.png");
        this.setScale(0.5);
        this.loadAnimation(scene);
    }

    loadAnimation(scene: Phaser.Scene): void {
        const idleFrames = scene.anims.generateFrameNames("player", {
            start: 0,
            end: 9,
            zeroPad: 3,
            prefix: "Idle__",
            suffix: ".png",
        });
        scene.anims.create({
            frames: idleFrames,
            key: "player_idle",
            repeat: -1,
            frameRate: 30,
        });
    }

    static preload(scene: Phaser.Scene): void {
        scene.load.multiatlas(
            "player",
            "/assets/sprites/player.json",
            "/assets/sprites/"
        );
        this.texture = scene.textures.get("player");
    }

    getHealth(): number {
        return this.health;
    }
}
