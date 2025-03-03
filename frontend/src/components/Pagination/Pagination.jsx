import React, { useState } from 'react'
import './pag.css'


 const Pagination = ({postsPerPage, totalPosts, paginate}) => {
  const pageNumbers = [];
   for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
    pageNumbers.push(i);
   }
    
  const [activePage, setActivePage] = useState(1);
  const handlePageClick = (number) =>{
    setActivePage(number);
    paginate(number);
  };
  return (
    <nav>
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li key={number} className={`page-item ${activePage === number? 'active': ''}`}>
                <button 
                href="#"
                onClick={()=> 
                  {handlePageClick(number); 
                   paginate(number);
                  }}
                   className='page-link btn-success'
                >
                  {number}
                </button>
               
            </li>
          ))}
        </ul>

    </nav>
  )
}
export default Pagination