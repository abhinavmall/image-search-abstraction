const express = require('express');
const router = express.Router();
const mainController = require('../controllers/MainController');

router.get('/', mainController.homepage);

router.get('/api/imagesearch/:q', mainController.imageSearch);
router.post('/api/imagesearch/:q', mainController.imageSearch);

router.get('/api/latest', mainController.latestSearches);
router.post('/api/latest', mainController.latestSearches);

module.exports = router;
