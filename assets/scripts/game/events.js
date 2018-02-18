'use strict'

const ui = require('./ui')

const onDisplayThisWorks = function () {
  console.log('clicked body events.js')
  ui.displayThisWorks()
}

const onLoad = function () {
  const number = 5
  ui.createWorld(number)
}
const addHandlers = function () {
  $(document).ready(onLoad)
  $('body').on('click', onDisplayThisWorks)
}

module.exports = {
  addHandlers
}
