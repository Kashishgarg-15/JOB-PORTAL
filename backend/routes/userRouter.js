import express from 'express';
import {register,login,logout, getUser,updateProfile,updatePassword} from "../controllers/userController.js"
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router(); //instance

router.post("/register",register);
router.post("/login",login);
router.get("/logout",isAuthenticated,logout); // get : Because logout na to kuch bhej rha h na kuch update kr rha h.
router.get("/getuser",isAuthenticated,getUser);
router.put("/update/profile", isAuthenticated, updateProfile)
router.put("/update/password", isAuthenticated, updatePassword)
// add forget password , reset password
// message bw employee and job applicant // by web socket

export default router;