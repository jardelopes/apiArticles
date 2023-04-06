const juridicoService = require('../services/juridicoService');

module.exports = {
    getArticles: async (req, res) =>{
        let json = {error: '', result: []};
        let articles = await juridicoService.getArticles();

        for (let i in articles){
            json.result.push({
                id: articles[i].id,
                title: articles[i].title,
                author: articles[i].author,
                content: articles[i].content,
                date: articles[i].date,
                category: articles[i].category
            });
        }
        if(req.params.sort === "bySort"){
            json.result.sort(function(a,b) {
                return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
            });
        }
        res.json(json);
    },
    
    postArticle: async (req, res) =>{
        let json = {error: '', result: {}};
        let title = req.body.title;
        let author = req.body.author;
        let content = req.body.content;
        let date =  req.body.date;
        let category = req.body.category;
        if(title && author && content && date && category){
            let idArticle = await  juridicoService.postArticle(title, author, content, date, category);
            json.result ={
                id: idArticle,
                title,
                author,
                content,
                date,
                category
            };
        }else{
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    putArticle: async (req, res) =>{
        let json = {error: '', result: {}};
        let id = req.params.id;
        let title = req.body.title;
        let author = req.body.author;
        let content = req.body.content;
        let date =  req.body.date;
        let category = req.body.category;
        if(id && title && author && content && date && category){
            await  juridicoService.putArticle(id, title, author, content, date, category);
            json.result ={
                id,
                title,
                author,
                content,
                date,
                category
            };
        }else{
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },


    getArticlesByCategory: async (req, res) =>{
        let json = {error: '', result: []};

        let category = req.params.category;
        let articles = await juridicoService.getArticlesByCategory(category);

        if(articles){
            json.result = articles;
        }
        res.json(json);
    },

    getArticlesByKeyword: async (req, res) =>{
        let json = {error: '', result: []};

        let keyword = req.params.keyword;
        console.log(keyword)
        let articles = await juridicoService.getArticlesByKeyword(keyword);

        if(articles){
            json.result = articles;
        }
        res.json(json);
    },

    deleteArticle: async (req, res) =>{
        let json = {error: '', result: []};
        console.log(req.params.id)
        await juridicoService.deleteArticle(req.params.id);
        res.json(json);
    }
}