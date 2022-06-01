const express = require('express')

const app = express()

app.listen('3000')

//middleware
app.use(express.json())

app.route('/').post((req, res) => {
  const { nome, cidade, jogos_favoritos } = req.body
  res.send(
    `Meu nome é ${nome} e moro em ${cidade}. Meus jogos favoritos, são: ${jogos_favoritos}`
  )
})
