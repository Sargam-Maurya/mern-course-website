const mongoose = require("mongoose");
const bcrypt =  require("bcryptjs");
const jwt = require("jsonwebtoken"); //jwt st-3

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
});
//?secure the password with the bcrypt
//pre method
userSchema.pre('save', async function(next){
    // console.log("per Method", this)
    const user = this

    if(!user.isModified("password")){
        next();
    }
    try{
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    }
    catch(error){
        next(error);
    }

});

//compare the password
//this is instance method
userSchema.methods.comparePassword = async function(password){
   return bcrypt.compare(password, this.password)
}

//this ke andar user ka sara data milta hai

//JWT
//this is instance method

userSchema.methods.generateToken = async function(){
   try{
    return jwt.sign({
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
    },
    process.env.JWT_SECRET_KEY,
    {
        expiresIn: '30d',
    }//JWT st-6
    );
   }
   catch(error){
    console.log(error)
   } //JWT st-4 
} ;
//JWT st-2 with this we can create kitne bhi functions

//define the model or the collection name

const User = new mongoose.model("User", userSchema);

module.exports = User;