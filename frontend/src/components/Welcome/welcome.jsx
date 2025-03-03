import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

 function welcome() {

  return (
    <>
  <section>
      <Container>
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}><h6 className='text-center'>Welcome to Admin Dashboard! </h6>
            
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>
      </section>
    </>
  )
}
export default welcome;


