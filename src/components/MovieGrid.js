import React from 'react'
import Grid from '@material-ui/core/Grid'
import MovieCard from './MovieCard';

const MovieGrid = (movies) =>{
    // const renderedResults = (movies !== undefined && movies.length > 0 && movies.map((movie) => {
    //     return (
    //             <Grid key={movie.id} item
    //             xs={12} sm={6} md={4} lg={4} xl={3}
    //             >
    //                 <MovieCard 
    //                     title={movie.title} 
    //                     poster={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
    //                     year={movie.year}
    //                 />
    //             </Grid> 
    //     )
    // }))
       const renderedResults = (movies !== undefined && movies.length > 0 && movies.map((movie) => {
            return (
                <div key = {movie.id}>
                    <MovieCard title={movie.title} poster={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} year={movie.year}/>
                </div>
            )
        }))
    return (
        <div>
                {renderedResults}
        </div>
    );
};
        export default MovieGrid;
