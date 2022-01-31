import React, { useState, useEffect } from "react";

import MoviesList from "./components/MoviesList";
import Header from "./components/header/Header";
import AddMovie from "./components/AddMovie";
import useHttp from "./customHooks/useHttp.js";
import "./App.css";
import EditPopup from "./components/editMovie/EditPopup";
import Search from "./components/Search";

/* function App() {
  const [movies, setMovies] = useState([]);

  const { isLoading, error, count, fetchMoviesHandler } = useHttp();

  useEffect(() => {
    const saveData = (data) => {
      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
      console.log(loadedMovies);
      setMovies(loadedMovies);
    };
    console.log(1);
    fetchMoviesHandler(
      {
        url: "https://movie-render-app-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
      },
      saveData
    );
    console.log(movies);
  }, [fetchMoviesHandler]);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://movie-render-app-default-rtdb.europe-west1.firebasedatabase.app/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler, count]);

  async function addMovieHandler(movie) {
    try {
      const response = await fetch(
        "https://movie-render-app-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
        {
          method: "POST",
          body: JSON.stringify(movie),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setCount((prevCount) => prevCount + 1);
    } catch (error) {
      setError(error.message);
    }
  }
  const deleteMoviesHandler = (id) => {
    fetch(
      `https://movie-render-app-default-rtdb.europe-west1.firebasedatabase.app/movies/${id}.json`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  const deleteMovieHandler = (data) => {
    deleteMoviesHandler(data);
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
      console.log(count);
    }, 1000);
  };
  const editMovieHandler = (data) => {
    console.log(data);
  };
  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = (
      <MoviesList
        movies={movies}
        deleteMovieHandler={deleteMovieHandler}
        editMovieHandler={editMovieHandler}
      />
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
} */

const App = () => {
  const [count, setCount] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editedMovie, setEditedMovie] = useState(null);
  const [filteredMovies, setFilteredMovies] = useState({});

  const {
    movies,
    error,
    isLoading,
    fetchAllMovies,
    deleteMovie,
    addMovie,
    updateMovie,
  } = useHttp(
    {
      url: "https://movie-render-app-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
    },
    count
  );
  /*  const saveData = (data) => {
    setMovies(data);
  }; */
  useEffect(() => {
    fetchAllMovies({
      url: "https://movie-render-app-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
    });
  }, [count]);
  const deleteMovieHandler = (id) => {
    deleteMovie({ id });
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 500);
  };
  const addMovieHandler = (movie) => {
    addMovie(movie);
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 500);

    console.log(count);
  };
  const editMovieHandler = (movie) => {
    setIsEditing(true);
    setEditedMovie(movie);
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };
  const closeEditPopup = () => {
    setIsEditing(false);
    setCount((prevCount) => prevCount + 1);
  };
const updateCount = () => {
    setCount( prevCount => prevCount + 1 )
}
  const handleFilter = (data) => {
    console.log(data);
    setCount((prevCount) => prevCount + 1);
    setFilteredMovies(data);
    /* setCount((prevCount) => prevCount + 1); */
  };
  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = (
      <MoviesList
        movies={movies}
        filteredMovies={filteredMovies}
        deleteMovieHandler={deleteMovieHandler}
        editMovieHandler={editMovieHandler}
      />
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <Header></Header>
      <section>
        <AddMovie addMovieHandler={addMovieHandler} />

        {isEditing && (
          <EditPopup
            editedMovie={editedMovie}
            closeEditPopup={closeEditPopup}
            updateMovie={updateMovie}
            updateCount={updateCount}
          ></EditPopup>
        )}
      </section>
      <section>
        <Search movies={movies} handleFilter={handleFilter}></Search>
        {content}
      </section>
    </React.Fragment>
  );
};
export default App;

//rsf
