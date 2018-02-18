'use strict'

const loadGameBoardTemplate = require('../templates/game-board.handlebars')

const displayThisWorks = function () {
  console.log('this works from ui.js')
}

const createRows = function (number) {
  const rows = []
  for (let i = 0; i < number; i++) {
    const row = {
      row_index: i
    }
    rows.push(row)
  }
  return rows
}

const createGameBoard = function (number) {
  const gameBoardHtml = loadGameBoardTemplate({
    rows: createRows(number)
  })
  $('.game-board-html').append(gameBoardHtml)
}

const createWorld = function (number) {
  createGameBoard(number)
}

module.exports = {
  displayThisWorks,
  createWorld
}
