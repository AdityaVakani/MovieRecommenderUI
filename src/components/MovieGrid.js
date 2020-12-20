import React from 'react'
import Grid from '@material-ui/core/Grid'
import MovieCard from './MovieCard';


const MovieGrid = (movies) =>{
    console.log(movies)
        
    
    const renderedResults = movies.map((movie) => {
        console.log(movie);
        return (
                <Grid key={movie.id} item
                xs={12} sm={6} md={4} lg={4} xl={3}
                >
                    <MovieCard 
                        title={movie.title} 
                        poster={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                        year={movie.year}
                    />
                </Grid> 
        )
    })
    return (
        <div>
            <Grid container spacing={10}
            style={{padding: '24px'}}
            >
                {renderedResults}
            </Grid>
        </div>
    );
};
        export default MovieGrid;
