
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./config');
const userRoutes = require('./routes/userRoutes')


mongoose.connect(config.mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("I'm connected to the database");
    }
})

const port = config.port

const app = express()

app.use(express.json())
app.use(cors())

app.listen(port, () => {
    console.log("The server is listing in the port: ", port);
})


app.use('/users', userRoutes )

