const mongoose = require('mongoose')

const url = `mongodb://${process.env.MONGOUSER}:${process.env.MONGOPASS}@ds161700.mlab.com:61700/hy_fullstack`

mongoose.connect(url)

const Person = mongoose.model('Person', {
  name: String,
  number: String
})

module.exports = Person
