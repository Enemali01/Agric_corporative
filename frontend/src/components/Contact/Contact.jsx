import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/footer'
import ContactCss from './contact.module.css'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import {FaMessage} from 'react-icons/fa6'
import { ToastContainer, toast } from 'react-toastify'


export default function Contact() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const dataToSend = {
      firstname,
      lastname,
      phone,
      email,
      message
    }
    
    setMessage('')
    setEmail('')
    setPhone('')
    setLastname('')
    setFirstname('')

    try {
      await axios.post(`http://localhost:5000/mail`, dataToSend)
      toast.success('Mail Sent', { position: 'bottom-right' })
       window.location.reload();
      //  if(res.data === 'success'){
      //     alert('I received you message. I will reach out to you immediately');
      //   }else{
      //     alert('Oops, Something went wrong. Try again')
      //   }
    } catch (error) {
      console.log(error);
    }

  }

 
  return (
    <>
    <Navbar/>
      <section className={ContactCss.contactpage}>
        <div>
          <Container>
            <Row>
              <Col sm={4}>
                <h5 className='pt-5'>We are not far from keeping intouch</h5>
                <p className='mb-5'>Turn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need additional styles or utilities.Turn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need additional styles or utilities.</p>
              </Col>
              <Col sm={2}></Col>
              <Col sm={6}>
                <div className='pt-5'>
                  <h6 className='text-center'>Enter Your details so we can reach out to you immediately</h6>
                  <ToastContainer/>
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col>
                        <Form.Control name='firstname' id='firstname' required placeholder="First name" value={firstname} onChange={(e) => { setFirstname(e.target.value) }} />
                      </Col>
                      <Col>
    
                        <Form.Control name='lastname' id='lastname' value={lastname} required placeholder="Last name" onChange={(e) => { setLastname(e.target.value) }} />
                      </Col>
                      <Col>
                        <Form.Control name='phone' id='phone' value={phone} required placeholder="Phone Number" onChange={(e) => { setPhone(e.target.value) }} />
                      </Col>
                    </Row>
                    <Form.Group className="mb-3 pt-3" placeholder='Email Address'>
                      <Form.Control type="email" name='email' id='email' value={email} required placeholder="name@example.com" onChange={(e) => { setEmail(e.target.value) }} />
                    </Form.Group>
                    <Form.Group className="mb-3">

                      <Form.Control as="textarea" name='message' id='message' value={message} required rows={3} placeholder='Enter message' onChange={(e) => { setMessage(e.target.value) }} />
                    </Form.Group>
                    <div className='d-grid gap-2'>
                      <Button variant="success" className='size="lg' type='
              submit'> < FaMessage/>  Submit</Button>
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <Footer/>
    </>
  )
}
