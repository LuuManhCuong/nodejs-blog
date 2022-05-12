const express = require('express')
var morgan = require('morgan')
const path = require('path')
const { engine } = require('express-handlebars')

const app = express()
const port = 3000

// http loger
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, "public")))

// template engine
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'assets/views'));

// console.log("Path" , path.join(__dirname, 'assets/views'));

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})