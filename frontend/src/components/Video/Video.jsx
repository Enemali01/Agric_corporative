import React from 'react'
import axios from 'axios'
import { Container, Row, Col, Table, Form,Button } from 'react-bootstrap'
import { useState } from 'react'


export default function Video() {
const [title, setTitle] = useState()
const [videos, setVideos] = useState()

const handleSubmit = (e) => {
  e.preventDefault();
  
  const formData = new FormData();
  formData.append('title', title);
  for (let i = 0; i < videos.length; i++) {
    formData.append("videos", videos[i]);
  }
   axios.post('http://VITE_BASEURL/video', formData)
  .then((res) =>{
    if(res === 'bad'){
      alert('Oops. Something Went Wrong')
    }else{
      alert('File has been Successfully Uploaded!.')
      setVideos('');
      setTitle('') ;
      window.location.reload()
    }
  })
}


  return (
    <>
     <section className='videoUpload'>
        <Container>
          <Row>
            <Col>
            <h4 className="text-center">Upload Video File</h4>
              <div className="">
                <Form onSubmit={handleSubmit} encType="multipart/form-data">
                  <label>Enter Title</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Enter Title"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <label>Upload Videos</label>
                  <input
                    type="file"
                    name="videos"
                    className="form-control"
                    accept=".mp3, .mp4"
                    onChange={(e) => {
                      setVideos(e.target.files);
                    }}
                    multiple
                  />
                  <div className="d-grid gap-2 mt-2">
                    <Button
                      variant="success"
                      className="btn btn-sucesss"
                      type="submit"
                    >
                      Upload
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
            
          </Row>
        </Container>
     </section>
    </>
  )
}
