import React, { useContext } from 'react'
import Header from './Header'
import { Appcontext } from '../Context/Context';
import Movie from './Movie.jsx';
const SingleMovie = () => {
  const {iserror} =useContext(Appcontext);
  return (
    <div>
    <Header/>
    <div className='p-2 m-2 d-flex justify-content-center align-items-center'>
  <h5 style={{ color: "red" }}>{iserror.show && iserror.msg}</h5>
</div>

<Movie/>
    </div>
  )
}

export default SingleMovie
