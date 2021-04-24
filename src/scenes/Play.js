class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    preload() {
        this.load.image('road', './assets/road.png');
    }

    create() {
        // place road sprite
        this.starfield = this.add.tileSprite(0, 350, 1280, 436, 'road').setOrigin(0, 0);

        // add camera
        this.camera = this.cameras.add();

        this.camera.setBackgroundColor('rgba(255, 255, 255, 1)');
    }

    update() {
        this.starfield.tilePositionX += 4;
    }
}