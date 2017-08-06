const GoogleImages = require('google-ims');
const client = new GoogleImages(process.env.GOOGLE_CUSTOM_SEARCH_CX, process.env.GOOGLE_CUSTOM_SEARCH_API_KEY);

exports.googleImageSearch = async function (query, offset = 10) {
    //Search and return results
    var results = await client.search(query, {
        num: offset
    });
    return results;
}

exports.getLatest = function() {
    
}
