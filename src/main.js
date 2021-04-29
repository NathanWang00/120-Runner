// 120 Endless Runner by Team Radicool Dragonfire Ninjas
// Made for the AGPM and CMPM 120-1 classes, section E
// By Liam Booher, Ashley Chapp, Ethan Tung, and Nathan Wang
// 30 April 2021

let config = {
    type: Phaser.CANVAS,
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
    /*fps: {
        target: 60,
        forceSetTimeOut: true
    },*/
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);
let jumpSpeed = 500;
let moveSpeed = 300;
let friction = 100;
let airSpeed = 100;
let gameSpeed = 12.5;
//let gameSpeed = 45;
let randomCount = 3;
let randomTrack = 3;
let spawnDelay = 5000;
let lowestDelay = 700;


/* 

NOTES FOR THE GRADERS OF CMPM-120-1, PROFESSOR ADAM SMITH:

- "Crayon Hand Regular" typeface sourced from https://www.dafont.com/, a free font licensed for personal/educational use.


*/
