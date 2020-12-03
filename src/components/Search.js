import React,{ useEffect, useState } from 'react';
import Movie from './Movie';
import MovieCard from './MovieCard';
import Grid from '@material-ui/core/Grid'


const APIurl = "similar";
const Search =()=>{
    const[term,setTerm]=useState('The Dark Knight Rises');
    const[results,setResults]=useState([]);
    useEffect(()=>{
        const search = async ()=>{
            const response = await fetch(`${APIurl}/${term}/12`, { headers: { 'accept': 'application/json' } });
            const res = await response.json()
            setResults(res)
            console.log(results)
        };
        if(term&&!results.length){
            search();
        }else{
            const timeoutId = setTimeout(()=>{
                if(term){    
                    search();
                }
            },1000);
        
            return ()=>{
                clearTimeout(timeoutId);
            }
        }
        },[term])
    //
    // const renderedResults = (results.data !== undefined && results.data.length > 0 && results.data.map((result) => {
    //         console.log(result.title)
    //         return (
    //             <div key = {result.id}>
    //                 <MovieCard title={result.title} poster={`https://image.tmdb.org/t/p/w200${result.poster_path}`} year={result.year}/>
    //             </div>
    //         )
    //     }))
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
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        value={term}
                        onChange={e=>setTerm(e.target.value)}
                        className="input"
                    />
                </div>
            </div>
            <div>
                <Grid container spacing={2}
                style={{padding: '2px'}}
                >
                    {renderedResults}
                </Grid>
            </div>
        </div>
    );
};

export default Search;