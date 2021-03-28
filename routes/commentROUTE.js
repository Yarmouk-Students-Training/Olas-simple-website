const express= require ('express');

const comment = require ('../models/comment');

const route = express.Router();

route.use(express.json())


route.post('/comment', async(req,res) =>{
    const {userId ,contant,  postId ,comment_Id} = req.body
    
    try{
        const comment = await Comment.create({userId ,contant,  postId ,comment_Id})

        return res.json(comment)
    }
    catch(err) {
        console.log(err)
        return res.status(300).json(err)
    }
}),
route.get('/comment',async(req,res) =>{
    try{
        const comments =await Comment.findAll()
       
        return res.json(comment)
    } catch(err){ 
        return res.status(300).json({error: 'something went wrong'})

    }
}),

route.get('/comment/:comment_Id', async (req,res ) =>{
    const comment_Id = req.params.comment_Id
    try{
        
        const comment = await Comment.findOne({ where : { comment_Id }  })
        return res.json(comment)
    } catch (err) {
        console.log(err)
        return res.status(500).json({error: 'somthing wrong'})
    }
})

route.put('/comment',async(req,res) =>{
    const{userId ,contant,  postId ,comment_Id} =req.body
    try{
        const comment =await Comment.findByPk(comment_Id)
    
        comment.contant = contant
        await comment.save()
        return res.json(comment)

     }catch (err) {
         console.log(err)
         return res.status(500).json({error:  'something wrong'})
     }
    
}),

route.delete('/comment/:comment_Id',async(req,res)=>{
    const comment_Id = req.params.comment_Id
    try{
        const comment = await Comment.findOne({where: { comment_Id}})
        await comment.destroy()
        return res.json({message: 'DELETED'})
    } catch (err){
        console.log(err)
        return res.status(500).json({error:'somthing went wrong'})
    }
})








module.exports=route;