class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {

        this.load.image('menuBG', './assets/menuBG.png');
        this.load.image('logo', './assets/logo.png');
        this.load.image('instructions', './assets/instructions.png');   
        this.load.audio('carDoorSfx', ['assets/doorClose.wav']);
    }

    
    create() {
        this.carDoorSfx = this.sound.add('carDoorSfx');
        this.cursors = this.input.keyboard.createCursorKeys();

        // create graphics
        this.window = this.add.sprite(1280 / 2, 720 / 2, 'menuBG');
        this.logo = this.add.sprite(1280 / 2, 720 / 2 - 120, 'logo');
        this.instructions = this.add.sprite(1280 / 2, 720 / 2 + 10, 'instructions');


        // other UI elements

        let menuConfig = {

            fontFamily: 'crayonhand',
            fontSize: '42px',
            color: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 3,
            align: 'left'

        }
        
        menuConfig.color = '#000000';
        this.add.text(1280 / 2 + 1, 720 / 2 + 2 + 100, 'Press           to continue!', menuConfig).setOrigin(0.5);
        menuConfig.color = '#FFFFFF';
        this.add.text(1280 / 2, 720 / 2 + 100, 'Press           to continue!', menuConfig).setOrigin(0.5);
        menuConfig.color = '#000000';
        this.add.text(1280 / 2 - 70 + 1, 720 / 2 + 2 + 100, 'space', menuConfig).setOrigin(0.5);
        menuConfig.color = '#FFE272';
        this.add.text(1280 / 2 - 70, 720 / 2 + 100, 'space', menuConfig).setOrigin(0.5);
        

    }

    update() {

        if (this.cursors.space.isDown) {
            this.carDoorSfx.play();
            this.scene.start("playScene");  
        }

    }
}