import express from "express";
import mongoose from 'mongoose'
import { UserModel } from "../models/user.model.js";
import bcrypt from 'bcrypt'

export const employeesSignup = async (req, role, res) => {
    // Getting the employee lastname from the database
    const validateLastname = async (lastname) => {
      const User = await UserModel.findOne({lastname});
      return User ? false : true;
    };
// Getting the employee email from the database
    const validateEmail = async (email) => {
      const User = await UserModel.findOne({email});
      return User ? false : true;
    };
// Validate lastname
    const lastnameNotTaken = await validateLastname(req.lastname);
     if(!lastnameNotTaken){
      return res.status (400).json({
        message: `Last name already exist`,
      });
     };
  // Validate Email
  const emailNotTaken = await validateEmail(req.email);
     if(!emailNotTaken){
      return res.status(400).json({
        message: `Email exist.`,
      });
     };

    // Hash password and create a new user
    const password = await bcrypt.hash(req.password, 12);
    const newEmployee = new UserModel ({
      ...req,
      firstname,
      lastname,
      email,
      password,
      role
    });
    await newEmployee.save();
    return res.send(201).json({
      message:`User has been created successfully`
    });
}