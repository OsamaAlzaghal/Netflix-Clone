import "./Home.css";
import { useState, useEffect } from "react";
import MovieList from "../MovieList/MovieList";
const Home = ()=>{
const [movies, setMovies] = useState([]);

    const getData = async() => {
        let response = await fetch(`${process.env.REACT_APP_SERVER}/trending`);
        let data = await response.json();
        setMovies(data); 
    };

    useEffect(() => {
        getData();

    },[]);

    return(

        <div className="container"> 
            <MovieList data={movies} />
        </div>
       
    );
}

export default Home;