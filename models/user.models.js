import mongoose from 'mongoose'

const UserSchema=new mongoose.UserSchema(
    {
        email:{
            type:String,
            required:true
        }


},{TimeStamps:true})



export const user=mongoose.model("User",UserSchema)