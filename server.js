const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const countries = require("./routes/api/countries")

const app = express()

// bodyparser middleware
app.use(bodyParser.json())
app.set('json spaces', 2)


// db config
const db = require("./config/keys").mongoURI

// connect to mongo
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true } )
    .then(() => console.log("Mongo connected..."))
  

// use routes
app.use("/api/countries", countries)

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);