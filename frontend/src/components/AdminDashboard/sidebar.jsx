import React, { useEffect, useState } from 'react'
import * as Falcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as ImIcons from 'react-icons/im';
import * as FaIcon from 'react-icons/fa6';
import {Button, Form } from 'react-bootstrap';
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Link } from 'react-router'
import { SidebarData } from './SideBarData'
import './dashboard.css'
 import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


function sidebar() {
  const [users, setUsers] = useState({});
  const location = useLocation();
  const navigate = useNavigate()
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  const IconStyle ={fontSize:'1.2rem', margin:'10px'}
  const Icon ={color:'#fff'}
  
  const handleLogout = () => {
      axios.get('http://VITE_BASEURL/logout/:id')
      .then((res)=>{
        localStorage.removeItem('token')
       navigate('/')
       alert('Logging out from Admin Portal')
      })
   .catch((error)=> {
      console.log(error)
   }) 
  }

  return (
    <>
    
    <div className='navbar'>
        <Link to='#' className='menu-bars'>
          <Falcons.FaBars  onClick={showSidebar} style={Icon}/>
        </Link>
        <div className='d-grid px-3 '>
        <Form>
        <Button className='btn btn-danger'  onClick={handleLogout} type='submit'> <RiLogoutCircleRLine /> Logout </Button>  
        </Form>
        </div>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className='menu-bars'>
              <AiIcons.AiOutlineClose style={Icon}/> 
            </Link>
          </li><br/>
            {/* {SidebarData.map((item,index) =>{
              return(
                <li key={index} className={item.name}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })} */}
           <li>
            <Link to='/welcome' className='nav-text'>
              <span><MdIcons.MdDashboard style={IconStyle}/> Dashboard</span>
            </Link>
            </li> 
            <li>
            <Link to='/profile' className='nav-text'>
              <span><ImIcons.ImProfile style={IconStyle}/> Profile</span>
            </Link>
            </li> 
            <li>
            <Link to='/fileupload' className='nav-text'>
              <span><Falcons.FaFileUpload style={IconStyle}/> Upload</span>
            </Link>
            </li>
            <li>
            <Link to='/register' className='nav-text'>
              <span><Falcons.FaUsers style={IconStyle}/> Register</span>
            </Link>
            </li>
            <li>
            <Link to='/members' className='nav-text'>
              <span><FaIcon.FaPeopleGroup style={IconStyle}/> Members</span>
            </Link>
            </li>
            <li>
            <Link to='/post' className='nav-text'>
              <span><FaIcon.FaBlog style={IconStyle}/> Blog Post</span>
            </Link>
            </li>
            <div className='d-grid p-3'>
              {/* <Form>
        <Button className='btn btn-danger'  onClick={handleLogout} type='submit'> <RiLogoutCircleRLine /> Logout </Button>  
        </Form> */}
       </div>
        </ul>
      </nav>
    </>
  )
}

export default sidebar