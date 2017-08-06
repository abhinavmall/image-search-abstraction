const GoogleImages = require('google-ims');
const client = new GoogleImages('006602967592483137666:hjwaomh2odc', 'AIzaSyBgRTSAU2Pe43rhUL6qpFGzultLwMd83_Y');

exports.googleImageSearch = async function (query, offset = 10) {
    //Search and return results
    var results = await client.search(query, {
        num: offset
    });
    return results;
}
/*results = await client.search('cats',{
    num:1,
    fields: ['url', 'thumbnail']
})
	.then(images => {
        console.log(images)
		/*
		[{
			"url": "http://steveangello.com/boss.jpg",
			"type": "image/jpeg",
			"width": 1024,
			"height": 768,
			"size": 102451,
			"thumbnail": {
				"url": "http://steveangello.com/thumbnail.jpg",
				"width": 512,
				"height": 512
			}
		}]
		 *//*
	});

client.search('cats', function(err,images){
    console.log('ss '+images)
})*/
