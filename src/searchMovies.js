import React from 'react';

const SearchMovies = () => {
  const searchMovies = async (e) => {
    e.preventDefault();
    console.log('submitting');
  };
  return (
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">
        Movie Name
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e. Jurassic Park"
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchMovies;
