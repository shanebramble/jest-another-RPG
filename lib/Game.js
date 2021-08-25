const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');

function Game() {
    this.roundNumer = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
}
Game.prototype.initializeGame = function () {
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'baseball bat'));
    this.enemies.push(new Enemy('skeleton', 'axe'));

    // Keep track of which Enemy object is fighting.
    this.currentEnemy = this.enemies[0];

    // Prompt user for there name:

    inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'What is your name?'

        })
        .then (({name}) => {
            this.player = new Player(name);
            this.startNewBattle();
        });
};
module.exports = Game;