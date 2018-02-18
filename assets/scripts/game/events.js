'use strict'

const ui = require('./ui')

const onLoad = function () {
  const number = 5
  ui.createWorld(number)
}
const addHandlers = function () {
  $(document).ready(onLoad)
}

module.exports = {
  addHandlers
}
