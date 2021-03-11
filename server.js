// Dependencies

const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))
// create Array of notes 


//routes 
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// start the server to begin listening 
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));