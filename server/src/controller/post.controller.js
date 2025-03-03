import { Posts } from "../models/post.model.js";


export const createPost = async(req, res) =>{
  try {
    let fileArray = []
    req.files.forEach(element => {
      const bfile = {
        fileName:element.originalname,
        filePath:element.path.replace(/\\/g,'/'),
        fileType:element.nimetype,
        fileSize: fileSizeFormatter(element.size,2)
      }
      fileArray.push(bfile);
  });
   const blogfile = new Posts({
    title:req.body.title,
    description:req.body.description,
    files: fileArray,
   });
   await blogfile.save();
    console.log(blogfile);
    res.json({message:'File Uploaded Successfully'});


  } catch (error) {
    console.log(error)
  }

}
const fileSizeFormatter = (bytes, decimal) => {
  if(bytes === 0){
    return '0 Bytes';
  }
  const dm = decimal || 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB']
  const index = Math.floor(Math.log(bytes)/Math.log(1000));
  return parseFloat((bytes/Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index]
}

export const displayPost = async(req,res)=>{
  try {
    const getBlog = await Posts.find()
    res.send(getBlog);
  } catch (error) {
    console.log(error)
  }
}

export const delPost = async(req,res) => {
  try {
    const id = req.params._id;
    const postExist = await Posts.find({_id:id}); 	
    if(!postExist){
      return res.json({message:'Oops, Something Went Wrong'})
    }
    await Posts.findOneAndDelete(id);
    return res.json({message:'Post Delete Successfully'})
  } catch (error) {
    console.log(error)
  }
}

export const getPostById = async (req,res) => {
  try {
    const id = req.params.id;
    const postId = await Posts.findById(id);
    if(!postId){
      return res.status(404).json({message:'Not Found'});
    }
    // const updatePost = await Posts.findOneAndUpdate(id, req.body, req.files, {new: true})
    res.status(200).json(postId)
    console.log(postId)
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
   
};

export const editPost = async(req,res) => {
  try {
    const id = req.params.id
    const {title, description} = req.body;
    const updatePost = await Posts.findByIdAndUpdate(id, req.body, 
      {
        new: true
      });
    res.status(200).json(updatePost);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
}

export default {createPost, displayPost, delPost, getPostById, editPost};