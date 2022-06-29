const express = require('express');
const mongoose = require('mongoose');



const app = express();
mongoose.connect('mongodb://localhost/garaje-live-coding')
.then(() => console.log('Connected to MongoDB...'));

//CORS
const cors = require('cors');
app.use(cors());

//models
const Coaster = require('./models/coaster.models');
app.get('/api/Coasters', (req, res) => {
    
    Coaster.find()
    .then(allCoasters => { 
        res.json(allCoasters);
    })
});

app.get('/api/Coasters/:Coaster_id', (req, res) => {
    const { Coaster_id } = req.params;

    Coaster.findById(Coaster_id)
    .then(coaster => {
        res.json(coaster)});
    });


app.listen(5000, () => {
    console.log('Server is running on port 3000');
});