import React from 'react'
import GalleryCSS from './gallery.module.css'
import { Container, Row, Col, Button, Tabs, Tab, Card, CardGroup } from "react-bootstrap";
import { getFiles, getVids } from "../../data/api";
import { useState, useEffect, useRef  } from "react"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/footer'
import Pagination from '../Pagination/Pagination';
import Images from '../Image/Images';


export default function Gallery() {
 
  const [multipleFiles, setMultipleFiles] = useState([])
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(false)
   const [currentPage, setCurrentPage] = useState(1)
   const [postsPerPage] = useState(1)
   

  
  useEffect(() => {
    const getAllFileList = async () => {
      try {
        setLoading(true)
        const fileslist = await getFiles();
        setMultipleFiles(fileslist);
        const json = await fileslist;
        setLoading(false)
        console.log(multipleFiles)
      } catch (error) {
        console.log(error);
      }
    };

    const getVideoList = async () => {
      try {
        // setIsLoading(true) 
        const vidieList = await getVids();
        setVideos(vidieList);
        // setIsLoading(false)
        console.log(videos)
      } catch (error) {
        console.log(error)
      }
    }

    getAllFileList();
    getVideoList();
  }, []);

 

const indexOfLastImage = currentPage * postsPerPage;
const indexOfFirstImage = indexOfLastImage - postsPerPage;
const currentImages = multipleFiles.slice(indexOfFirstImage, indexOfLastImage);

const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Navbar />
      <section className='pb-5 mb-5'>
        <Container>
          <div className=''>
            <Row>
              <Col sm={4}>
                <h3 className='pt-5'>You can view our pictures and watch our videos for your perusel </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                  posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                  posuere erat a ante..</p>
              </Col>
              <Col sm={4}></Col>
              <Col sm={4}></Col>
            </Row>
          </div>
          <Tabs
            defaultActiveKey=""
            id="uncontrolled"
            className="mb-3 justify-content-center">
            <Tab eventKey="image" title="Image">
              <div className="">
                    <Images multipleFiles={currentImages} loading={loading} paginate={paginate}/>
               {/* 9i {Array.isArray(currentImages) && multipleFiles?.map((element, index) =>
                  <div key={element._id}>
                    <h6 className="text-danger font-weight-bold">{element.title}</h6>
                    <div className="row">
                      {element.files.map((file, index) =>
                        <div className="col-sm-6 col-sm-4 col-sm-3">
                          <div className="card mb-2 border-3 p-1">
                            <Image src={`http://localhost:5000/${file.filePath}`} height="450" className="card-img-top img-responsive object-content" alt="img" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )} */}
                <Pagination
                postsPerPage = {postsPerPage}
                totalPosts={multipleFiles.length}
                 paginate={paginate}

                />
             
              </div>
            </Tab>
            <Tab eventKey="video" title="Videos">
              <div className="">
                {videos.map((element, index) =>
                  <div key={element._id}>
                    <h6 className="text-success font-weight-bold">{element.title}</h6>
                    <div className="row">
                      {element.videos.map((file, index) =>
                        <div className="col-12 col-6 col-4 col-3">
                          <div className="card mb-2 border-0 p-0">
                            <video controls className="object-cover h-full w-full" height={300}>
                              <source src={`http://localhost:5000/${file.filePath.replace(/\\/g, "/")}`} />
                            </video>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
              </div>
            </Tab>
          </Tabs>
        </Container>
      </section>

      
      <Footer />
    </>
  )
}
