//#33-7
const jwt = require("jsonwebtoken")
const User = require("../models/user-model")

const authMiddleware = async(req, res, next) => {
    const token = req.header("Authorization")
    if(!token){
        //if you attampt to use an expired token, u will receive a '401 unauthorized HTTP' response
        return res.status(401).json({message: "Unauthorized HTTP, Token not provided"})
    }
    
    //Assuming token is in the format 'bearer <jwtToken>, Removing the 'Bearer' prefix
    const jwtToken = token.replace("Bearer", '').trim()
    // const jwtToken = token.split(" ")[1];
    console.log("token from auth middleware", jwtToken)
    
    
    try{

        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY)
        
        const userData = await User.findOne({email: isVerified.email}).select({
            password:0 //password hide karne ke liye use kiya hai 
        })
        console.log(userData)
        req.user = userData; // use jab bhi middleware use kar raha hai toh
        req.token = token;
        req.userId = userData._id

        next()
    }
    catch(error){
        return res.status(401).json({message: "Unauthorized HTTP, Invalid token"})
    }
}
module.exports = authMiddleware