// Sidewalk Sprint by Team Radicool Dragonfire Ninjas
// Made for the AGPM and CMPM 120-1 classes, section E
// By Liam Booher, Ashley Chapp, Ethan Tung, and Nathan Wang
// Completed May 2nd 2021

// Creative tilt:
// Programming wise, I'm not sure what you expect. I never used Phaser so everything that wasn't a part of Rocket Patrol was learned for this project.
// I'd say I'm the most proud of the collisions and different player states (running, sliding, jumping) even if it wasn't done that well.
// Also the obstacle randomization and game speed increasing was something that was difficult but turned out decent.
// Art wise, I think the game has a very nice and unique visual style. In particular, the UI and main menu look great and the colors on the obstalces vs
// the backgrounds accentuates the gameplay. The sound effects are also nice, especially for being produced all by ourselves.

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
