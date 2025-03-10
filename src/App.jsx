import React from 'react'
import Search from './Search';
import Stories from './Stories';
import Pagination from './Pagination';

import './App.css';
import { useGlobalContext } from './Context';
import PopularNews from './PopularNews';



export const App = () => {
  const { showPopularNews } = useGlobalContext();
  return (
     
    <>
   
    <Search/>
    <Pagination/>
    {
      showPopularNews ? <PopularNews /> : <Stories/>
    }
    </>
    
  )
}

export default App;
