import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import "./ModalMovie.css";
import Form from "react-bootstrap/Form";

function ModalMovie(props) {
  const data = props.movieData;
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
            src={`https://image.tmdb.org/t/p/w500${data && data.poster_path}`}
            alt=""
          />
          <div className="modalSubBox">
            <h4 className="modalTitle"> {data && data.title} </h4>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Comment:</Form.Label>
                <Form.Control type="text" placeholder="Your comment" />
              </Form.Group>
              <Button variant="outline-primary" size="sm" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">Add</Button>
        <Button variant="secondary" onClick={props.handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalMovie;
