class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        this.load.image('road', './assets/road.png');
        this.load.image('trash', './assets/trash.png');
        this.load.image('streetlight', './assets/streetlight.png');
        this.load.image('farBG', './assets/farBG.png');
        this.load.image('clouds', './assets/clouds.png');
        this.load.image('bg', './assets/streetBG.png');
        this.load.image('window', './assets/windowOverlay.png');        
        this.load.atlas('pTexture', './assets/pTexture.png', './assets/pTexture.json');
    }

    create() {
        // place street background
        this.clouds = this.add.tileSprite(0, 0, 2560, 720, 'clouds').setOrigin(0, 0);
        this.farBG = this.add.tileSprite(0, 199, 3840, 285, 'farBG').setOrigin(0, 0);
        this.bg = this.add.tileSprite(0, 0, 3840, 482, 'bg').setOrigin(0, 0);

        this.clouds.setScale(0.5, 0.5);
        

        // place road sprite
        var scale = 0.55;
        this.road = this.add.tileSprite(0, 480, 1280/scale, 436/scale, 'road').setOrigin(0, 0);
        this.physics.add.existing(this.road, true);
        this.road.body.position.y = 500;
        this.road.body.immovable = true;
        this.road.setScale(scale, scale);

        // create streetlight
        this.light = this.physics.add.sprite(game.config.width + 100, 363, 'streetlight');
        this.light.body.allowGravity = false;
        this.light.setScale(0.541, 0.541);
        this.light.setPushable(false);
        this.light.setSize(80, 150, false);
        this.light.setOffset(100, 20);

        // create trash
        this.trash = this.physics.add.sprite(500, 471, 'trash');
        this.trash.body.allowGravity = false;
        this.trash.setScale(0.541, 0.541);
        this.trash.setPushable(false);
        this.trash.setSize(142, 135, false);
        this.trash.setOffset(10, 20);

        // obstacle group
        this.obstacles = this.add.group();
        this.obstacles.add(this.trash);
        this.obstacles.add(this.light);
        console.log(this.obstacles.getFirstAlive())
        //this.obstacles.killAndHide(this.light)

        // add camera
        this.camera = this.cameras.add();
        this.camera.setBackgroundColor('rgba(255, 255, 255, 1)');

        // player logic
        this.isSliding = false;
        this.slideWait = false;
        this.isRun = false;

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

        this.anims.create({ 
            key: 'jumpAnim', 
            frames: this.anims.generateFrameNames('pTexture', {
                start: 2,
                end: 15,
                zeroPad: 2,
                prefix: 'jump',
                suffix: '.gif'
            }),
            frameRate: 12, 
            repeat: 0
        });

        this.anims.create({
            key: 'slideAnim',
            frames: this.anims.generateFrameNames('pTexture', {
                start: 3,
                end: 6,
                zeroPad: 1,
                prefix: 'slide',
                suffix: '.gif'
            }),
            frameRate: 24, 
            repeat: 0
        });
        this.player = this.physics.add.sprite(200, 350, 'run');
        this.PlayerRun();
        this.player.setCollideWorldBounds(true);

        // controls
        this.cursors = this.input.keyboard.createCursorKeys();

        this.player.on('animationcomplete-slideAnim', function () {
            if(this.cursors.down.isDown && this.player.body.touching.down) {
                this.slideWait = true;
            }
            else {
                this.isSliding = false;
            }
        }, this);

        // collisions
        this.physics.add.collider(
            this.player,
            this.light,
            function (_player, _light)
            {
                if (!_player.body.touching.down && !_light.body.touching.up)
                {
                    console.log("collision");
                }
            });
        this.physics.add.collider(
            this.player,
            this.trash,
            function (_player, _trash)
            {
                if (!_player.body.touching.down && !_trash.body.touching.up)
                {
                    console.log("collision");
                }
            });
        this.physics.add.collider(this.player, this.road);

        // create window overlay
        this.window = this.add.sprite(1280 / 2, 720 / 2, 'window');
        
    }

    update(time, delta) {
        //background
        this.road.tilePositionX += gameSpeed * 1.8 * delta / 60;
        this.bg.tilePositionX += gameSpeed * delta / 60;
        this.farBG.tilePositionX += gameSpeed * 0.42 * delta / 60;
        this.clouds.tilePositionX += gameSpeed * 0.3 * delta / 60;
        this.light.x -= gameSpeed * delta / 60;
        this.trash.x -= gameSpeed * delta /60;

        if(this.player.body.touching.down && !this.isRun && (this.player.anims.currentAnim.key === 'jumpAnim' || !this.isSliding)) {
            this.PlayerRun();
        }

        //horrific logic, use states next time...
        if(this.slideWait = true && this.cursors.down.isUp && this.player.body.touching.down && !this.isRun)
        {
            this.PlayerRun();
            this.slideWait = false;
            this.isSliding = false;
        }

        if(this.cursors.up.isDown && this.player.body.touching.down) {
            this.PlayerJump();
        }

        if(this.cursors.down.isDown && this.player.body.touching.down && !this.isSliding && this.cursors.up.isUp) {
            this.PlayerSlide();
        }

        // left right ground movement
        //if(this.isRun) {
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-moveSpeed * 1.3);
        }
        else {
            if (this.cursors.right.isDown) {
                this.player.setVelocityX(moveSpeed);
            }
            else {
                this.player.setVelocityX(0);
            }
        }
        //}

        // insert air movement

        // object logic
        if (this.light.x < -500) {
            this.light.x = game.config.width + 500;
        }
        if (this.trash.x < -500) {
            this.trash.x = game.config.width + 500;
        }
    }

    PlayerRun(){
        this.player.setScale(0.32, 0.32);
        this.player.setSize(375, 300, false);
        this.player.setOffset(60, 50);
        this.player.anims.play('runAnim');
        this.isRun = true;
    }

    PlayerJump(){
        this.player.setVelocityY(-jumpSpeed);
        this.player.anims.play('jumpAnim');
        this.player.setSize(200, 475, false);
        this.player.setOffset(80, 25);
        this.player.setScale(0.25, 0.25);
        this.isRun = false;
        this.isSliding = false;
    }

    PlayerSlide(){
        this.player.anims.play('slideAnim');
        this.player.setSize(400, 200, false);
        this.player.setOffset(60, 200);
        this.player.setScale(0.3, 0.3);
        this.isSliding = true;
        this.isRun = false;
        this.player.setVelocityX(moveSpeed*0.6);
    }
}