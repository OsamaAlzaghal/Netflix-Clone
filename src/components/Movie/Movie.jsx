import "./Movie.css";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

const Movie = (props) => {

  return (
    
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.imgUrl}`} />
      <Card.Body>
        <Card.Title>{props.title ? props.title : "---"}</Card.Title>
        <Card.Text style={{overflowY: "auto"}} >
        {props.movieInfo}
        </Card.Text>
        <Button id={props.id} onClick={props.handleShow} variant="primary">Add Favorite</Button>
      </Card.Body>
    </Card>
  );
};

export default Movie;