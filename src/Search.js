import React from 'react'
import{useGlobalContext} from './Context'


const Search = () => {
   const {query,searchFn}=useGlobalContext();
  return (
    <>
    <h1 style={{ 
  fontFamily: 'Roboto, sans-serif', 
  fontSize: '36px', 
  fontWeight: 'bold', 
  color: 'black' 
}}>
  <span style={{ fontSize: '42px' }}>T</span>ech
  <span style={{ fontSize: '42px' }}>P</span>ulse
</h1>
    

    <form>
      <div>
        <input type="text" placeholder="search here"
          value={query}
          onChange={(e)=> searchFn(e.target.value)}
        />
      </div>
    </form>
    </>
    
   
  )
}

export default Search