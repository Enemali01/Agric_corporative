import React from "react";
import UploadCSS from "./file.module.css";
import Upload from "../Upload/Upload";
import { Container, Row, Col, Button, Image, Table, Accordion } from "react-bootstrap";
import { getFiles, getVids } from "../../data/api";
import { useState, useEffect } from "react";
import axios from "axios";
import Video from "../../components/Video/Video";


export default function FileUpload() {
  const [multipleFiles, setMultipleFiles] = useState([])
  const [videos, setVideos] = useState([])


  const getAllFileList = async () => {
    try {
      const fileslist = await getFiles();
      setMultipleFiles(fileslist);
      // console.log(multipleFiles)
    } catch (error) {
      console.log(error);
    }
  };

  const getVideoList = async () => {
    try {
      const vidieList = await getVids();
      setVideos(vidieList);
      // console.log(videos)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllFileList();
    getVideoList();
  }, []);

  const handleDelete = (id) => {
    axios.delete('http://localhost:5000/delete/' + id)
      .then((res) => {
        console.log(res)
        alert('Image File Deleted')
        window.location.reload()
      })
      .catch(error => console.log(error))
  }

const handle_Delete = (id) =>{
  axios.delete('http://localhost:5000/removevid/:id', + id)
  .then((res) => {
    console.log(res)
    alert('Video File Deleted')
    window.location.reload()
  })
}

  return (
    <>
      <section className={UploadCSS.upload}>
        <Container>
          <Row>
          <Col sm={1}></Col>
            <Col sm={10}>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Upload Image FIles</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col sm={4}>
                        <Upload getMultiple={() => getAllFileList} />
                      </Col>
                      <Col sm={8}>
                        <h4 className="text-center">All images</h4>
                        <Table responsive>
                          <thead>
                            <tr>
                              <td>#</td>
                              <th>Title</th>
                              <th>Images</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {multipleFiles.map((element, index) => (
                              <tr key={element._id}>
                                <td>{index + 1}</td>
                               <td >{element.title}</td>
                                <td>
                                  {element.files.map((file, index) => (
                                    <td>
                                      <Image src={`http://localhost:5000/${file.filePath.replace(/\\/g, "/")}`} className="img-responsive" height={60} rounded />
                                    </td>
                                  ))}
                                </td>
                                <td>
                                  <Button className="btn btn-secondary">Edit</Button>
                                  <Button className="btn btn-danger sm" onClick={() => handleDelete()}>Delete</Button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col sm={1}></Col>
            <Col sm={10}>
              <Accordion>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Upload Video Files</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col sm={4}>
                        <Video />
                      </Col>
                      <Col sm={8}>
                        <h4 className="text-center">All images</h4>
                        <Table responsive>
                          <thead>
                            <tr>
                              <td>#</td>
                              <th>Title</th>
                              <th>Videos</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {videos.map((element, index) => (
                              <tr key={element._id}>
                                <td>{index + 1}</td>
                                <td>{element.title}</td>                    
                                <td>
                                  {element.videos.map((file, index) => (
                                    <td>
                                      <video autoPlay muted controls className="" height={100} width={100}>
                                        <source src={`http://localhost:5000/${file.filePath.replace(/\\/g, "/")}`} />
                                      </video>
                                    </td>
                                  ))}
                                </td>
                                <td>
                                  <Button className="btn btn-secondary">Edit</Button>
                                  <Button className="btn btn-danger sm" onClick={() => handle_Delete()}>Delete</Button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col sm={1}></Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
