import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import * as FaIcon from 'react-icons/fa'
import './blogPost.css'

function blogdisplay({posts}) {
    const [showMore, setShowMore] = useState(false)
    const [count, setCount] = useState(false)
    const likeHandler = () => {
      setCount(!count)
    }
  return (
    <>
      <section className='pt-5 pb-5'>
      <Container>

          <div className="blog-post row">
                <h4 className="text-success font-weight-bold text-center pb-4">Read Our Blog Post to know more about Seeds,<br/>Cultivation and Irrigation </h4>
                <div className='col-sm-2'></div>
                {Array.isArray(posts) &&  posts.map((post) =>
                  
                  <div key={post._id} className="col-sm-8 ">
                    <div >
                      {post.files.map((file, index) =>
                        <div className="">
                          <div className="card mb-2 border-1 p-1">
                            <img src={`http://localhost:5000/${file.filePath}`} height="350" className="card-img-top img-responsive object-content" alt="img" />
                          </div>
                        </div>
                      )}
                      <div className='blo'>
                      <div className="text-dark font-weight-bold "><h3>{post.title}</h3></div>
                      <div className='faI' onClick={()=>likeHandler}><span> <FaIcon.FaRegHeart/> 2</span></div>
                      </div>
                      <p style={{fontSize:'14px'}}>{showMore ? post.description : `${post.description.substring(0,150)}....`}</p>
                      <p>{post.createdAt}</p>
                    <button className="btn btn-success" onClick={()=> setShowMore(!showMore)}> 
                       <FaIcon.FaLocationArrow/>
                      {showMore ? 'Show less' :  ' Read More' }
                    </button>
                  </div>
                    </div>
                )}
                <div className='col-sm-2'></div>
              </div>
        
          {/* <Col sm={6}>h</Col> */}
      
      </Container>
    </section>
    </>
  )
}

export default blogdisplay