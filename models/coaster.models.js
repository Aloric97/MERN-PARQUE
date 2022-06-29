const mongoose= require('mongoose');

const CoasterSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:String,
    length: Number,
    inversions: Number,
    imageURL: String,
});

const Coaster= mongoose.model('Coaster', CoasterSchema);

module.exports = Coaster;