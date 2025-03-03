import { Members } from "../models/member.model.js";

export const createMember = async(req,res) =>{
  try {
    const {lastname,firstname,email,phone, position} = req.body;
    const member = await Members.findOne({phone, email})
    if(member){
      return res.json('Member with Phone number and Email Address Exist')
    }
    const newMember = {
      lastname,
      firstname,
      email,
      phone,
      position
    };
    const result = await Members.create(newMember);
    if(result){
      return res.status(200).json({message:'Created'})
    }
  } catch (error) {
    console.log(error)
  }
}

export const getMember = async(req,res) => {
  try {
    const members = await Members.find()
    res.send(members);
  } catch (error) {
    console.log(error)
  }
}

export const deleteMember = async (req,res) =>{
  try {
    const id = req.params._id;
    const memberExist = await Members.find({_id:id});
    if(!memberExist){
      return res.json('Oops, Something Went Wrong')
    }
    await Members.findOneAndDelete(id);
    return res.json('Member Delete Successfully')
  } catch (error) {
    console.log(error)
  }
}

export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await Members.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "Member not found." });
    }
    res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
 
export const updateMember = async(req,res)=>{
try {
  const id = req.params.id;
  const { lastname,firstname, email, phone, position} = req.body;
  const userExist = await Members.findById(id);
  if (!userExist) {
    return res.status(404).json({ message: "Member not found." });
  }
  const updatedData = await Members.findByIdAndUpdate(id, req.body, {
    new: true,
  });
   res.status(200).json(updatedData);
} catch (error) {
  res.status(500).json({ errorMessage: error.message });
}
}



export default {createMember, getMember, deleteMember,getUserById, updateMember};