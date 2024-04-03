import React, { useContext } from 'react'
import { Appcontext } from '../Context/Context';
import { NavLink } from 'react-router-dom';
import "./Movie.css"
const Movie = () => {
    const {movie,isloading}=useContext(Appcontext)
    if(isloading){
      return(      <div className='p-2 m-2 d-flex justify-content-center align-items-center text-success' ><h1>Laading.........</h1></div>)
     
    }
  return (
    <div className='containerr'>

 
    <div className='grid grid-4-col'>
      {movie.map((mov,id)=>{
        const {Poster,
imdbID
,Title} = mov;
        const movname=Title.substring(0,14);
        return(
            <NavLink to={`movie/${imdbID}`} key={id} className="box">
                <div className='card' >
                    <div className='cardinfo'>
                        <h2>{movname.length >= 14?`${movname}...`:movname}</h2>
                        <img src={Poster} alt={
imdbID
}className='imgg'></img>
                    </div>
                </div>
            </NavLink>
            
        )
      })}
    </div>
    </div>
  )
}

export default Movie
