import React, { useEffect, useState } from 'react'
import './blogPost.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/footer'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import BlogDisplay from './blogdisplay'
import Pagination from '../Pagination/Pagination'


export default function blogPost() {
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(1)


  useEffect(() => {
    const blogPost = async () => {
      try {
        const post = await axios.get('http://localhost:5000/getPost')
        setPosts(post.data);
      } catch (error) {
        console.log(error)
      }
    }
    blogPost();
  }, [])

  const indexOfLastImage = currentPage * postsPerPage;
  const indexOfFirstImage = indexOfLastImage - postsPerPage;
  const currentImages = posts.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Navbar />
      <section className='blog-hero'>
        <Container>
          <Row>
            <Col sm={6}>
              <div className="blog-top">
                <h1>Irrigation Farming</h1>
                <p className='text-center'>Turn an image into a card background and overlay your card’s text. Depending on the image, you may or into a card background and overlay your card’s text. Depending on the image, you may orinto a card background and overlay your card’s text. Depending on the image, you may or </p>
              </div>
            </Col>
            <Col sm={6}></Col>
          </Row>
        </Container>
      </section>

      <BlogDisplay posts={currentImages} />
      <section>
        <div className='container'>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-1"></div>
            <div className="col-md-1 justify-content-center">
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
              />
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-4"></div>
          </div>
        </div>
          
      </section>

      <Footer />
    </>
  )
}
