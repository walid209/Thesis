const route =require('express').Router()
const autoriser=require('../Middelware/Owner')
const {getOwner,register,login,updateOwner,getOwnerEmail}=require('../Controllers/OwnerController')
route.get('/getOwner',getOwner)
route.get('/:email',getOwnerEmail)
route.post('/reg',register)
route.post("/log/:email",autoriser,login)
route.put("/upd/:id",updateOwner)
module.exports=route