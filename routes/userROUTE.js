const express = require('express');

const {User} = require ('../models/index');
const route = express.Router()

route.use(express.json())


route.post('/user', async (req, res) => {
  const  { firstName , email,  lastName ,userId}=req.body

  try {
  
    const user = await User.create({ firstName , email,  lastName ,userId })

    return res.json(user)
  } 
  catch (err) {
  console.log(err)
  return res.status(500).json(err)
  }
})


route.get('/user', async (req, res) => {
  try { 
     
    const User = await user.findAll()

    return res.json(User)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
})



route.get('/user/:userId', async (req,res ) =>{
  const userId = req.params.useruserId
  try{
      
      const user = await User.findOne({ where : {userId }  })
      return res.json(user)
  } catch (err) {
      console.log(err)
      return res.status(500).json({error: 'somthing wrong'})
  }
})

route.put('/user',async(req,res) =>{
  const{userId, fisrtName , email,  lastName} =req.body
  try{
      
      const user =await User.findByPk(userId)
      user. fisrtName= fisrtNam
      user.email= email
      user.lastName=lastName 
      await user.save()
      return res.json(user)

   }catch (err) {
       console.log(err)
       return res.status(500).json({error:  'something wrong'})
   }
  
}),

route.delete('/user/:userId',async(req,res)=>{
  const userId = req.params.userId
  try{
      const user = await User.findOne({where: {UserId: userId}})
      await user.destroy()
      return res.json({message: 'DELETED'})
  } catch (err){
      console.log(err)
      return res.status(500).json({error:'somthing went wrong'})
  }
})


module.exports=route;