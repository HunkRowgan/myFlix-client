import './movie-view.scss';
import { Button, Col, Container, Card, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const MovieView = ({ movies }) => {
  // Destructure movieId from the useParams object
  const { movieId } = useParams();
  const selectedMovie = movies.find((movie) => movie._id === movieId);
  
  console.log(movieId);
  
  return (
    <Container>
      <Row>
        <Col>
          <Card className="">
            <Row>
              <Col>
                <Card.Img
                  className="w-100"
                  src={selectedMovie && selectedMovie.ImagePath}
                  style={{ width: "15rem", height: "20rem" }}
                  alt=""
                />
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title className="mt-2">
                    <span className='text-title'>Title:</span>{selectedMovie && selectedMovie.Title}
                  </Card.Title>
                  <Card.Text>
                    <span className='text-title'>Description:</span> {selectedMovie && selectedMovie.Description}
                  </Card.Text>
                  <Card.Text>
                    <span className='text-title'>Genre:</span> {selectedMovie && selectedMovie.Genre.Name}
                  </Card.Text>
                  <Card.Text>
                    <span className='text-title'>Director:</span> {selectedMovie && selectedMovie.Director.Name}
                  </Card.Text>
                  <Link to='/'>
                    <Button className='close-open-button'>Back</Button>
                  </Link>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
  }  