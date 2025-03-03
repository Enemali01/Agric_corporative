import React from 'react'
import { Navigate } from 'react-router-dom'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Homepage/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Gallery from './components/Gallery/Gallery'
import Login from './components/Login/Login'
import Register from './Pages/Register/Register'
// import Dashboard from './components/AdminDashboard/Dashboard'
import Privateroutes from './components/PrivateRoute/Privateroutes'
import FileUpload from './Pages/FileUpload/FileUpload'
import UpdateMember from './Pages/Members/UpdateMember'
import Admin from './components/AdminDashboard/admin'
import Members from './Pages/Members/Members'
import Welcome from './components/Welcome/welcome'
import Profile from './components/Profile/Profile'
import Sidebar from './components/AdminDashboard/sidebar'
import BlogPost from './components/Blog/blogPost'
import Post from './Pages/Post/Post'
import UpdatePost from './Pages/Post/UpdatePost'


export default function AppRoute() {
   const isLoggedUser = window.localStorage.getItem('token')
  return (
    <>
    <BrowserRouter>
    <Sidebar/>
      <Routes>  
            {!isLoggedUser && (
              <>
                <Route path='/' element={<Home/>} /> 
                <Route path='/about' element={<About/>} /> 
                <Route path='/contact' element={<Contact/>} /> 
                <Route path='/gallery' element={<Gallery/>} /> 
                <Route path='/blogPost' element={<BlogPost/>} /> 
                <Route path='/login' element={<Login/>} /> 
             </>
            )}   
        
         
  
      <Route element={<Privateroutes/>}>
      <Route path='/sidebar' exact element={<Admin/>} /> 
       <Route path='/admin' exact ={<Sidebar/>} />  
       <Route path='/profile' element={<Profile/>} /> 
       <Route path='/post' element={<Post/>} /> 
      <Route path='/welcome' element={<Welcome/>} /> 
        <Route path='/register' element={<Register/>} /> 
        <Route path='/login' element={<Login/>} />
        <Route path='/fileupload'element={<FileUpload/>}/>
        <Route path='/members' element={<Members/>}/>
        <Route path='/editmember/:id'element={<UpdateMember/>}/>
        <Route path='/post/:id'element={<UpdatePost/>}/>
      </Route>   
      </Routes>
    </BrowserRouter>
    </>
  )
}
