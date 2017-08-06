const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const urlSchema = new mongoose.Schema({
    query: {
        type: String,
        trim: true,
        required: 'Please enter query to save'
    },
    timeStamp:{
        type: Date,
        default: Date.now,
        required: 'Timestamp not present'
    }
});

module.exports = mongoose.model('Search', urlSchema);
