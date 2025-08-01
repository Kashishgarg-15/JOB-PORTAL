import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; // To generate signed tokens for authentication.
import validator from "validator";

const userSchema = new mongoose.Schema({
    name :{
        type: String,
        required : true, // This message is handled in frontend
        minLength : [3,"Name must contaion at least 3 characters"],
        maxLength : [30,"Name cannot exceed 30 characters."]
    },
    email:{
        type: String,
        required : true,
        validate : [validator.isEmail,"Please provide valid email."]
    },
    phone:{
        type:Number,
        required:true,
    },
    address:{
        type: String,
        required :true,
    },
    niches:{
        firstNiche : String,
        secondNiche: String,
        thirdNiche : String
    },
    password:{
        type: String,
        required: true,
        minLength : [8,"Password must contain at least 8 characters."],
        maxLength : [32,"Password cannot exceed 32 characters."],
        select : false,
    },
    resume:{
        public_id: String,
        url : String
    },
    coverLetter:{
        type: String,
    },
    role:{
        type : String,
        required: true,
        enum : ["Job Seeker","Employer"]
    },
    createdAt:{
        type: Date,
        default : Date.now,
    }
});

userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        return next(); 
    }

    this.password = await bcrypt.hash(this.password, 10);
    next(); 
});   // Before saving a user, this middleware checks if password is modified. If yes, hashes the password using bcrypt.(10 rounds of salt).

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
} // Compares a plain text password with the hashed one in the DB.


userSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id}, //Signs a JWT token with user ID as payload.
        process.env.JWT_SECRET_KEY,{ // Uses a secret key from .env
        expiresIn: process.env.JWT_EXPIRE, //Adds an expiry time to auto-logout after a while.
    })
}

export const User = mongoose.model("User",userSchema) //collection name will be users.