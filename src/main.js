// Sidewalk Sprint by Team Radicool Dragonfire Ninjas
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
            debug: false,
            gravity: {
                y: 1250
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
let jumpSpeed = 700;
let moveSpeed = 300;
let friction = 100;
let airSpeed = 100;
let startSpeed = 12.5;
let gameSpeed = 12.5;
let maxSpeed = 52.5;
let randomCount = 3;
let randomTrack = 3;
let startDelay = 4500;
let spawnDelay = 4500;
let lowestDelay = 750;


/* 

NOTES FOR THE GRADERS OF CMPM-120-1, PROFESSOR ADAM SMITH:

- "Crayon Hand Regular" typeface sourced from https://www.dafont.com/, a free font licensed for personal/educational use.


*/
