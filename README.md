# apiArticles

<h1>Inicializando o projeto na sua máquina</h1>
<p>Insira o comando no seu terminal: npm install<br  />
em seguinda insira: npm start<br  />
Agora API está funcionando no seu <a>http://localhost:3000</a>
</p>

<h1>Para criar o BD</h1>

create database dbApiJuridico;

use dbApiJuridico;

<p>
create table articles(<br  /> 
	id int primary key auto_increment,<br  />    
    title varchar(100),<br  />  
    author varchar(50),<br  />  
    content varchar(3000),<br  />  
    date DATETIME,<br  />  
    category varchar(20)<br  />  
);<br  />
</p> 

