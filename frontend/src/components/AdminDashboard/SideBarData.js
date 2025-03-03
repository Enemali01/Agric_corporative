import React from 'react'
import * as Falcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import  {HiAnnotation} from 'react-icons/hi';


export const SidebarData = [
  {
    title: "Dashboard",
    path: "/welcome",
    name: "nav-text",
  //  icon: HiAnnotation
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: Falcons.FaUsers,
    name: 'nav-text'
  },
  {
    title: 'Upload',
    path: '/fileupload',
    // icon: <AiIcons.AiFillHome />,
    name: 'nav-text'
  },
  {
    title: 'Users',
    path: '/register',
    // icon: <Falcons.FaAirFreshener />,
    name: 'nav-text'
  },
  {
    title: 'Members',
    path: '/members',
     name: 'nav-text'
  }
]