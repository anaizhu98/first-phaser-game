import "phaser";
import { MainScene } from "./scenes/main.scene";

const gameConfig: Phaser.Types.Core.GameConfig = {
    width: 800,
    height: 600,
    parent: "game",
    type: Phaser.AUTO,
    scene: [MainScene],
    input: {
        keyboard: true,
        mouse: true,
    },
    backgroundColor: "#000",
    render: {
        antialias: true,
        antialiasGL: true,
    },
};

export class Game extends Phaser.Game {
    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    window.game = new Game(gameConfig);
});
