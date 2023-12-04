import './movie-view.scss';
import { Button, Col, Container, Card, Row } from "react-bootstrap";


export const MovieView = ({ movie, onBackClick }) => {
    return (
      <Container>
        <Row>
          <Col>
            <Card className="">
              <Row>
                <Col>
              <Card.Img
                className="w-100"
                src={movie.image}
                style={{ width: "15rem", height: "20rem" }}
                alt=""
              />
          </Col>
          <Col>
          <Card.Body>
            <Card.Title className="mt-2"><span className='text-title'>Title:</span>{movie.Title}</Card.Title>
            <Card.Text><span className='text-title'>Description:</span> {movie.Description}</Card.Text>
            <Card.Text><span className='text-title'>Genre:</span> {movie.Genre}</Card.Text>
            <Card.Text><span className='text-title'>Director:</span> {movie.Director}</Card.Text>
            <Button className='close-open-btn' onClick={onBackClick}>Back</Button>
          </Card.Body>
          </Col>
          </Row>
        </Card>
        </Col>
      </Row>
    </Container>
    );
  };