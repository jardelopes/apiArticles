const db = require('../db');

module.exports = {
    getArticles: () =>{
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM articles', (error, results)=>{
                if(error){
                    reject(error);
                    return;
                }
                resolve(results);
            });            
        });
    }, 

    getArticlesByCategory: (category) =>{
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM articles WHERE category = ?', [category], (error, result) =>{
                if(error){
                    reject(error);
                    return;
                }
                resolve(result);
            });
        });
    },

    getArticlesByKeyword: (keyword) =>{
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM articles WHERE title Like '%"+keyword+"%' OR content Like '%"+keyword+"%'", (error, result) =>{
                if(error){
                    reject(error);
                    return;
                }
                resolve(result);
            });
        });
    },

    postArticle: (title, author, content, date, category) =>{
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO articles (title, author, content, date, category) VALUES (?, ?, ?, ?, ?)',
                [title, author, content, date, category],
                (error, results) =>{
                    if(error){
                        reject(error);
                        return;
                    }
                    resolve(results.insertId);
                }
            );
        });
    },

    putArticle: (id, title, author, content, date, category) =>{
        return new Promise((resolve, reject) => {
            db.query('UPDATE articles SET title = ?, author = ?, content = ?, date = ?, category = ? WHERE id = ?',
                [title, author, content, date, category, id],
                (error, results) =>{
                    if(error){
                        reject(error);
                        return;
                    }
                    resolve(results);
                }
            );
        });
    },

    deleteArticle: (id) =>{
        return new Promise((resolve, reject) => {
            db.query("DELETE FROM articles WHERE id = ?", [id],  (error, result) =>{
                if(error){
                    reject(error);
                    return;
                }
                resolve(result);
            });
        });
    }
};