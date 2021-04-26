// 120 Endless Runner by Team Radicool Dragonfire Ninjas
// Made for the AGPM and CMPM 120-1 classes, section E
// By Liam Booher, Ashley Chapp, Ethan Tung and Nathan Wang
// 30 April 2021

let config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                y: 1000
            }
        }
    },
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);
let jumpSpeed = 500;
let moveSpeed = 300;
let friction = 100;
let airSpeed = 100;
let gameSpeed = 0.4;