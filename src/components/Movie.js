import React, { useState } from "react";

import classes from "./Movie.module.css";

const Movie = ({
  deleteMovieHandler,
  editMovieHandler,
  id,
  title,
  openingText,
  releaseDate,
}) => {
  const [isActive, setisActive] = useState(false);

  const handleDeleteClick = () => {
    deleteMovieHandler(id);
    setisActive(true);
  };
  const handleEditClick = () => {
    editMovieHandler({ id, title, openingText, releaseDate });
  };
  return (
    <li className={isActive ? classes.animation : classes.movie}>
      <h2 className={isActive ? classes.animation : ""}>{title}</h2>
      <p className={isActive ? classes.animation : ""}>{openingText}</p>
      <h3 className={isActive ? classes.animation : ""}>{releaseDate}</h3>
      <button
        className={isActive ? classes.animation : ""}
        onClick={handleDeleteClick}
      >
        Delete
      </button>
      <button
        className={isActive ? classes.animation : ""}
        onClick={handleEditClick}
      >
        Edit
      </button>
    </li>
  );
};

export default Movie;
