import React, { useEffect } from 'react'
import { Container, Row, Col, Table, Form, Button} from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
import * as FaIcons from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import { getMembers } from '../../data/api'
import { Link, useNavigate, useParams } from 'react-router-dom'


function Members() {
  const [lastname, setLastname] = useState('')
  const [firstname, setFirstname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [position, setPosition] = useState('')
  const [members, setMembers] = useState([])
  const IconStyleDe ={fontSize:'1.2rem', color:'red'}
  const IconStylee ={fontSize:'1.2rem',margin:'10px', color:'131746'}


  const createMember = async(e) => {
    e.preventDefault();
    try {
      await axios.post('http://VITE_BASEURL/member', {lastname, firstname, email, phone, position })
        .then(member => {
          // console.log(member)
          if (member.data == 'Member with Phone number and Email Address Exist') {
            toast.info('Member with Phone number and Email Address Exist', { position: 'top-right' })
          } else {
            toast.success('Member Created Successfully', { position: 'top-right' })
            window.location.reload();
          }
        })
    } catch (error) {
      console.log(error)
    }
  }
const getMember = async() =>{
  try {
   const member =  await getMembers();
    setMembers(member);
    // console.log(member)
  } catch (error) {
    console.log(error)
  }
}

const deleteMember = (id) =>{
  axios.delete('http://VITE_BASEURL/remove/:id', +id)
  .then(result =>{
    if(result.data == 'Member Does not exist'){
      toast.info('Oops, Something went Wrong! Try Again', { position: 'top-right' })
    }else{
      toast.success('Member Deleted Successfully', { position: 'top-right' })
      window.location.reload();
    }
  }).catch(error => console.log(error))
}

// const editMember = (id) => {
//   navigate('/editmember/:id')
// }

useEffect(()=>{
  getMember();
},[])

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col sm={5}>
             <h4 className='text-center text-success'>Enter Member Details of the Assioctions</h4>
             <ToastContainer/>
              <Form onSubmit={createMember}>
                <Form.Group className="mb-3 pt-3">
                <Form.Control
                type='text' 
                placeholder='Enter Lastname'
                name='lastname'
                onChange={(e=>{setLastname(e.target.value)})}
                autoComplete='off'
                />
                </Form.Group>
                <Form.Group className="mb-3 pt-3">
                <Form.Control
                type='text' 
                placeholder='Enter FirstName'
                name='firstname'
                onChange={(e=>{setFirstname(e.target.value)})}
                autoComplete='off'
                />
                </Form.Group>
                <Form.Group className="mb-3 pt-3">
                <Form.Control
                type='email' 
                placeholder='johndoe@gmail.com'
                name='email'
                onChange={(e=>{setEmail(e.target.value)})}
                autoComplete='off'
                />
                </Form.Group>
                <Form.Group className="mb-3 pt-3">
                <Form.Control
                type='tel' 
                placeholder='234-9123456789'
                name='phone'
                required
                maxlength="11"
                onChange={(e=>{setPhone(e.target.value)})}
                autoComplete='off'
                />
                </Form.Group>
                <Form.Group className="mb-3 pt-3">
                <Form.Control
                type='text' 
                placeholder='Enter Position'
                name='position'
                onChange={(e=>{setPosition(e.target.value)})}
                autoComplete='off'
                />
                </Form.Group>
                <div className='d-grid gap-2'>
                  <Button variant="success" className='size="lg' type='submit'>Save</Button>
                </div>
              </Form>
            </Col>
            <Col sm={7}>
              <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Lastname</th>
                    <th>Firstname</th>
                    <th>Email Address</th>
                    <th>Phone Number</th>
                    <th>Position</th>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                {Array.isArray(members) && members.length > 0 ? (
                  members.map((data,index)=> (
                    <tr key={data.id}>
                      <td>{index +1}</td>
                      <td>{data.lastname}</td>
                      <td>{data.firstname}</td>
                      <td>{data.email}</td>
                      <td>{data.phone}</td>
                      <td>{data.position}</td>
                      <td><Link to={`/editmember/`+data._id} ><FaIcons.FaPencilAlt style={IconStylee}/></Link></td>
                      <td><button className='btn' onClick={()=>deleteMember()}><FaIcons.FaTrash style={IconStyleDe} /></button></td>
                     </tr>
                  ))
                ):(
                 <p className='text-center'>No Member Found Or Create a Member List</p>    
                 )}    
               </tbody>  
              </Table>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Members