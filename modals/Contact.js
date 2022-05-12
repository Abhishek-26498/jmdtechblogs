import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:50,
    },
    email:{
        type:String,
        required:true,
        maxlength:60,
    },
    phone:{
        type:String,
        required:true,      
    },
    message:{
        type:String,
        required:true,
        maxlength:5000,
    }, 
},
{timestamps:true}
);
export default mongoose.models.Contact || 
mongoose.model("Contact",ContactSchema);