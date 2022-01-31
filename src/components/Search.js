import React from "react";

const Search = ({ movies, handleFilter }) => {
  const handleInputChange = (e) => {
    const array = movies.filter((movie) =>
      movie.title.toString().toLowerCase().includes(e.target.value)
    );
    handleFilter(array);
  };
  return (
    <input
      type="text"
      placeholder="search..."
      onChange={handleInputChange}
    ></input>
  );
};
export default Search;
