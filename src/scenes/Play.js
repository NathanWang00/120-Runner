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
        var scale = 0.55;
        this.road = this.add.tileSprite(0, 480, 1280/scale, 436/scale, 'road').setOrigin(0, 0);
        this.physics.add.existing(this.road, true);
        this.road.body.position.y = 500;
        this.road.body.immovable = true;
        this.road.setScale(scale, scale);

        // add camera
        this.camera = this.cameras.add();
        this.camera.setBackgroundColor('rgba(255, 255, 255, 1)');

        // create player
        this.anims.create({ 
            key: 'runAnim', 
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
        this.player = this.physics.add.sprite(200, 350, 'run');
        this.player.setScale(0.32, 0.32);
        this.player.setSize(375, 350, false);
        this.player.setOffset(60, 0);
        this.player.anims.play('runAnim');

        this.physics.add.collider(this.player, this.road);
        this.player.setCollideWorldBounds(true);
    }

    update() {
        this.road.tilePositionX += 6;
    }
}