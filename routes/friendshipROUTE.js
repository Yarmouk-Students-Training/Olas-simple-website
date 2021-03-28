const express= require ('express');
const friendship = require('../models/friendship');
const post = require ('../models/friendship');

const route = express.Router();
route.use(express.json())


route.post('/friendship', async (req, res) => {
    const {  friendId,reject, accept,userId }=req.body
  
    try {
     
      const Friendship = await friendship.create({ friendId,reject, accept,userId })
      return res.json(Friendship)
    }
     catch (err) {
     console.log(err)
     return res.status(500).json(err)
    }
  })
  route.get('/friendship', async (req, res) => {
    try {
      const Friendship = await friendship.findAll()
  
      return res.json(Friendship)
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })
  route.get('/friendship/:friendId', async (req, res) => {
    const friendId = req.params.friendId
    try{
        const friendship = await Friendship.findOne({ where : { friendId }  })
        return res.json(friendship)
    } catch (err) {
        console.log(err)
        return res.status(500).json({error: 'somthing wrong'})
    }
})









module.exports=route;