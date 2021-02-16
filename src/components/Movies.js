import React from 'react';
import { movies } from '../data';

const Movies = () => {
  let showMovie = () => movies.map(movie=>{
    return <div>
      <h4>Name: {movie.title}</h4>
      <p>Time: {movie.time}</p>
      <ul>
        Genres:
        {movie.genres.map(genre=>{
          return <li>{genre}</li>
        })}
      </ul>
    </div>
  })
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {showMovie()}
        
    </div>
  );
};

export default Movies;
