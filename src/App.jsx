import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./assets/images.png";
import "./App.css";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=700761d4";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1><i>Your Favorite Movie Store!</i></h1>
      <p><i><center>This is a mock React App showcasing my skills in utilizing <br/> 
        React components, props, useEffect hook, useState hook, mapping tricks, <br/>
        my ability to fetch data from an external database,
        and utilize css to produce an amazing website. <br/>
        The app fetches API data from OMDb API database and it is mobile responsive.</center></i></p>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search your favorite movies here ..."
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies && movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;