import React, { useState, useRef, useEffect } from "react";

import classes from "./AddMovie.module.css";

function AddMovie({ addMovieHandler }) {
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  const [movie, setMovie] = useState({
    title: "",
    openingText: "",
    releaseDate: "",
  });
  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...
    /*  console.log(titleRef.current.value); */
    /* const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    }; */

    addMovieHandler(movie);
  }
  const formValidityHandler = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });

    console.log(movie);
  };
  /* useEffect(() => {
    setTimeout(formValidityHandler, 1000);
  
  }, [titleRef.current.value]); */
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Spider Man"
          name="title"
          value={movie.title}
          onChange={formValidityHandler}
          required
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea
          rows="5"
          id="opening-text"
          placeholder="Look Out! Here comes the Spider-Man. Is he strong? "
          name="openingText"
          value={movie.openingText}
          onChange={formValidityHandler}
          required
        ></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input
          type="text"
          id="date"
          placeholder="15-09-2022"
          name="releaseDate"
          value={movie.releaseDate}
          onChange={formValidityHandler}
          required
        />
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;
