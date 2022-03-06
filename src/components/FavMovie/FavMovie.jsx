import { Card, Button } from "react-bootstrap";
import swal from "sweetalert";
import './FavMovie.css'
export default function FavMovie({ movie, getFavMovie }) {

  function handelDelete(id) {
    //   Adding alert before delete
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        // if the user confirm deleteing it will delete from the database
        const url = `${process.env.REACT_APP_SERVER}/deleteMovie/${id}`;
        const response = fetch(url, {
          method: "DELETE", // *GET, POST, PUT, DELETE, etc
        }).then(() => {
          // we recall the getFavMovie to get the data from the server again after deleting and
          // it will rernder the component because it is modifying the state
          getFavMovie();
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  }

  return (
    <>
    <Card style={{ width:"25%"}}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie && movie.poster_path}`} />
      <Card.Body>
        <Card.Title style={{fontSize: "2.0rem"}}>{movie.title}</Card.Title>
        <div className="cardComment">
        <span> Comment: {movie.comment}.</span>
        <Button size="sm" variant="secondary">Edit</Button>
        </div>
        <Card.Text style={{ overflowY: "auto", maxHeight: "100px" }}>
          {movie.overview}
        </Card.Text>
        <Button size="lg" onClick={() => handelDelete(movie.id)} variant="primary">
          Delete
        </Button>
      </Card.Body>
    </Card>
    
    </>
);
}