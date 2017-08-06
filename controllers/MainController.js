const mongoose = require('mongoose');
const SearchModel = mongoose.model('Search');
const SearchMethods = require('../handlers/SearchMethods');

exports.homepage = (req, res) => {
    res.send('Hey! It works!');
}

exports.imageSearch = async (req, res) => {
    // Search and save result
    var result = await SearchMethods.googleImageSearch(req.params.q, req.query.offset);

    // Save query to db
    const searchQuery = new SearchModel();
    searchQuery.query = req.params.q;
    await searchQuery.save();

    // Return results
    res.json(result);
}

exports.latestSearches = async (req, res) => {
    //Fetch latest searches
    var searches = await SearchMethods.getLatest();
    res.json(searches);
}
