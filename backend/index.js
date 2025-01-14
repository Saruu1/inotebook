var cors = require('cors')
const connectToMongo = require('./db');
const express = require('express')
connectToMongo();
const app = express()
const port = 5000;

app.use(cors())
app.use(express.json()) // if we need to use req.body

// Available Routes

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
})