import { useState, useEffect } from "react";

const useHttp = (config, dep) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

  /* useEffect(() => {
    setIsLoading(true);
    fetch(config.url, {
      method: config.method ? config.method : "GET",
      body: config.body ? JSON.stringify(config.body) : null,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const loadedMovies = [];

        for (const key in data) {
          loadedMovies.push({
            id: key,
            title: data[key].title,
            openingText: data[key].openingText,
            releaseDate: data[key].releaseDate,
          });
        }
        setIsLoading(false);

        setMovies(loadedMovies);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, [dep]);
 */
  const fetchAllMovies = (config) => {
    setIsLoading(true);
    fetch(config.url)
      .then((res) => res.json())
      .then((data) => {
        const loadedMovies = [];

        for (const key in data) {
          loadedMovies.push({
            id: key,
            title: data[key].title,
            openingText: data[key].openingText,
            releaseDate: data[key].releaseDate,
          });
        }
        setIsLoading(false);

        setMovies(loadedMovies);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };
  const deleteMovie = (config) => {
    fetch(
      `https://movie-render-app-default-rtdb.europe-west1.firebasedatabase.app/movies/${config.id}.json`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => {
        setError(error);
      });
  };

  const addMovie = (movie) => {
    fetch(
      "https://movie-render-app-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => {
        setError(error);
      });
  };
  const updateMovie = (movie) => {
    console.log(movie);
    fetch(
      `https://movie-render-app-default-rtdb.europe-west1.firebasedatabase.app/movies/${movie.id}.json`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(movie),
      }
    );
  };
  return {
    movies,
    isLoading,
    error,
    fetchAllMovies,
    deleteMovie,
    addMovie,
    updateMovie,
  };
};
export default useHttp;
