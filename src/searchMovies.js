import React from 'react';

const SearchMovies = () => {
  const searchMovies = async (e) => {
    e.preventDefault();
    console.log('submitting');

    const query = 'Jurassic Park';
    const url = `https://api.themoviedb.org/3/movi/550?api_key=dfcbd1f7d88db283a58a96ee2cd1f292&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch(err) {
    console.log(err)
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
