const express= require ('express');

const post = require ('../models/post');

const route = express.Router();

route.use(express.json())

route.post('/post', async (req, res) => {
    const { content , postId , creator , userId} = req.body
  
    try {
      
      const post = await post.create({content , postId , creator, userId})
      return res.json(Post)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  })
  route.get('/post', async (req, res) => {
    try {
      const post = await post.findAll()
  
      return res.json(post)
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })
  
  route.get('/post/:postId', async (req,res ) =>{
    const postId = req.params.postId
    try{
        const post = await Post.findOne({ where : { postId }  })
        return res.json(post)
    } catch (err) {
        console.log(err)
        return res.status(500).json({error: 'somthing wrong'})
    }
})
//update post
route.put('/post',async(req,res) =>{
    const{postId,creator,contant, userId} =req.body
    try{
        console.log(Post.toString())
        const post =await Post.findByPk(postId)
        post.creator = creator
        post.contant = contant
        await post.save()
        return res.json(post)

     }catch (err) {
         console.log(err)
         return res.status(500).json({error:  'something wrong'})
     }
    
}),

  route.delete('/post/:postId', async (req, res) => {
    const postId = req.params.postId
    try {
      const post = await posts.findOne({ where: { postId } })
      await post.destroy()
      return res.json({ message: 'DELETEDD' })
    } 
    catch (err) {
    console.log(err)
    return res.status(500).json({ error: ' wrong' })
    }
  })






module.exports=route;