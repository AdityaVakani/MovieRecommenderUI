import React from 'react';

const Movie =({title,year,poster})=>{


//Your handler Component
const addDefaultSrc=(ev)=>{
  ev.target.src = 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-1-204x300.jpg'
}
    return(
        <div className ="movie">
            <h2>{title}</h2>
            <div>
            <img
                onError={addDefaultSrc}
                width="200"
                src={poster}
            />
            </div>
            <p>({year})</p>
        </div>
    );
};

export default Movie;