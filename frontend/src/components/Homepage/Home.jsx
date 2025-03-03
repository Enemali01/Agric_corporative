import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/footer'
import homeCSS from './home.module.css'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/esm/Button';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form'
import Icon1 from '../../images/nature-protection.png'
import Icon2 from '../../images/recycle-symbol.png'
import Icon3 from '../../images/save-nature.png'
import Img1 from '../../images/agric5.jpg'
import Img2 from '../../images/agric4.jpg'
import Img3 from '../../images/plantimg.jpg'
import Img4 from '../../images/agric2.jpg'

import {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'


export default function Home() {
 const navigate = useNavigate()
 const [email, setEmail] = useState('') 
 const handleSubmit = async(e) => {
  e.preventDefault();
  try {
    
  } catch (error) {
    console.log(error);
  }
 }
 
  return (
    <>
    <Navbar/>
    <section className={homeCSS.hero}>
      <Container> 
        <Row>
          <Col sm={6}>
          <div className={homeCSS.herotext}>
        <h3 className=''>We Provide all the Solutions </h3>
        <p>Documentation and examples for opting images into responsive behavior (so they never become wider than their parent) and add lightweight styles to them—all via classes.
        Documentation and examples for opting images into responsive behavior (so they never become wider than their parent) and add lightweight styles to them—all via classes.
        </p>
        <Button className='d-flex' size='lg' variant='outline-success'>Learn More</Button>
        </div>
          </Col>
          <Col sm={6}></Col>
        </Row>
      </Container>
    </section>

    <section className={homeCSS.what}>
        <div className=''>
          <h3 className='text-center text-success p-5'>What We Do</h3>
           <Container>
            <Row>
              <Col sm={4}>
               <div>
                <Image src={Icon1} style={{verticalAlign:'center', width: '5rem', marginLeft:'7.5rem'}} />
                </div>
                  <p className='text-center'>And examples for opting images into responsive behavior (so they never become wider than their parent) and add lightweight styles to them—all via classes.iu</p>
              </Col>
              <Col sm={4}>
              <div>
              <Image src={Icon2} style={{verticalAlign:'center', width: '5rem', marginLeft:'7.5rem'}} />
                </div>
                  <p className='text-center'>And examples for opting images into responsive behavior (so they never become wider than their parent) and add lightweight styles to them—all via classes.iu</p>
              </Col>
              <Col sm={4}>
              <div>
              <Image src={Icon3} style={{verticalAlign:'center', width: '5rem', marginLeft:'7.5rem'}} />
              </div>
                  <p className='text-center'>And examples for opting images into responsive behavior (so they never become wider than their parent) and add lightweight styles to them—all via classes.iu</p>
              </Col>
            </Row>
           </Container>
        </div>
    </section>

    <section className={homeCSS.gallery}>
      <Container>
        <div className=''>
          <h3 className='pb-3 text-center text-success'>Galleries</h3>
            <div className={homeCSS.gallaries}>
            <Link to='/gallery'>
               <img src={Img1} alt='farm' />
              </Link>
              <div className={homeCSS.description}><h6>Farm</h6>
                <p>Some wider than their parent and add lightweight styles to them—all via classes. Documentation and examples for opting images into </p>
              </div>
            </div>
      
            <div className={homeCSS.gallaries}>
            <Link to='/gallery'>
                <img src={Img2} alt='farm' />
              </Link>
              <div className={homeCSS.description}><h6>Farm</h6>
                <p>Some wider than their parent) and add lightweight styles to them—all via classes. Documentation and examples for opting images into </p>
              </div>
            </div>
      
            <div className={homeCSS.gallaries}>
              <Link to='/gallery'>
                <img src={Img3} alt='farm' />
              </Link>
              <div className={homeCSS.description}><h6>Farm</h6>
                <p>Some wider than their parent) and add lightweight styles to them—all via classes. Documentation and examples for opting images into </p>
              </div>
            </div>
            <div className={homeCSS.gallaries}>
              <Link to='/gallery'>
                <img src={Img4} alt='farm' />
              </Link>
              <div className={homeCSS.description}><h6>Farm</h6>
                <p>Some wider than their parent) and add lightweight styles to them—all via classes. Documentation and examples for opting images into </p>
              </div>
            </div>
    </div>
      </Container>
    </section>

    <section className={homeCSS.subscribe}>
      <div className='pt-5'>
          <Container>
            <Row>
              <Col sm={3}></Col>
                <Col sm={6}>
                   <h6 className='text-center'>Stay up-to-date by subscribing to our news channels</h6>
                    <Form onSubmit={handleSubmit}>
                      <Form.Control placeholder="Enter your email address" name='email' id='email' onChange={(e) =>{setEmail(e.target.value)}} type='email' value={email} required/><Button type='submit'>Subscribe</Button>
                    </Form>
                </Col>
                <Col sm={3}></Col>
            </Row>
          </Container>
      </div>
    </section>

<Footer/>
    </>
  )
}
