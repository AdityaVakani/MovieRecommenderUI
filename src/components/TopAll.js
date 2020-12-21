import React,{ useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import Grid from '@material-ui/core/Grid'




const APIurl = "top";
const TopAll =()=>{
    const[results,setResults]=useState([]);
    useEffect(()=>{
        search()
    },[])

    const search =async () =>{
        const response = await fetch(`${APIurl}/20`, { headers: { 'accept': 'application/json' } });
        const res = await response.json()
        setResults(res)
    };
    
    const renderedResults = (results.data !== undefined && results.data.length > 0 && results.data.map((movie) => {
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
    }))

    return(
        <div>
            <div style ={{backgroundColor:"#d4d9d5"}}>
                <Grid container spacing={2}
                style={{padding: '2px'}}
                >
                    {renderedResults}
                </Grid>
            </div>
        </div>
    );
};

export default TopAll;