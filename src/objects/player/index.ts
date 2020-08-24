export class Player extends Phaser.GameObjects.Sprite {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, "player", "Idle__001.png");
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
        scene.load.multiatlas("player", "/sprites/player.json", "/sprites/");
    }
}
