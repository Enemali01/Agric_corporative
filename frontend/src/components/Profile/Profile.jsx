import React from 'react'
import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import { getUser } from '../../data/api'
import * as FaIcons from 'react-icons/fa'
import './profile.css'

 function profile() {
  // const location = useLocation();
  const [users, setUsers] = useState({});

  const fetchUsers = async () => {
    try {
      const useId = await getUser();
      setUsers(useId);
      // console.log(useId);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchUsers();
  }, [])

  return (
    <>
  <section className='profile'>
      <Container>
        <Row>
          <Col sm={3}></Col>
          <Col sm={3}>
          <h6 className='text-center pt-2'>Welcome to Profile Page! </h6>
            <div className='card pt-5 pb-5'>
               <h6><span>Username: {users.username}</span></h6>
               <h6><span>Lastname: {users.lastname}</span></h6>
               <h6><span>Firstname: {users.firstname}</span></h6>
               <h6><span>email: {users.email}</span></h6>
               <div className='px-3'>
               <button className='btn btn-secondary'><FaIcons.FaPen/> Edit</button>
               </div>
            </div>
          </Col>
          <Col sm={3}>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>
      </section>
    </>
  )
}
export default profile;


