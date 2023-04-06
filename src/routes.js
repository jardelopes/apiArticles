const express = require('express');
const router = express.Router();

const juridicoController = require('./controllers/juridicoController');

router.get('/articles/:sort?', juridicoController.getArticles);
router.get('/articles/category/:category', juridicoController.getArticlesByCategory);
router.get('/articles/keyword/:keyword', juridicoController.getArticlesByKeyword);

router.post('/article', juridicoController.postArticle);
router.put('/article/:id', juridicoController.putArticle);
router.delete('/article/:id', juridicoController.deleteArticle);


module.exports = router;