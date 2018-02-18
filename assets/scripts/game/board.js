'use strict'

// Template file for the game board
const gameBoardTemplate = require('../templates/game-board.handlebars')

/**
 * Creates a row for the gameboard.
 *
 * @param int number
 *   The number of rows to the game board in the y axis.
 *
 * @return array
 *   An array of rows json Objects.
 */
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

/**
 * Creates a given number of coluns for the given row index
 *
 * @param int number
 *   The number of grid squares to the game board in both the x axis.
 *
 * @param int row_index
 *   The index of the row the columns will exist in.
 *
 * @return array
 *   An array of cells.
 */
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

/**
 * Creates a Gameboard with a number of grid squares in a given axis. The grid
 * will always be a square.
 *
 * @param int number
 *   The number of grid squares to the game board in both the x and y axis.
 */
const createGameBoard = function (number) {
  const gameBoardHtml = gameBoardTemplate({
    rows: createRows(number)
  })
  $('.game-world-html').append(gameBoardHtml)
}


// Export functions for use in other files.
module.exports = {
  createGameBoard,
}
