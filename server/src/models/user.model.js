import { model, Schema } from 'mongoose';

// user is the structure of the user in the database

export const UserSchema = new Schema(
  {
    lastname:{type: String},
    firstname:{type: String},
    email:{type:String, required: true, unique: true},
    password:{type: String, required: true},
    username:{type: String, required: true, unique: true},
    isAdmin:{type: Boolean, default: true},
  },
  {
    timestamps:true,
    toJSON:{
      virtuals:true,
    },
    toObject:{
      virtuals: true,
    },
  },
);

export const UserModel = model('users', UserSchema);

