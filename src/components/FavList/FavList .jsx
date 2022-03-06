import { useState, useEffect } from "react";
import FavMovie from '../FavMovie/FavMovie';
import './FavList.css';

export default function FavList() {
  const [favMovie, setfavMovie] = useState([]);

  async function getFavMovie() {
    const response = await fetch(`${process.env.REACT_APP_SERVER}/getMovie`);
    const data = await response.json();

    setfavMovie(data);
  }

  useEffect(() => {
    getFavMovie();
  }, []);

  return (
    <div className="FavMovies"> 
        {/* if there is data in  favMovie render the component */}
        {favMovie &&
          favMovie.map((movie) => {
            return (
              <FavMovie
                key={movie.id}
                getFavMovie={getFavMovie}
                movie={movie}
              />
            );
          })}
    </ div> 

  );
}