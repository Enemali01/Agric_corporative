import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/footer'
import {Container, Row, Col, Form, Button, Nav} from 'react-bootstrap'
import {useState} from 'react'
import {ToastContainer, toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import loginCSS from './login.module.css'
import axios from 'axios'
import * as FaIcons from 'react-icons/fa'


export default function Login() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const navigate =  useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
      await axios.post('http://VITE_BASEURL/login', {username, password})
      .then(result =>{
        if(result.data  === 'Wrong Username and Password'){
          toast.info('Wrong Username and Password Combination', {position:'bottom-right'})
            navigate('/login') 
        }else{
          localStorage.setItem('token', result.data.token)  
          alert('Welcome to Admin Dashboard')
          navigate('/admin')       
        }        
        }).catch(error =>{
        console.log(error)
      })
  }

  return (
    <>
    <Navbar/>
      <section className={loginCSS.login}>
        <div>
        <Container>
          <Row>
            <Col sm={4}></Col>
            <Col sm={4}>
            <p>Turn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need additional styles or utilities.</p>
            <ToastContainer/>
              <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3 pt-3">
                <Form.Control name='username'  type='username' required placeholder="Username" value={username} onChange={(e)=>{setUsername(e.target.value)}} autoComplete='off'/>
              </Form.Group>
                <Form.Group className="mb-3">
                   <Form.Control name='password' type='password' id='password' value={password} required placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} autoComplete='off'/>
                 </Form.Group> 
                 <div className='d-grid gap-2'>
               <Button variant="success" className='size="lg' type='submit'><FaIcons.FaSignInAlt/> Login</Button>
              </div>
              <Nav>
              {/* <Nav.Link className="text-success" href="/register">Go to Register</Nav.Link> */}
              </Nav>
            </Form>            
            </Col>
            <Col sm={4}></Col>
          </Row>
        </Container>
        </div>
      </section>
      <Footer/>
   </>
  )
}
