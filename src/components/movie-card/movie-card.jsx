import PropTypes from "prop-types"; //import PropTypes library

//movieCard function component
export const MovieCard = ({ movieData, onMovieClick }) => {
    return (
      <div
        onClick={() => {
          onMovieClick(movieData);
        }}
      >
        {movieData.Title}
      </div>
    );
  };

// Define all the props constraints for MovieCard
MovieCard.propTypes = {
  movieData: PropTypes.shape({
    Title: PropTypes.string
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};