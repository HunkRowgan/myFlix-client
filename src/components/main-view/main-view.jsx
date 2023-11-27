import { useState, useEffect } from "react"; //call useState function to document
import { MovieCard} from "../movie-card/movie-card";
import { MovieView} from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([]);

    const [selectedMovie, setSelectedMovie] = useState (null);

    useEffect(() => {
      fetch("https://hunkrowganmovieapi.onrender.com/movies")
        .then((response) => response.json())
        .then((data) => {
          const moviesFromApi = data.map((movie) => {
            return {
              id: movie._id,
              Title: movie.Title,
              Genre: movie.Genre.Name,
              Description: movie.Description,
              Director: movie.Director.Name,
              ImagePath: movie.ImagePath
            };
        });

        setMovies(moviesFromApi);
    

    }, []);
    

    }, []);

    if (selectedMovie) {
        return (
            <MovieView 
            movie ={selectedMovie} 
            onBackClick=
            {() => setSelectedMovie(null)}/>
        );
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }
    
    return (
      <div>
            {movies.map((movie) => {
                return <MovieCard 
                movieData = {movie} 
                key={movie.id}
                onMovieClick = {(newSelectedMovie) => {
                    setSelectedMovie (newSelectedMovie);
                }}/> 
            })}
      </div>
    );
  };