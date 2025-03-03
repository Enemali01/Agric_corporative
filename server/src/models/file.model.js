import { model, Schema } from "mongoose";

export const multiplefileSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    files: [Object]
  },{timestamps:true});

export const MultipleFile = model('multipleFile', multiplefileSchema)