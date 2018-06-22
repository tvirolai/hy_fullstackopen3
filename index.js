const express = require('express')
const app = express()

let notes = [
  {
    name: "Jani Mäki",
    number: "040-124249",
    id: 1
  },
  {
    name: "Taina Tammi",
    number: "044-12249",
    id: 2
  },
  {
    name: "Mirja Mäkilä",
    number: "040-1111111",
    id: 3
  },
  {
    name: "Susanna Sjöman",
    number: "070-402040404",
    id: 4
  }
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
  res.json(notes)
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

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
