import { MultipleFile } from "../models/file.model.js";
import { Video } from "../models/video_file.model.js";

// Display all picture file
export const multipleFileUpload = async (req, res, next) => {
  try {
    let filesArray = []
    req.files.forEach(element => {
      const file = {
        fileName:element.originalname,
        filePath:element.path.replace(/\\/g,'/'),
        fileType:element.nimetype,
        fileSize: fileSizeFormatter(element.size,2)
      }
      filesArray.push(file);
  });
   const multipleFiles = new MultipleFile({
    title:req.body.title,
    files: filesArray,
   });
   await multipleFiles.save();
    console.log(multipleFiles);
    res.json('File Uploade Successfully');
  } catch (error) {
    res.json(error.message)
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

// Get all pictures files
export const getFiles = async(req,res,next) => {
  try {
    const files = await MultipleFile.find();
   res.send(files); 
  } catch (error) {
    res.json(error.message)
  }
}

// Delete a picture files
export const deleteFile = async(req,res) => {
  try {
  const id = req.params._id; 
  const fileExist = await MultipleFile.find({_id:id});
  if(!fileExist){
    return res.status(400).json({message:'File Does not Exist'})
  }
  await MultipleFile.findOneAndDelete(id);
    res.status(200).json({message: 'File has been deleted successfully!'})
  } catch (error) {
    console.log(error)
  }

}

export const videoFIle = async(req,res,next) => {
  try {
    let videoArray = []
    req.files.forEach(element => {
      const vfile = {
        fileName:element.originalname,
        filePath:element.path.replace(/\\/g,'/'),
        fileType:element.nimetype,
        fileSize: fileSizeFormatter(element.size,2)
      }
      videoArray.push(vfile);
  });
   const vidFile = new Video({
    title:req.body.title,
    videos: videoArray,
   });
   await vidFile.save();
    console.log(vidFile);
    res.json({message:'File Uploaded Successfully'});
  } catch (error) {
    res.json(error.message)
  }
}

// Get all Video files
export const getVideos = async(req,res,next) => {
  try {
    const files = await Video.find();
   res.send(files); 
  } catch (error) {
    res.json(error.message)
  }
}
export const delVideo = async(req,res) =>{
  try {
    const id = req.params._id;
    const videoExist = await Video.find({_id:id});
    if(!videoExist){
      return res.status(400).json({message:'File Does not exist'})
    }
    await Video.findOneAndDelete(id);
    return res.status(200).json({message:'Video has been deleted Successfully!'})
  } catch (error) {
    console.log(error)
  }
}


// export const displayPaginate = async(req,res) =>{
//   const allImage = await MultipleFile.find({});
//   const page = parseInt(req.query.page)
//   const limit = parseInt(req.query.limit)

//   const startIndex = (page - 1) * limit
//   const lastIndex = (page) * limit

//   const results = {}
//   results.totalImages = allImage.length;
//   results.pageCount = Math.ceil(allImage.length/limit);

//   if(lastIndex <allImage.length){
//     results.next ={
//     page:page+1,
//     limit:limit
//    }
//   }
//   if(startIndex>0){
//       results.prev ={
//       page:page-1,
//     }
//   } 
 

//   results.result = allImage.slice(startIndex,lastIndex);

//   res.json(results)
// }


export default {multipleFileUpload, getFiles, deleteFile, videoFIle, getVideos, delVideo};