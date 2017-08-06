const mongoose = require('mongoose');
const SearchModel = mongoose.model('Search');
const SearchMethods = require('../handlers/SearchMethods');

exports.homepage = (req, res) => {
    res.send('Hey! It works!');
}

exports.imageSearch = async (req, res) => {
    // Search and save result
    var result = await SearchMethods.googleImageSearch(req.params.q, req.query.offset)
    // Save query to db

    // Return results
    res.json(result)
}
