const mongoose = require('mongoose')

const url = `mongodb://${process.env.MONGOUSER}:${process.env.MONGOPASS}@ds161700.mlab.com:61700/hy_fullstack`

mongoose.connect(url)

const Person = mongoose.model('Person', {
  name: String,
  number: String
})

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

// 3.14
// personSchema.statics.format = function (p) {
//   return {
//     name: p.name,
//     number: p.number
//   }
// }

module.exports = Person
