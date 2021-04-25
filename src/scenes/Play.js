class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        this.load.image('road', './assets/road.png');
        this.load.atlas('pTexture', './assets/pTexture.png', './assets/pTexture.json');
    }

    create() {
        // place road sprite
        this.starfield = this.add.tileSprite(0, 350, 1280, 436, 'road').setOrigin(0, 0);

        // add camera
        this.camera = this.cameras.add();
        this.camera.setBackgroundColor('rgba(255, 255, 255, 1)');

        // create player

        this.anims.create({ 
            key: 'test', 
            frames: this.anims.generateFrameNames('pTexture', {
                start: 1,
                end: 8,
                zeroPad: 1,
                prefix: 'run',
                suffix: '.gif'
            }),
            frameRate: 12, 
            repeat: -1
        });
        this.player = this.add.sprite(200, 400, 'run');
        this.player.setScale(0.5, 0.5);
        this.player.anims.play('test');
    }

    update() {
        this.starfield.tilePositionX += 4;
    }
}