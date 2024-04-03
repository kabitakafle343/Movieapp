
import React, { useEffect, useState } from 'react'

export const API="https://www.omdbapi.com/?apikey=22eb5643";
const Appcontext =React.createContext();
const AppProvider=({children})=>{
    const [isloading,setisloading]=useState(true);
    const [movie,setMovie]=useState([]);
    const [iserror,seterror]=useState({show:"false",msg:""});

    const [Query,setQuery]=useState("Titanic");
    const getmovie= async(url)=>{
        try{
            const res=await fetch(url);
            const data= await res.json();
      console.log(data.Search)
      if(data.Response==="True"){
        setisloading(false);
        seterror({show:"false",msg:""})
  setMovie(data.Search);
  console.log(data);
      }else{
seterror({show:"True",msg:data.Error})
      }

    
    }
    catch(error){
            console.log(error);
        }
    }
        useEffect(()=>{
           const cleartime= setTimeout(()=>{
                getmovie(`${API}&s=${Query}`);
            },1000)
         return()=>clearTimeout(cleartime);
            
         
        },[Query]);
    
    return <Appcontext.Provider value={{isloading,movie,iserror,Query,setQuery}}>{children}</Appcontext.Provider>

}
export  {AppProvider,Appcontext}; 
