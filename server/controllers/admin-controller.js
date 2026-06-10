const User = require("../models/user-model") //admin-3
const Contact = require("../models/contact-model")

// * -----------------------------------
    // getAllUsers logic 
// * -----------------------------------
const getAllUsers = async (req, res, next) => {
    try{
        const users = await User.find({}, {password: 0})
        console.log(users);
        if(!users || users.length === 0){
            return res.status(404).json({message: 'No users found'})
        }
        return res.status(200).json(users)
    }//admin-4
    catch(error){
        next(error);
    }
} //admin-2


// * -----------------------------------
    // single user  logic  edit-2
// * -----------------------------------

const getUserById = async (req, res) => {
    try{
        const id = req.params.id
        const data = await User.findOne({_id: id}, {password: 0})
        return res.status(200).json(data)
    }
    catch(error){
        next(error)
    }
}    


// * -----------------------------------
    // user update logic  //edit -4
// * -----------------------------------


const updateUserById = async (req, res) => {
    try{
        const id = req.params.id
        const updateUserData = req.body
        const UpdatedData = await User.updateOne({_id: id}, {$set: updateUserData,})
        return res.status(200).json(UpdatedData)
    }
    catch(error){
        next(error)
    }
}
// * -----------------------------------
    // user delete logic  delete s-3
// * -----------------------------------

const deleteUserById = async (req, res) => {
    try{
        const id = req.params.id
        await User.deleteOne({_id: id})
        return res.status(200).json({message: "User Deleted Successfully"})
    }
    catch(error){
        next(error)
    }
}   

// * -----------------------------------
    // contact delete logic  delete s-3
// * -----------------------------------

const deleteContactById = async (req, res) => {
    try{
        const id = req.params.id
        await Contact.deleteOne({_id: id})
        return res.status(200).json({message: "Contact Deleted Successfully"})
    }
    catch(error){
        next(error)
    }
}

// * -----------------------------------
    // getAllContacts logic 
// * -----------------------------------

const getAllContacts = async (req, res) => {
    try{
       const contacts = await Contact.find()
       if(!contacts || contacts.length === 0){
        return res.status(404).json({message: 'No Contacts Found'})
       }
       res.status(200).json(contacts)
    }
    catch(error){
        next(error)
    }
}

module.exports = { getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById, deleteContactById };