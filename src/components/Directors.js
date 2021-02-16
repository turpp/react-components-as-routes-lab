import React from 'react';
import { directors } from '../data';

const Directors = () => {

  let showDirectors= () => {
    return directors.map(director => {
      return <div
      ><h3>{director.name}</h3>
      <p>Movies:
        {director.movies.map(movie=>{
          return <li>{movie}</li>
        })}
      </p>
      </div>
    })
  }

  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {showDirectors()}
    </div>
  );
}

export default Directors
