const express = require('express');
const router = express.Router();

const juridicoController = require('./controllers/juridicoController');

router.get('/articles/:sort?', juridicoController.getArticles);
router.get('/articles/category/:category', juridicoController.getArticlesByCategory);
router.get('/articles/keyword/:keyword', juridicoController.getArticlesByKeyword);

router.post('/articles', juridicoController.postArticle);
router.put('/articles/:id', juridicoController.putArticle);
router.delete('/articles/:id', juridicoController.deleteArticle);


module.exports = router;