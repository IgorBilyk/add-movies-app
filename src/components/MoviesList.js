import React, { useState, useEffect } from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MovieList = ({
  movies,
  deleteMovieHandler,
  editMovieHandler,
  filteredMovies,
}) => {
  const [newMovies, setNewMovies] = useState();
  useEffect(() => {
    setNewMovies(filteredMovies);
  }, [filteredMovies]);
  console.log(newMovies);

  const result = !filteredMovies.length
    ? movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
          deleteMovieHandler={deleteMovieHandler}
          editMovieHandler={editMovieHandler}
        />
      ))
    : filteredMovies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
          deleteMovieHandler={deleteMovieHandler}
          editMovieHandler={editMovieHandler}
        />
      ));
  return (
    <ul className={classes["movies-list"]}>
      {
        /* movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
          deleteMovieHandler={deleteMovieHandler}
          editMovieHandler={editMovieHandler}
        />
      )) */ result
      }
    </ul>
  );
};

export default MovieList;
