import './movie-view.scss';
import { Button, Col, Container, Card, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// Mapping of ImagePaths to hosted URLs
const imagePathMapping = {
  'shawshankredemption.png': 'https://i.ibb.co/f0JB4nR/shawshankredemption.png',
  'pulpfiction.png': 'https://i.ibb.co/PFFksRY/pulpfiction.png',
  'forrestgump.png': 'https://i.ibb.co/51qJLVb/forrestgump.png',
  'inception.png': 'https://i.ibb.co/HFNL8G8/inception.png',
  'darkknight.png': 'https://i.ibb.co/N7cqh3S/darkknight.png',
  'schindlerslist.png': 'https://i.ibb.co/DKg1TGP/schindlerslist.png',
  'thegodfather.png': 'https://i.ibb.co/LxChkqh/thegodfather.png',
  'matrix.png': 'https://i.ibb.co/d4d7d9w/matrix.png',
  'fellowshipofthering.png': 'https://i.ibb.co/GdqGN2m/fellowshipofthering.png',
  'avengers.png': 'https://i.ibb.co/VMnhD2j/avengers.png',
  'avatar.png': 'https://i.ibb.co/wWnf0j1/avatar.png',
  'gladiator.png': 'https://i.ibb.co/NVDCF74/gladiator.png',
  'interstellar.png': 'https://i.ibb.co/0Q41dYq/interstellar.png',
  'killbill.png': 'https://i.ibb.co/7rMTV2Y/killbill.png',
  'thedeparted.png': 'https://i.ibb.co/sQNj3J6/thedeparted.png',
};

// Function to get the hosted URL for a given ImagePath
export const getImageUrl = (imagePath) => {
  return imagePathMapping[imagePath] || ''; // If imagePath is not found, return an empty string
};

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const selectedMovie = movies.find((movie) => movie.id === movieId);

  return (
    <Container>
      <Row>
        <Col>
          <Card className="">
            <Row>
              <Col>
                <Card.Img
                  className="w-100"
                  src={selectedMovie && getImageUrl(selectedMovie.ImagePath)}
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
                    <span className='text-title'>Genre:</span> {selectedMovie && selectedMovie.Genre}
                  </Card.Text>
                  <Card.Text>
                    <span className='text-title'>Director:</span> {selectedMovie && selectedMovie.Director}
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
