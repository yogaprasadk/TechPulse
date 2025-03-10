import React from 'react'
import{useGlobalContext} from './Context'


const Search = () => {
   const {query,searchFn,showPopularNews}=useGlobalContext();
  return (
    <>
    <h1 className="heading">
  <span className='subText'>T</span>ech
  <span className='subText'>P</span>ulse
</h1>
    
  {!showPopularNews &&
    <form>
      <div>
        <input type="text" placeholder="search here"
          value={query}
          onChange={(e)=> searchFn(e.target.value)}
        />
      </div>
    </form>
  }
    </>
    
   
  )
}

export default Search