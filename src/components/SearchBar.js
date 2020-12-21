import React,{ useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const APIurl = "search";
export default function SearchBar({term,setTerm}) {
    const[titles,setTitles]=useState([]);
    useEffect(()=>{
        const getTitles =async () =>{
            //console.log(term)
            const response = await fetch(`${APIurl}/${term}`, { headers: { 'accept': 'application/json' } });
            const res = await response.json()
            setTitles(res)
            //console.log(res)
        };
        getTitles()
    },[term])
    
  return (
    <div style={{ width: 600 }}>
      <Autocomplete
        value={term}
        onInputChange ={(e,v)=>setTerm(v)}
        id="AutoCompSearch"
        freeSolo
        options={titles.map((title) => title.title)}
        renderInput={(params) => (
          <TextField {...params} label="Search" fullWidth margin="normal" variant="outlined" value={term} onChange={e=>setTerm(e.target.value)} />
        )}
      />
    </div>
  );
}