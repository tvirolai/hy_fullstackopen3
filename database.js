const mongoose = require('mongoose')

// const url = `mongodb://${process.env.MONGOUSER}:${process.env.MONGOPASS}@ds161700.mlab.com:61700/hy_fullstack`
// const url = `mongodb://${process.env.MONGOUSER}:${process.env.MONGOPASS}@ds161700.mlab.com:61700/hy_fullstack`
const url = process.env.MONGOURL

mongoose.connect(url)

const Person = mongoose.model('Person', {
  name: String,
  number: String,
  id: Number
})

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
  number: Number
})

// 3.14
// personSchema.statics.format = function (p) {
//   return {
//     name: p.name,
//     number: p.number
//   }
// }

module.exports = Person
