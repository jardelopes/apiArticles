# apiArticles

#Para criar o BD

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

