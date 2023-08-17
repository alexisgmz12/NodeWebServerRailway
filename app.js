const express = require('express')
const hbs = require('hbs')
require('dotenv').config()

const app = express()
const port = process.env.PORT

//Handlebars
//Para renderizar vistas sencillas usamos
app.set('view engine','hbs')
//Registrar partials
hbs.registerPartials(__dirname + '/views/partials')

//Midle ware .- Una funcion que se ejecuta antes de hacer cualquier otra cosa
//Servir contenido estatico
app.use(express.static('public'))

//Ya no se ejecuta por que entran los midleware
// app.get('/', (req,res) => {
//     res.send('Home Page')
// })

app.get('/', (req,res) => {
    res.render('home',{
        nombre:'Alexis Gomez',
        titulo:'Curso de Node'
    })
})
app.get('/elements', (req,res) => {
    res.render('elements',{
        nombre:'Alexis Gomez',
        titulo:'Curso de Node'
    })
})
app.get('/generic', (req,res) => {
    res.render('generic',{
        nombre:'Alexis Gomez',
        titulo:'Curso de Node'
    })
})

app.get('/generic', (req,res) => {
    res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', (req,res) => {
    res.sendFile(__dirname + '/public/elements.html')
})

app.get('*', (req,res) => {
    //Asi se llaman pantallas desde el public
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
})