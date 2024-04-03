import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Appcontext } from '../Context/Context';

const Header = () => {
  const { setQuery, Query } = useContext(Appcontext);
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success" style={{ height: '60px' }}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src="https://cdn.icon-icons.com/icons2/70/PNG/512/imdb_14058.png" className="img-fluid mr-2 ml-2" alt="IMDb Logo" style={{ width: '40px', height: '40px' }} />
     movie
        </Link>
        <form className="form-inline my-2 my-lg-0" onSubmit={(e) => e.preventDefault()}>
          <input className="form-control mr-sm-2" type="search" placeholder="Search movie" aria-label="Search" value={Query} onChange={(e) => setQuery(e.target.value)} />
        </form>
      </div>
    </nav>
  );
}

export default Header;



