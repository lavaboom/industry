const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

// route definitions
const itemRouter = require('./routes/ItemRoutes.js')

app.use(cors())
app.use(express.json());
app.use(express.static('public'))
app.use('/item', itemRouter)

app.listen(port,()=>console.log(`Listening on port: ${port} `))
