import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import * as FaIcons from 'react-icons/fa'
import axios from 'axios'
import {ToastContainer, toast} from 'react-toastify'
import { Link, useParams } from 'react-router-dom'


function UpdatePost() {
 const posts = {
  title: '',
  description: '',
 }
  
  const IconStyle ={fontSize:'1.2rem', margin:'10px', color:'131746'}
  const [allPosts, setallPosts] = useState(posts);
  const { id } = useParams();


  const inputHandler = (e) => {
    const { name, value } = e.target;
    setallPosts({...allPosts, [name]: value });
    };
  

useEffect(()=>{
      axios.get(`http://localhost:5000/posts/${id}`)
    .then((res) => {
      setallPosts(res.data)
    }).catch((error)=>{console.log(error)})
  
},[id])

const handleEdit = async(e)=>{
  e.preventDefault();
  await axios.put(`http://localhost:5000/update/${id}`,allPosts)
  toast.success('Blog Post Uploaded', {position:'bottom-right'})
}

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col sm={3}></Col>
            <Col sm={6}>
              <h6 className='mb-3 pt-3'>Update Blog Post</h6>
              <Link to='/post'><FaIcons.FaArrowCircleLeft style={IconStyle}/>Previous</Link>
              <ToastContainer />
              <Form onSubmit={handleEdit}>
                <Form.Group className="mb-3 pt-3">
                  <Form.Control
                    type='text'
                    name='title'
                    id='title'
                    value={allPosts.title}
                    onChange={inputHandler}
                    autoComplete='off'
                  />
                </Form.Group>
                {/* <Form.Group className="mb-3 pt-3">
                  <Form.Control
                    type='file'
                    name='files'
                    accept='.jpg,.jpeg,.png,.mp4,.mp3'
                    id='files'
                    value={allPosts.files}
                    onChange={inputHandler}
                    autoComplete='off'
                  />
                </Form.Group> */}
                <Form.Group className="mb-3">
                  <Form.Control as="textarea"
                    type='text'
                    name='description'
                    id='description'
                    value={allPosts.description}
                    required rows={8}
                    onChange={inputHandler}
                  	autoComplete='off'
                  />
                </Form.Group>
                <Button className='btn btn-success' type='submit'><FaIcons.FaTelegram /> Update Post</Button>
              </Form>
            </Col>
            <Col sm={3}></Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default UpdatePost