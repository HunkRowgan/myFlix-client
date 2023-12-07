import PropTypes from "prop-types"; //import PropTypes library
import { Button, Card } from "react-bootstrap";
import { useBootstrapBreakpoints } from "react-bootstrap/esm/ThemeProvider";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

//movieCard function component
export const MovieCard = ({ movie, token, user, setUser }) => {
  console.log(movie);
 
  const [setIsFavorite] = useState(
    false
  );

useEffect(() => {
  if (user && user.FavoriteMovies && user.FavoriteMovies.includes(movie.id)) {
    setIsFavorite(true);
  }
}, [user, movie.id]);


const addFavoriteMovie = () => {
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
        alert("Successfully added to favorites");
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setUser(updatedUser);
        setIsFavorite(true);
      }
    })
    .catch((error) => {
      alert(error);
    });
};


const removeFavoriteMovie = () => {
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
      alert("Successfully deleted from favorites");
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);
      setIsFavorite(false);
    })
    .catch((error) => {
      alert(error.message);
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
        <Link to={`/movies/${encodeURIComponent(movie.id)}`}>    
        <Button className='close-open-button'>Open</Button>
        </Link>
      </Card.Body>
      <Card.Body className="favorite-btns">
  <Button className="fav-btn" onClick={addFavoriteMovie}>+</Button>
  <Button className="fav-btn" onClick={removeFavoriteMovie}>-</Button>
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