const express = require('express')

const app = express()

app.listen('3000')

//middleware
app.use(express.json())

app.route('/').get((req, res) => res.send(req.query.name))

app.route('/').put((req, res) => res.send(req.body.author))

app.route('/:parametro').get((req, res) => res.send(req.params.parametro))

/*

//middleware
app.use(express.json())

let author = 'Leandro'

app.route('/').get((req, res) => res.send(author))

app.route('/').put((req, res) => {
  author = req.body.author
  res.send(author)
})

*/

/*

app.route('/:identificador').delete((req, res) => {
  res.send(req.params.identificador)
})

*/
