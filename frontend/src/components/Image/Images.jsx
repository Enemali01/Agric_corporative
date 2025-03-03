import React from 'react'
import { Container, Row, Col, Tabs, Image,Tab } from "react-bootstrap"

export default function Images({multipleFiles, loading}) {
  if(loading){
    return <h2>Loading...</h2>
  }
 
  
  return (
    <>
      {/* <Navbar /> */}
      <section className='pt-5 mt-5 pb-5 mb-5'>
        <Container>
         
              <div className="">
                {/* <h4 className="text-success font-weight-bold">Images From </h4> */}
                {Array.isArray(multipleFiles) && multipleFiles?.map((element, index) =>
                  <div key={element._id}>
                    <h6 className="text-success font-weight-bold">{element.title}</h6>
                    <div className="row">
                      {element.files.map((file, index) =>
                        <div className="col-sm-6 col-sm-4 col-sm-3">
                          <div className="card mb-2 border-3 p-1">
                            <Image src={`http://VITE_BASEURL/${file.filePath}`} height="450" className="card-img-top img-responsive object-content" alt="img" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {/* <Pagination
                postPerPage = {postPerPage}
                totalPosts={multipleFiles.length}
                paginate={paginate}

                /> */}
             
          
              </div>
          {/* <Tab eventKey="video" title="Videos">
              <div className="">
                {videos.map((element, index) =>
                  <div key={element._id}>
                    <h6 className="font-weight-bold">{element.title}</h6>
                    <div className="row">
                      {element.videos.map((file, index) =>
                        <div className="col-12 col-6 col-4 col-3">
                          <div className="card mb-2 border-0 p-0">
                            <video controls className="object-cover h-full w-full" height={300}>
                              <source src={`http://VITE_BASEURL/${file.filePath.replace(/\\/g, "/")}`} />
                            </video>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
              </div>
            </Tab> */}
         
        </Container>
      </section>

      
      {/* <Footer /> */}
    </>
  )
}
