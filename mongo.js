const mongoose = require('mongoose')

const url = `mongodb://${process.env.MONGOUSER}:${process.env.MONGOPASS}@ds161700.mlab.com:61700/hy_fullstack`

mongoose.connect(url)

// const name = process.argv[2]
// const number = process.argv[3]

// console.log(`Lisätään henkilö ${name} numero ${number} luetteloon.`)

const Person = mongoose.model('Person', {
  name: String,
  number: String
})

Person
  .find({})
  .then(res => {
    console.log(res)
    mongoose.connection.close()
  })
  .catch(err => console.log(err))

// const person = new Person({
//   name: name,
//   number: number
// })

// person
//   .save()
//   .then(response => {
//     console.log('note saved!')
//     mongoose.connection.close()
//   })
