import React from "react";
import {useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { multipleFileUpload } from "../../data/api";


export default function Upload(props) {
  const [files, setFiles] = useState("");
  const [title, setTitle] = useState("");

  const handleUploads = async (e) => {
    e.preventDefault();
        setFiles('');
        setTitle('');
    const formData = new FormData();
    formData.append("title", title);
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    await multipleFileUpload(formData)
    .then((res)=>{
      if(res === 'bad'){
        alert('Oops. Something Went Wrong')
      }else{
        alert('File has been Successfully Uploaded!.')
        setFiles('');
        setTitle('') ;
        window.location.reload()
      }
    })
    props.getMultiple();
    console.log(multipleFileUpload);
  };

  return (
    <>
      <section className="">
        <Container>
          <Row>
            <Col>
              <h4 className="text-center">Upload Image File</h4>
              <div className="">
                <Form onSubmit={handleUploads} encType="multipart/form-data">
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
                  
                  <label>Upload Images</label>
                  <input
                    type="file"
                    name="files"
                    className="form-control"
                    accept=".jpg, .jpeg, .png, .mp3, .mp4"
                    onChange={(e) => {
                      setFiles(e.target.files);
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
  );
}
