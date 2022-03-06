import { useMemo } from "react";
import Movie from "../Movie/Movie";
import "./MovieList.css";
import { useState } from "react";
import ModalMovie from "../ModalMovie/ModalMovie";

const MovieList = (props) =>{
const [show, setShow] = useState(false);
const [selectedMovie, setSelectedMovie] = useState();

const handleClose = () => setShow(false);
const handleShow = (e) => { setShow(true); setSelectedMovie(e.target.id);};
const movies = useMemo(() => {
        return props.data.map((obj, i) => {
            return(
                <div className="cardContainer" key={obj.id}>
                    <Movie id={i} title={obj.title} imgUrl={obj.poster_path} movieInfo={obj.overview} handleShow={handleShow}/>
                </div>
            );
        });
    }, [props.data]);

        return (
            <>
            <div className="movieList">
                {movies}
            </div>
            <ModalMovie movieData={props.data[selectedMovie]} handleClose={handleClose} show={show}  />
            </>
        );
} 
export default MovieList;