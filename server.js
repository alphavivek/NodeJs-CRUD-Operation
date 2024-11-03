const express = require('express')
const app = express()
const db = require('./db')

require('dotenv').config();
const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());   // req.body

app.get('/', function (req, res) {
  res.send('Hello Guys, Connection is established!! ')
})

const MenuItemRoutes = require('./routes/MenuItemRoutes')
app.use('/menu', MenuItemRoutes)

const PersonRoutes = require('./routes/PersonRoutes');
app.use("/person",PersonRoutes)

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
})