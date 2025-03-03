// import mongoose from "mongoose";
// import jwt from "jsonwebtoken";
// import bcrypt from 'bcrypt'
// import { UserModel } from "../models/user.model";

// const employeeLogin = async (req,role,res) => {
//    const {username, password} = req;
//   //  Checking if the username
//    const user = await UserModel.findOne({username});
//    if(!user){
//     return res.status(404).json({
//       message: "Username does not exist or it is Invalid",
//       success: false,
//     });
//    }

//    const isMatch = await bcrypt.compare(password, user.password);
//    if(!isMatch){
//     const token = jwt.sign(
//       {
//       role: user.role,
//       username: user.username,
//       email: user.email,
//     },
//     process.env.JWT_SECRET,
//     {expiresIn: "3days"}  
//   );

//   const result = {
//     lastname: user.lastname,
//     username: user.username,
//     role: user.role,
//     token: `Bearer ${token}`,
//     expiresIn: 168,
//   };
// return res.status(200).json({...result,
//     message: "You are logged im"
// })

//    }else{
//     return res.json({
//       message: 'Incorrect Username and Password.'
//     })
//    }
// };