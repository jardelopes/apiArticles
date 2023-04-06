# apiArticles

#Para criar o BD

create database dbApiJuridico;

use dbApiJuridico;

create table articles(
	id int primary key auto_increment,
    title varchar(100),
    author varchar(50),
    content varchar(3000),
    date DATETIME,
    category varchar(20)
);

