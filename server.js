var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleone={
    title:"article",
    heading:"HOME",
    subheading:"about me",
    content:`<article>
            hi this is jeevan iwant to tell about me,hi this is jeevan iwant to tell about me,
            hi this is jeevan iwant to tell about me
        </article>`
    };
var articletwo={
    title:"article",
    heading:"HOME",
    subheading:"about me2",
    content:`<article>
            hi this is jeevan iwant to tell about me,hi this is jeevan iwant to tell about me,
            hi this is jeevan iwant to tell about me
        </article>`
    };    
    var articlethree={
    title:"article",
    heading:"HOME",
    subheading:"about me3",
    content:`<article>
            hi this is jeevan iwant to tell about me,hi this is jeevan iwant to tell about me,
            hi this is jeevan iwant to tell about me
        </article>`
    };
function template(data)
{
    var article=data.title;
    var heading=data.heading;
    var  subheading=data.subheading;
    var content=data.content;
var htmltemplate=`
<html>
    <head>
        <title>${article}</title>
        <meta charset="UTF-8">
        <meta name="keywords" content="hasura ,imad">
        <meta name="viewport" content="width=device-width,intial-scale=1">
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <h2>
          <a href="/">${heading}</a>
        </h2>
        <hr/>
        <div>
        <h3>${subheading}</h3>
        </div>
        <div>
        <article>
            ${content}
        </article>
        </div>
    </div>
    </body>
    
</html>
`; 
return htmltemplate;
    
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/article-one',function(req,res){
    res.send(template(articleone));
});
app.get('/article-three',function(req,res){
    res.send(template(articletwo));
});
app.get('/article-two',function(req,res){
 res.send(template(articlethree));
});

var names=[];
app.get("/submit-name",function(req,res){
    
    var name=req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
    
});




// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
