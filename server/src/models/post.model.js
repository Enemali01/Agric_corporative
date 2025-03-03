import { model, Schema } from "mongoose";
import { type } from "os";

export const PostSchema = new Schema(
  {
    title:{type: String},
    description:{type: String},
    createdAt: {type: Date},
    files: [Object]
  },{timestamp:true}
)
export const Posts = model('post', PostSchema);