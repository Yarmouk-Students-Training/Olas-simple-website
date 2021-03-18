const express = require ('express');
//express app
const app = express();
//listen for requests
app.listen(1000);
// 2 argument  the second (res(subject) and req)
app.get('/', (req,res)=>{
res.send('<p>home page </p> ');
//res.sendFile('./htmpages/index.html', {root: __dirname});
});

app.get('/about', (req,res)=>{
    res.send('<p>about page </p> ');

    });

 //redirect


 //404 page


app.use((req , res)=>{
   res.status(404).res.sendFile('./htmpages/404.html', {root: __dirname});
})
