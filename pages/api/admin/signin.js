
require('dotenv').config()
import jwt from 'jsonwebtoken'
import Cookies from 'cookies'




export default async (req,res)=>{
      
    const {email,password} = req.body
    try{
       if(!email || !password){
         return res.status(422).json({error:"Invalid Input"})
       }

       if(email == process.env.ADMIN_ID && password==process.env.ADMIN_PASS){
          const token =  jwt.sign({userId:email},process.env.JWT_SECRET,{
            expiresIn:"7d"
        })

        const cookies = new Cookies(req, res)

        cookies.set('tokenAdmin', token, {
          httpOnly: true ,
          secure:false,
          maxAge: 60 * 60 * 24,
          sameSite: "strict",
          path: "/",
      })

      cookies.set('email', email, {
        httpOnly: true ,
        secure:false,
        maxAge: 60 * 60 * 24,
        sameSite: "strict",
        path: "/",
    })
        res.status(201).json({message: email})

       } else{
          return res.status(401).json({error:"Invalid Input"})
       }
    }catch(err){
        console.log(err)
    }
}