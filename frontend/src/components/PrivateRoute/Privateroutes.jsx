import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../Context/useAuth'

export default function Privateroutes() {
  // const isLoggedUser = localStorage.getItem('token')
  const isLoggedUser = useAuth()

  return (
    isLoggedUser ? <Outlet /> : <Navigate to={`/?returnUrl=${location.pathname}`} replace/>
  )
}

