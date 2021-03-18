/*
const http = require ('http');
const server = http.createServer((req , res)=>
{
    console.log(req);

});
server.listen(1000,'localhost',()=>{
    console.log('listening for request on port 3000');
});

*/
/*
const http = require ('http');
const server = http.createServer((req , res)=>
{
    console.log(req);

});
server.listen(1000,'localhost',()=>{
    console.log('listening for request on port 3000');
});
*/
/*
const http = require ('http');
const server = http.createServer((req , res)=>
{
    console.log(req.url , req.method);
    res.setHeader ('content-type','text/plain');
    res.write ('hello, ola'); //write on browser send request (content)
    res.end(); //to make browser response 

});
server.listen(1000,'localhost',()=>{
    console.log('listening for request on port 3000');
});
*/
//method is get request 
 
//set headers content type (by reponse obj)
/*
const http = require ('http');
const server = http.createServer((req , res)=>
{
    console.log(req.url , req.method);
   
    res.setHeader ('content-type','text/html');
    res.write('<head><link rel="stylesheet" href="#"></head>'); //doesnt working to do here html it will be difcult so we should go back tp html pages 
    res.write ('<p>hello, ola</p>'); //write on browser send request (content)
    res.write ('<p>hello again, ghazal</p>');
    res.end(); //to make browser response 

});
server.listen(1000,'localhost',()=>{
    console.log('listening for request on port 3000');
});
*/
const http = require ('http');
const fs = require ('fs');
const server = http.createServer((req , res)=>
{
    console.log(req.url , req.method);
    res.setHeader ('Content-Type','text/html');
    let path = './htmpages/';
    switch(req.url){
        case '/':
            path += 'index.html' //adding this file to path 
           res.statusCode=200;
            break;


            case '/about': 
            path += 'about.html';
            res.statusCode=200;
            break ;



            case '/about-hme': //redirect
            
            res.statusCode=301;
            res.setHeader('location', '/about');
            res.end();
            break ;



            defaul :
            path += '404.html';
            res.statusCode=404; //we can find in browser-network
            break;

    }

   fs.readFile(path , (err , data)=>
   {
       if (err){console.log(err);
    res.end();}
    else {
       // res.statusCode=200; i will put it in each case
       // res.write(data);
        res.end(data);

    }
   })
      

});
server.listen(1000,'localhost',()=>{
    console.log('listening for request on port 3000');
});
