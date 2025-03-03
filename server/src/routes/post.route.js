import {Router} from 'express'
import upload from "../helpers/helpers.js";
import {createPost, displayPost, delPost, getPostById, editPost} from '../controller/post.controller.js'

const route = Router();

route.post('/post', upload.array('files'),createPost);
route.get('/getPost', displayPost);
route.delete('/deletPost/:id', delPost);
route.get('/posts/:id', getPostById)
route.put('/update/:id', editPost)

export default route