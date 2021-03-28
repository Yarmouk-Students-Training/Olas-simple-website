const express= require ('express');
const like = require ('../models/like');

const route = express.Router();
route.use(express.json())

route.post('/like', async (req, res) => {
    const {  likeReaction , postsId , like_id ,userId:userId } = req.body
  
    try {
      const Like = await like.create({ likeReaction , postsId , like_id ,userId:userId})
      return res.json(Like)
      } 
      catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  })
 route.get('/like',async(req,res) =>{
    try{
        const like =await Like.findAll()
       
        return res.json(like)
    } catch(err){ 
        return res.status(300).json({error: 'something went wrong'})

    }
}),

route.get('/like/:like_id', async (req,res ) =>{
    const like_id = req.params.like_id
    try{
        
        const like = await Like.findOne({ where : { like_id }  })
        return res.json(like)
    } catch (err) {
        console.log(err)
        return res.status(500).json({error: 'somthing wrong'})
    }
})

route.put('/like',async(req,res) =>{
    const{likeReaction , postsId , like_id ,userId:userId} =req.body
    try{
        const likeReaction =await Like.findByPk(id)
     like.likeReaction =likeReaction
        await like.save()
        return res.json(like)

     }catch (err) {
         console.log(err)
         return res.status(500).json({error:  'something wrong'})
     }
    
}),

route.delete('/like/:like_id',async(req,res)=>{
    const id = req.params.id
    try{
        const like = await Like.findOne({where: { like_id}})
        await like.destroy()
        return res.json({message: 'deleted'})
    } catch (err){
        console.log(err)
        return res.status(500).json({error:'somthing went wrong'})
    }
})





module.exports=route;