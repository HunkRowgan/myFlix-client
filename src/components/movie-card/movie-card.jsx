import PropTypes from "prop-types"; //import PropTypes library
import { Button, Card } from "react-bootstrap";
import { useBootstrapBreakpoints } from "react-bootstrap/esm/ThemeProvider";

//movieCard function component
export const MovieCard = ({ movieData, onMovieClick }) => {
    return ( 

    /*  
      <div //replaced with card element
        onClick={() => {
          onMovieClick(movieData);
        }}
      >
        {movieData.Title}
      </div>
    );
  };*/

 //replace div with Card element
    <Card className="h-100">
      <Card.Img variant="top" src={useBootstrapBreakpoints.image} />
      <Card.Body>
        <Card.Title>{movieData.Title}</Card.Title>
        <Card.Text>{movieData.Description}</Card.Text>
        <Button onClick={() => onMovieClick(movieData)}
        variant="link">
          Open
          </Button>
      </Card.Body>
    </Card>
  );
};

// Define all the props constraints for MovieCard
MovieCard.propTypes = {
  movieData: PropTypes.shape({
    Title: PropTypes.string
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};