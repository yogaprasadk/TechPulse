import React from 'react'
import { useGlobalContext } from './Context'

const Pagination = () => {
    const {page,nbPages,getPrevPage,getNextPage,setShowPopularNews,showPopularNews}=useGlobalContext();
  return (
    <>
    {
      !showPopularNews &&
      <div className='pagination-btn'>
          <button onClick={()=>getPrevPage()}>Prev</button>
          <p>{page+1} of {nbPages}</p>
          <button onClick={()=>getNextPage()}>Next</button>
      </div>
    }
    <div className='popular-btn'>
      <button onClick={()=>setShowPopularNews(!showPopularNews)} style={{ margin : '2rem'}}>
      {
        !showPopularNews
          ? 'Trending Tech News'
          : 'Back to Home'
      }
      </button>
    </div>
    </>
  )
}

export default Pagination