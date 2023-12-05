import PropTypes from "prop-types"; //import PropTypes library
import { Button, Card } from "react-bootstrap";
import { useBootstrapBreakpoints } from "react-bootstrap/esm/ThemeProvider";
import { Link } from "react-router-dom";

//movieCard function component
export const MovieCard = ({ movie }) => {
  console.log(movie);

  if (!movie) {
    return null; // or some default representation for no data
  }

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
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Description}</Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie._id)}`}>    
        <Button className='close-open-button'>Open</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

// Define all the props constraints for MovieCard
MovieCard.propTypes = {
  movie: PropTypes.shape({ 
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired}).isRequired
}