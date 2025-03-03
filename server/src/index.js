import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import cors from 'cors'
import nodemailer  from 'nodemailer'
import path from 'path';
import { fileURLToPath } from 'url';
import handlebars from 'handlebars'
import mail from './routes/mail.route.js'
import users from './routes/user.route.js'
import uploads from './routes/fileupload.route.js'
import members from './routes/members.route.js'
import post from './routes/post.route.js'
import fs from 'fs'

import { dbconnect } from './dbConfig/dbConfig.js';
import bodyParser from 'body-parser';
import { Posts } from './models/post.model.js';


// DB connection
dbconnect();

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({
   credentials: true,
   origin:['http://localhost:8000'],
}));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// console.log(__dirname)
app.use('/public', express.static('public'));
app.use('upload', express.static(path.join(__dirname, 'public')));


// Nodemailer
function sendMail(firstname, lastname, phone, email, message){
    
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,  
        service: 'gmail',
        auth: {
          user:process.env.EMAIL,
          pass:process.env.PASSWORD
        },
        tls : { rejectUnauthorized: false }
  	 })
     const subject = 'A New Mail'
     const to = process.env.EMAIL ;
     const from = email;
     const template = handlebars.compile(fs.readFileSync(path.join(__dirname, 'templates/','feedback.hbs'), 'utf8'));
     const html = template({firstname:firstname, email:email, message:message, phone:phone, lastname:lastname})

     const mailOptions = {
      from:email,
      to:process.env.EMAIL, subject,
      html
     }

      transporter.sendMail(mailOptions, (error) => { 
        if(error){
          console.log(error);  
        }else{
          res.json({message:'Mail Sent'})
          console.log({message});
        }
      })
}


// Routes api
app.use('/api/mail', mail);
app.use('/', users);
app.use('/', uploads);
app.use('/', members);
app.use('/', post);


// Mail api
app.post('/mail', (req,res) =>{
  const {firstname, lastname, phone, email, message} = req.body;
  	sendMail(firstname, lastname, phone, email, message);
    // console.log(firstname, lastname, phone, email, message);

  });
  
// Pagination



const PORT = 5000 || process.env.PORT;
app.listen(PORT, ()=> {
  console.log(`App is running on port${PORT}`)
})