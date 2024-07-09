import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    phone:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const USER = mongoose.model('members',userSchema)

export default USER