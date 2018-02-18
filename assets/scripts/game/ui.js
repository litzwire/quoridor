'use strict'

const loadGameBoardTemplate = require('../templates/game-board.handlebars')

const displayThisWorks = function () {
  console.log('this works from ui.js')
}

const createRows = function (number) {
  const rows = []
  for (let i = 0; i < number; i++) {
    const cells = createCells(number, i)
    const row = {
      row_index: i,
      cells: cells
    }
    rows.push(row)
  }
  return rows
}

const createCells = function (number, row_index) {
  const cells = []
  for (let i = 0; i < number; i++) {
    const cell = {
      row_index: row_index,
      cell_index: i
    }
    cells.push(cell)
  }
  return cells
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
