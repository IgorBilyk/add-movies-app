import React, { useState, useEffect } from "react";
import classes from "./EditPopup.module.css";

const EditPopup = (props) => {
  const { editedMovie, closeEditPopup, updateMovie, updateCount } = props;
  const { id, title, openingText, releaseDate } = editedMovie;

  const [formData, setFormData] = useState({
    id,
    title: "",
    openingText: "",
    releaseDate: "",
  });

  const formHandler = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitEditedMovie = (e) => {
    e.preventDefault();
    updateMovie(formData);
    closeEditPopup();
    setTimeout(() => {
      updateCount();
    }, 700);
  };

  const handleCancelButton = (e) => {
    e.preventDefault();
    closeEditPopup();
  };
  useEffect(() => {
    setFormData({
      id,
      title,
      openingText: openingText,
      releaseDate: releaseDate,
    });
  }, []);
  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitEditedMovie}>
        <div>
          <div className={classes.control}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={formHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="opening-text">Opening Text</label>
            <textarea
              rows="5"
              id="opening-text"
              name="openingText"
              value={formData.openingText}
              onChange={formHandler}
            ></textarea>
          </div>
          <div className={classes.control}>
            <label htmlFor="date">Release Date</label>
            <input
              type="text"
              id="date"
              name="releaseDate"
              value={formData.releaseDate}
              onChange={formHandler}
            />
          </div>
          <button onClick={handleCancelButton}>Cancel</button>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
};

export default EditPopup;
