//movie-card

import PropTypes from "prop-types"; //import PropTypes library
import { Button, Card, Alert } from "react-bootstrap";
import { useBootstrapBreakpoints } from "react-bootstrap/esm/ThemeProvider";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getImageUrl } from "../movie-view/movie-view.jsx";
import './movie-card.scss'; 

//movieCard function component
export const MovieCard = ({ movie, token, user, setUser }) => {
  //console.log(movie);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (user && user.FavoriteMovies && user.FavoriteMovies.includes(movie.id)) {
      setIsFavorite(true);
    }
  }, [user, movie.id]);


  const [alertMessage, setAlertMessage] = useState(null);

  const showAlert = (message) => {
    setAlertMessage(message);

    // Automatically hide the alert after 3 seconds
    setTimeout(() => {
      setAlertMessage(null);
    }, 1000);
  };

  const addFavoriteMovie = (movieId) => {
    // Check if user is defined and has the 'Username' property
    if (!user || !user.Username) {
      console.error("User information is missing or invalid.");
      return;
    }

    console.log('Adding favorite movie:', user.Username, movie.id);
    fetch(
      `https://hunkrowganmovieapi.onrender.com/users/${user.Username}/movies/${movie.id}`,
      { method: "POST", headers: { Authorization: `Bearer ${token}` } }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Failed to add fav movie");
        }
      })
      .then((updatedUser) => {
        if (updatedUser) {
          //alert("Successfully added to favorites");
          showAlert("Added!");
          localStorage.setItem("user", JSON.stringify(updatedUser));
          setUser(updatedUser);
          setIsFavorite(true);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  const removeFavoriteMovie = (movieId) => {
    // Check if user is defined and has the 'Username' property
    if (!user || !user.Username) {
      console.error("User information is missing or invalid.");
      return;
    }

    fetch(
      `https://hunkrowganmovieapi.onrender.com/users/${user.Username}/movies/${movie.id}`,
      { method: "DELETE", headers: { Authorization: `Bearer ${token}` } }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Failed to remove fav movie");
          throw new Error("Failed to remove fav movie");
        }
      })
      .then((updatedUser) => {
        showAlert("Removed!");
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setUser(updatedUser);
        setIsFavorite(false);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const toggleFavoriteMovie = (movieId) => {
    if (isFavorite) {
      removeFavoriteMovie();
    } else {
      addFavoriteMovie();
    }
  };

  if (!movie) {
    return null;
  }

  return (
    <Card className="h-100">
      <Card.Img
        className="card-image"
        variant="top"
        src={getImageUrl(movie.ImagePath)}
        alt={movie.Title}
      />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Description}</Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
          <Button className="close-open-button">Open</Button>
        </Link>
      </Card.Body>
      <Card.Body className="favorite-btns">
        <Card.Title>Favorites</Card.Title>
        <Button className="fav-btn" onClick={toggleFavoriteMovie}>
          {isFavorite ? "-" : "+"}
        </Button>
        {alertMessage && <Alert variant="info" className="mb-3 mt-3">{alertMessage}</Alert>}
      </Card.Body>
    </Card>
  );
};

// Define all the props constraints for MovieCard
MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
  }).isRequired,
};