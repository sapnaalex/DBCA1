const express = require('express')
const mongoose = require('mongoose')
 


const app = express()
const port = 3000

mongoose.connect(process.env.MONGO_DB)
    .then(console.log("connected to MongoDB Atlas"))
    .catch((Error),console.log("Error connecting to Mongo DB"))


app.get('/', (req, res) => res.send('Connect'))


app.listen(port, () => console.log(`Listening on port ${port}!`))