import React from 'react'
import FooterCSS from './footer.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import * as FaIcons from 'react-icons/fa'
import {Link} from 'react-router-dom'


export default function footer() {
  const IconStyle = {fontSize:'1.5rem', color:'#fff'}
  return (
    <>
   
        <section className={FooterCSS.footer}>
          <div className={FooterCSS.fdetails}>
              <Container>
                <Row>
                  <Col sm={4}>
                    <h3 className='text-center'>COP</h3>
                    <p>Turn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need additional styles or utilities.</p>
                  </Col>
                  <Col sm={4}>
                    <ul className={FooterCSS.footerul}>
                    <li><Nav.Link href="/" className=""><FaIcons.FaHome/> Home</Nav.Link></li>
                    <li><Nav.Link href="/about" className=""><FaIcons.FaReadme/>  About</Nav.Link></li>
                    <li><Nav.Link href="/gallery" className=""><FaIcons.FaFileUpload/> Gallery</Nav.Link></li>
                    <li><Nav.Link href="/contact" className=""><FaIcons.FaMailBulk/> Contact US</Nav.Link></li>
                    </ul>
                  </Col>
                  <Col sm={4}>
                    <div className="social-icon text-center">
                      <h5>You can reach us on our socials</h5>
                      <li>
                      <Link to='/facebook.com'>
                      <span><FaIcons.FaFacebook style={IconStyle}/></span>
                      </Link>
                      </li>
                      <li>
                      <Link to=''>
                       <span><FaIcons.FaTwitter style={IconStyle}/></span>
                      </Link>
                      </li>
                      <li>
                      <Link to=''>
                       <span><FaIcons.FaYoutube style={IconStyle}/></span>
                      </Link>
                      </li>
                      <li>
                      <Link to=''>
                       <span><FaIcons.FaWhatsapp style={IconStyle}/></span>
                      </Link>
                      </li>
                    </div><hr/>
                  </Col>
                </Row>
              </Container>
           </div> 
      </section>
   
    </>
  )
}
