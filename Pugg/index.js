const express = require('express')
const app = express()
const rutas = require('./routes/main')
const puerto = 8080
const path = require('path')



app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'pug')

app.use('/', rutas)


app.listen(puerto, () =>{
console.log(`escuchando el puerto ${puerto}`)



})
