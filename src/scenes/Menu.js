class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {

        //this.load.image('KEY', 'PATH');

    }

    
    create() {
        
        this.cursors = this.input.keyboard.createCursorKeys();

        let menuConfig = {

            fontFamily: 'crayonhand',
            fontSize: '28px',
            color: '#FFFFFF',
            align: 'left'

        }

        this.add.text(1280 / 2, 720 / 2, 'PRESS SPACE TO CONTINUE', menuConfig).setOrigin(0.5);

    }

    update() {

        if (this.cursors.space.isDown) {

            this.scene.start("playScene");  
  
        }

    }
}