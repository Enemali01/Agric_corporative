import React from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import {Link, useParams} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'



function UpdateMember() {
  const members = {
    lastname: '',
    firstname: '',
    email:'',
    phone:'',
    position: ''
  }

  const IconStyle ={fontSize:'1.2rem', margin:'10px', color:'131746'}
  const [member, setMember] = useState(members)
  const { id } = useParams();

  
  const inputHandler = (e) => {
  const { name, value } = e.target;
    setMember({ ...member, [name]: value });
  };

   
useEffect(()=>{
   axios.get(`http://VITE_BASEURL/member/${id}`)
   .then((response)=>{
     setMember(response.data);
   }).catch((error)=>{console.log(error)})
},[id])
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://VITE_BASEURL/update/member/${id}`, member)
    toast.success('Member name Updated', {position:'bottom-right'})
}



  return (
    <>
      <section>
      <Container>
          <Row>
            <Col sm={4}></Col>
            <Col sm={4}>
            <div className='pt-3'>
             <h4 className='text-center text-success pt-5 mt-5'>Edit Member Details</h4>
             <ToastContainer/>
             <Link to='/members'><FaIcons.FaArrowCircleLeft style={IconStyle}/>Previous</Link>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="">
                <Form.Control
                type='text' 
                name='lastname'
                id='lastname'
                value={member.lastname}
                onChange={inputHandler}
                autoComplete='off'
                />
                </Form.Group>
                <Form.Group className="mb-3 pt-3">
                <Form.Control
                type='text' 
                name='firstname'
                id="firstname"
                value={member.firstname}
                onChange={inputHandler}
                autoComplete='off'
                />
                </Form.Group>
                <Form.Group className="mb-3 pt-3">
                <Form.Control
                type='email' 
                name='email'
                id="email"
                value={member.email}
                onChange={inputHandler}
                autoComplete='off'
                />
                </Form.Group>
                <Form.Group className="mb-3 pt-3">
                <Form.Control
                type='tel' 
                name='phone'
                id="phone"
                value={member.phone}
                required
                maxlength="11"
                onChange={inputHandler}
                autoComplete='off'
                />
                </Form.Group>
                <Form.Group className="mb-3 pt-3">
                <Form.Control
                type='text' 
                name='position'
                id="position"
                value={member.position}
                onChange={inputHandler}
                autoComplete='off'
                />
                </Form.Group>
                <div className='d-grid gap-2'>
                  <Button variant="success" className='size="lg' type='submit'>Update</Button>
                </div>
              </Form>
              </div>
            </Col>
            <Col sm={4}></Col>
            </Row>
            </Container>
      </section>
    </>
  )
}

export default UpdateMember