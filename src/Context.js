import React, { useEffect,useContext,useReducer } from 'react';
import reducer from './reducer';
 // Context created
let API="https://hn.algolia.com/api/v1/search?";

const initialState =  {
    isLoading:true,
    query:"HTML",
    nbPages:0,
    page:0,
    hits:[],
};
const AppContext = React.createContext();
// Now the provider function
const AppProvider = ({ children }) => {
    const [state,dispatch]=useReducer(reducer,initialState)
     
   

    const fetchApiData= async (url)=>{

        dispatch({type:"SET_LOADING"});
        try{
            const res= await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({type:"GET_STORIES",
                payload:{
                    hits:data.hits,
                    nbPages:data.nbPages,
                }
            })
           
       }
       catch(error){
             console.log(error);
          }
    };
     
    const searchFn= (searchQuery) =>{
        dispatch({type:"SEARCH_QUERY",
            payload:searchQuery,
        });
    };
    const getNextPage=()=>{
        dispatch({
           type:"NEXT_PAGE", 
        })
    }
    const getPrevPage=()=>{
        dispatch({
           type:"PREV_PAGE", 
        })
    }

    useEffect(()=>{
        fetchApiData(`${API}query=${state.query}&{state.page}`);
    },[state.query,state.page]);


    
    return (
        <AppContext.Provider value={{...state,searchFn,getNextPage,getPrevPage}}>
            {children}
        </AppContext.Provider>
    );
};


const useGlobalContext =()=>
{
    return useContext(AppContext);
};

export { AppContext, AppProvider,useGlobalContext  };
