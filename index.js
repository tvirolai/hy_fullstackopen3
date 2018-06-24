const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./database')
const mongoose = require('mongoose')

const url = `mongodb://${process.env.MONGOUSER}:${process.env.MONGOPASS}@ds161700.mlab.com:61700/hy_fullstack`

mongoose.connect(url)

app.use(bodyParser.json())
morgan.token('pyynto', (req, res) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] :pyynto - :response-time ms'))
app.use(cors())
app.use(express.static('build'))

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
  Person
    .find({})
    .then(result => {
      res.json(result)
    })
})

app.get('/info', (req, res) => {
  res.send(`<p>Puhelinluettelossa ${notes.length} henkilön tiedot</p><p>${new Date()}</p>`)
})

app.get('/api/:id', (req, res) => {
  const id = Number(req.params.id)
  const note = notes.find(note => note.id === id)
  if (note) {
    res.json(note)
  } else {
    res.status(404).end()
  }
})

app.delete('/api/:id', (req, res) => {
  const id = Number(req.params.id)
  notes = notes.filter(note => note.id !== id)
  res.status(204).end()
})

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))

app.post('/api/persons', (req, res) => {
  const person = {
    name: req.body.name,
    number: req.body.number,
    id: getRandomInt(100)
  }
  const p = new Person(person)
  p
    .save()
    .then(resp => {
      console.log("Person saved.")
      mongoose.connection.close()
      res.json(person)
    })
  // if (!note.name) {
  //   res.status(500).send('Request must contain a name')
  // } else if (!note.number) {
  //   res.status(500).send('Request must contain a number')
  // } else if (notes.filter(n => n.name === note.name).length > 0) {
  //   res.status(500).send('Name must be unique')
  // } else {
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
