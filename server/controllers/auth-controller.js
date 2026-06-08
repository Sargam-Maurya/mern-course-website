const User = require("../models/user-model");
const bcrypt = require("bcryptjs")

// **********************************************
// Home Logic 
// **********************************************

const home = async (req, res) => {
    try{
        res.status(200).send('Welcome to best mern series of thapa technical using router ')
    }
    catch (err){
        res.status(500).send({message: 'Page Not Found'})
    }
}

// **********************************************
//User Register Logic
// **********************************************

const register = async (req, res) => {
    try{
        console.log(req.body)
        const {username,email,phone,password} = req.body

        const userExist = await User.findOne({email});

        if(userExist){
          return  res.status(400).send({message: 'Email already exists'})
        }


        // hash the password
        // const saltRound = 10
        // const hash_password = await bcrypt.hash(password, saltRound)

        const userCreated =   await User.create({
            username, 
            email, 
            phone, 
            password,
        }) //bcrypt 


        res.status(200).json({
            // msg: userCreated, 
            msg: "registration Successful",
            token: await userCreated.generateToken(), //JWT st-1 
            userID: userCreated._id.toString(),  //JWT st-7
        }) 
    }
    catch (error){
        next(error);
    }
}

// **********************************************
//User Login Logic
// **********************************************

const login = async (req, res) => {
   try{
    const {email, password} = req.body;
    const userExist = await User.findOne({email});
    console.log(userExist);

    if(!userExist){
       return res.status(400).json({msg: "Invalid Credentails"});
    }

    // const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);

    if(user){
        res.status(200).json({
            msg: "login Successful",
            token: await userExist.generateToken(),
            userID: userExist._id.toString(),
        })
    }else{
        res.status(401).json({msg: 'Invalid email or password'});
    }

   }
   catch(error){
    res.status(500).json("internal server error");
   }
}

// **********************************************
//to send user data - user logic
// **********************************************

const user = async (req, res) => {
    try{
        const userData = req.user //#33-3
        console.log(userData)
        res.status(200).json({userData})
    }
    catch(error){   
        console.log(`error from the user route ${error}`)
        res.status(500).json({ message: "Internal Server Error" });
    }
}//#33-2

module.exports = {home, register, login, user};  //#33-4