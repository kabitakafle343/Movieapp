import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
const API="https://www.omdbapi.com/?apikey=22eb5643";

const Singlepage = () => {
  const { id } = useParams();
  const [isloading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");
  const [isError, setIsError] = useState({ show: false, msg: "" });

  const getMovie = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data);
        setIsError({ show: false, msg: "" });
      } else {
        setIsError({ show: true, msg: data.Error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const clearTime = setTimeout(() => {
      getMovie(`${API}&i=${id}`);
    }, 1000);
    return () => clearTimeout(clearTime);
  }, [id]);

  return (
    <div className='container-fluid d-flex justify-content-center align-items-center min-vh-70'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-5'>
            <div className='p-5 bg-light border rounded'>
              {isError.show ? (
                <div className="alert alert-danger" role="alert">
                  Error: {isError.msg}
                </div>
              ) : isloading ? (
                <p>Loading...</p>
              ) : (
                <>
                  <h1 className="display-9">{movie.Title}</h1>
                  <img src={movie.Poster} className="img-fluid mb-3" alt="Movie Poster" />
                  <p><strong>Genre: </strong>{movie.Genre}</p>
                  <p><strong>IMDb Rating: </strong>{movie.imdbRating}</p>

                  <NavLink to="/">
                    <button className='btn btn-primary'>Go Back</button>
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singlepage;






