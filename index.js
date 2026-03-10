/**
 * Copyright IBM Corp. 2020
 */

if (process.env.NODE_ENV === 'production') {
  require('./dist')
} else {
  require('nodemon')({script: 'dev.js'})
}
