import React, { useEffect, useState } from 'react'
import '../../components/Blog/blogPost.css'
import { Container, Row, Col, Form, Button, Table, Image } from 'react-bootstrap'
import * as FaIcons from 'react-icons/fa'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { Link, useParams } from 'react-router'



function Post() {
  const [title, setTitle] = useState()
  const [files, setFiles] = useState()
  const [description, setDescription] = useState()
  const [allPosts, setallPosts] = useState([])
  const { id } = useParams();
  const IconStyleDe = { fontSize: '1.2rem', margin: '10px', color: 'red' }
  const IconStylee = { fontSize: '1.2rem', margin: '10px', color: '131746' }

  const handlePost = async (e) => {
    e.preventDefault(e);

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description)
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
      }
      axios.post('http://localhost:5000/post', formData)
        .then((response) => {
          if (response.data !== 'success') {
            window.location.reload();
            toast.success('Blog Post Uploaded', { position: 'bottom-right' })
          } else {
            return alert('Bad Request')
          }
        })
    } catch (error) {
      console.log(error)
    }
  }

  const getPost = async () => {
    try {
      const post = await axios.get('http://localhost:5000/getPost')
      setallPosts(post.data);
    } catch (error) {
      console.log(error)
    }
  }


  const handleRemovePost = (id) => {
    axios.delete('http://localhost:5000/deletPost/:id', + id)
      .then((result) => {
        toast.success('Post Deleted', { position: 'bottom-right' })
        window.location.reload();
      })
      .catch((error) => console.error('Error Deleting post:', error));
  }

  useEffect(() => {
    getPost();
  }, [])

  return (
    <>
    <section className='post-bg'>
      <section className='mb-3'>
        <Container>
          <Row>
            <Col sm={3}></Col>
            <Col sm={6}>
              <h6 className='mb-3 pt-3'>Write a Blog Post</h6>
              <ToastContainer />
              <Form onSubmit={handlePost} encType="multipart/form-data">
                <Form.Group className="mb-3 pt-3">
                  <Form.Control
                    type='title'
                    placeholder='Enter Title'
                    name='title'
                    onChange={(e => { setTitle(e.target.value) })}
                    autoComplete='off'
                  />
                </Form.Group>
                <Form.Group className="mb-3 pt-3">
                  <Form.Control
                    type='file'
                    placeholder='Select Image'
                    name='files'
                    accept='.jpg,.jpeg,.png,.mp4,.mp3'
                    onChange={(e) => {
                      setFiles(e.target.files);
                    }}
                    autoComplete='off'
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control as="textarea"
                    name='description'
                    required rows={8}
                    placeholder='Enter message'
                    onChange={(e) => { setDescription(e.target.value) }}
                    autoComplete='off'

                  />
                </Form.Group>
                <Button className='btn btn-success' type='submit'><FaIcons.FaTelegram /> Post</Button>
              </Form>
            </Col>
            <Col sm={3}></Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col sm={1}></Col>
            <Col sm={10}>
              <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Post File</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(allPosts) && allPosts.map((post, index) => (
                    <tr key={post.id}>
                      <td>{index + 1}</td>
                      <td>{post.title}</td>
                      <td className='post-desciption'>
                        {
                          post.description.length > 100 ? `${post.description.substring(0, 100)}.......` : post.description
                        }
                      </td>
                      <td>
                        {post.files.map((file, index) => (
                          <Image src={`http://localhost:5000/${file.filePath}`} alt='blog picture' height={60} rounded />
                        ))}
                      </td>
                      <td><Link to={`/post/` + post._id} ><FaIcons.FaPencilAlt style={IconStylee} /></Link></td>
                      <td><button className='btn' onClick={() => handleRemovePost()}><FaIcons.FaTrash style={IconStyleDe} /></button></td>
                    </tr>
                  ))
                  }
                </tbody>
              </Table>
            </Col>
            <Col sm={1}></Col>
          </Row>
        </Container>
      </section>
      </section>
    </>
  )
}

export default Post