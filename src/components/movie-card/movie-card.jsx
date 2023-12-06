import PropTypes from "prop-types"; //import PropTypes library
import { Button, Card } from "react-bootstrap";
import { useBootstrapBreakpoints } from "react-bootstrap/esm/ThemeProvider";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

//movieCard function component
export const MovieCard = ({ movie, token, user, setUser }) => {
  console.log(movie);
 
  const [isFavorite, setIsFavorite] = useState(
    false
  );

// add & remove favoriteMovie
useEffect(() => {
  if (user.FavoriteMovies && user.FavoriteMovies.includes(movie._id)) {
    setIsFavorite(true);
  }
}, [user]);

const addFavoriteMovie = () => {
  console.log('Adding favorite movie:', user.Username, movie._id);
  fetch(
    `https://hunkrowganmovieapi.onrender.com/users/${user.Username}/movies/${movie._id}`,
    { method: "POST", headers: { Authorization: `Bearer ${token}` } }
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log("Failed to add fav movie");
      }
    })
    .then((user) => {
      if (user) {
        alert("successfully added to favorites");
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        setIsFavorite(true);
      }
    })
    .catch((error) => {
      alert(error);
    });
};

const removeFavoriteMovie = () => {
  fetch(
    `https://hunkrowganmovieapi.onrender.com/users/${user.Username}/movies/${movie._id}`,
    { method: "DELETE", headers: { Authorization: `Bearer ${token}` } }
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        alert("Failed");
      }
    })
    .then((user) => {
      if (user) {
        alert("successfully deleted from favorites");
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        setIsFavorite(false);
      }
    })
    .catch((error) => {
      alert(error);
    });
};



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
      <Card.Body className="favorite-btns">
        {!isFavorite ? (
          <Button className="fav-btn" onClick={addFavoriteMovie}>+</Button>
        ) : (
          <Button className="fav-btn" onClick={removeFavoriteMovie}>-</Button>
        )}
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