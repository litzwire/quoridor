'use strict'

const ui = require('./ui')

const onLoad = function () {
  const number = 5
  ui.createWorld(number)
}
const addHandlers = function () {
  $(document).ready(onLoad)
}

// Export functions for use in other files.
module.exports = {
  addHandlers
}
