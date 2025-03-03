import React from 'react'
import {Container, Row, Col, Form, Button, Nav} from 'react-bootstrap'
import { useState } from 'react'
import RegisterCSS from './register.module.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function Register() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       await axios.post('http://VITE_BASEURL/register',{firstname,lastname, email, username, password})
       .then(result => {
        console.log(result)
         if(result.data === 'exist'){
          alert('Username or Email Combination Exist! Please Login')
          navigate('/login')
         }else{
          alert('Created Successfully  ')
          navigate('/login')
         }
       })       
    }catch(error){
      console.log(error)
    } 
  }

  return (
    <>
      <section className={RegisterCSS.register}>
        <div>
        <Container>
          <Row>
            <Col sm={3}></Col>
            <Col sm={6}>
            <h6 className='pt-4 text-center'>Create a new User</h6>
              <Form onSubmit={handleSubmit}>
              <Form.Group className="">
                <Form.Control name="firstname" type='text' required placeholder="Firstname" onChange={(e)=>{setFirstname(e.target.value)}}/>
              </Form.Group>
              <Form.Group className="mb-3 pt-3">
                <Form.Control name="lastname" type='text' required placeholder="Lastname" onChange={(e)=>{setLastname(e.target.value)}}/>
              </Form.Group>
              <Form.Group className="mb-3 pt-3">
                <Form.Control name="email" type='email' required placeholder="Email Address" onChange={(e)=>{setEmail(e.target.value)}}/>
              </Form.Group>
              <Form.Group className="mb-3 pt-3">
                <Form.Control name="username" type='text' required placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}}/>
              </Form.Group>
              <Form.Group className="mb-3">
                   <Form.Control name="password" type='password' required placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                 </Form.Group> 
                 <div className='d-grid gap-2'>
               <Button variant="success" className='size="lg' type='submit'>Register</Button>
              </div>
              
            </Form>   
            {/* {user && <Navigate to='/login' state={user} replace={true }/>}          */}
            </Col>
            <Col sm={3}></Col>
          </Row>
        </Container>
        </div>
      </section>
   </>
  )
}
