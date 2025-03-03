import axios from "axios";
const apiUrl = 'http://localhost:5000/';

export const multipleFileUpload = async(data) =>{
  try {
    await axios.post(apiUrl + 'upload', data)
  } catch (error) {
    throw error;
  }
}
export const getFiles = async() => {
  try {
    const {data} = await axios.get(apiUrl + 'getUploads');
    return data;
  } catch (error) {
    throw error;
  }
}

export const delFile = async () => {
  try {
    const {id}= await axios.delete(apiUrl + '/delete/:id');
    return id;
  } catch (error) {
    throw error
  }
}

export const getVids = async()=>{
  try {
    const {data} = await axios.get(apiUrl + 'getVideo');
    return data;
  } catch (error) {
    throw error;
  }
}

export const createMembers = async(data) => {
  try {
    await axios.post(apiUrl + 'member',data);
  } catch (error) {
    throw error;
  }
}

export const getMembers = async()=>{
  try {
   const{data} = await axios.get(apiUrl + 'getMember');
   return data;
  } catch (error) {
    throw error
  }
}

export const getUsersById = async () => {
  try {
    const {data}= await axios.get(apiUrl + 'getUser/:id');
    return data;
  } catch (error) {
    throw error
  }
}

export const getUser = async () =>{
  try {
   const{data} = await axios.get(apiUrl + 'getUser');
   return data;
  } catch (error) {
    throw error
  }
}

