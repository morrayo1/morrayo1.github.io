//node + express + MongoDB(NoSQL) + angular     =MEAN 스택

const express = require('express');
var app = express();
var server = app.listen(8080);

app.set('views',__dirname + '/views');
app.set('view engine','ejs');
app.use(express.static('public'));

//라우터 설정 -> 경로(주소)
app.get('/',function(req,res){
    
    var data = {};
    
    data.title = 'blog title!!!';
    data.color=['red','blue','green'];
    
    res.render('index',data);
    
});

app.get('/blog',function(req,res){
    
    //res.send('블로그 메인화면');
    res.render('blog');
               
});


app.get('/blog/ajax',function(req,res){
    
    res.json({title : 'ajax blog'});
    
    
});

//ejs