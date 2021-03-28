const {sequelize , User}= require ('./models')
const  userROUTE = require('./routes/userROUTE.js')
const  friendshipROUTE = require('./routes/friendshipROUTE.js')
const  postROUTE = require('./routes/postROUTE.js')
const  likeROUTE = require('./routes/likeROUTE.js')
const  commentROUTE = require('./routes/commentROUTE.js')
 
 
 const express = require ('express')

 




const app = express()

app.use(express.json())




app.listen({port : 1000}, async ()=>{
    console.log('Server up on http://localhost:5000')
    await sequelize.sync({force:true}) 
    console.log('Database connected') 
})


app.use(userROUTE);

app.use(friendshipROUTE);

app.use(postROUTE);

app.use(commentROUTE);

app.use(likeROUTE);


