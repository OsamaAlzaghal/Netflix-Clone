import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import "./ModalMovie.css";
import Form from "react-bootstrap/Form";
import swal from 'sweetalert';

function ModalMovie(props) {
  const movie = props.movieData;

    // Getting the required inf from the form
    function handelFormSubmit(e){
      e.preventDefault();
      let comment = e.target.comment.value;
      // To send a POST request to save the recipe in our database as favorite recipe
      addToFavList(movie, comment);
    }

    async function addToFavList(movie, comment){
      const url = `${process.env.REACT_APP_SERVER}/addMovie`
      // This should match the required data in the server
      const data = {
        title : movie.title,
        release_date : movie.release_date,
        poster_path : movie.poster_path,
        overview : movie.overview,
        comment : comment
      }

      // Use Fetch to send POST request
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    swal("Favorite Movie", "You added a new movie", "success");
    props.handleClose();
  }

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="movieModal"
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          ADD TO MY FAVORITE LIST
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modalBox">
          <img
            className="modalImg"
            src={`https://image.tmdb.org/t/p/w500${movie && movie.poster_path}`}
            alt=""
          />
          <div className="modalSubBox">
            <h4 className="modalTitle"> {movie && movie.title} </h4>
            <Form onSubmit={handelFormSubmit}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Comment:</Form.Label>
                <Form.Control name="comment" type="text" placeholder="Your comment" />
              </Form.Group>
              <Button variant="outline-primary" size="sm" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalMovie;