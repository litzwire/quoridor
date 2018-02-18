'use strict'

const board = require('./board')
const players = require('./players')

const createWorld = function (number) {
  board.createGameBoard(number)
  players.createPlayers();
}

module.exports = {
  createWorld
}
