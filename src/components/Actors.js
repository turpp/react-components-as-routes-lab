import React from 'react';
import { actors } from '../data';

const Actors = () => {

  let showActors = () => actors.map(actor=>{
    return <div>
      <h3>Name: {actor.name}</h3>
      <p>Movies:
        {actor.movies.map(movie=>{
          return <li>{movie}</li>
        })}
      </p>
    </div>
  })



  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {showActors()}
    </div>
  );
};

export default Actors;
