import React,{ useEffect, useState } from 'react';
import Movie from './Movie';
import MovieCard from './MovieCard';
import Grid from '@material-ui/core/Grid'
import SearchBar from './SearchBar';
import MovieGrid from './MovieGrid';
import CircularProgress from '@material-ui/core/CircularProgress'


const APIurl = "similar";
const Search =()=>{
    const[term,setTerm]=useState('The Dark Knight Rises');
    const[results,setResults]=useState([]);
    useEffect(()=>{
        search()
    },[])

    const search =async () =>{
        const response = await fetch(`${APIurl}/${term}/12`, { headers: { 'accept': 'application/json' } });
        const res = await response.json()
        setResults(res)
        //console.log(results)
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


    console.log(term)
    return(
        <div style ={{backgroundColor:"#1c1a1c"}}>
            <div className="ui form">
                <div class = "field"> 
                    {/* <label>Enter Search Term</label> */}
                        <div class="two fields">
                            <div class =" eight wide field"> 
                                {/* <input
                                    value={term}
                                    onChange={e=>setTerm(e.target.value)}
                                    className="input"
                                /> */}
                                 <SearchBar term ={term} setTerm={setTerm}/>
                            </div>
                            <div class=" wide field">
                                <button class="ui right floated primary button"
                                    onClick={() => search()}   
                                >
                                Search
                                </button>
                            </div>   
                        </div>
                    
                </div> 
            </div>
            {/* {(results === undefined || results.length === 0) && <CircularProgress/>}
            { results.data !== undefined  && <MovieGrid movies ={results}/>} */}
            <div>
                <Grid container spacing={2}
                style={{padding: '2px'}}
                >
                    {renderedResults}
                </Grid>
            </div>
        </div>
    );
    // return(
    //     <div>
    //         <SearchBar term ={term} setTerm={setTerm}/>
    //     </div>
    // )
};

export default Search;