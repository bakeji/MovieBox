import React, { useEffect, useState } from "react";
import {Route, Routes,BrowserRouter} from 'react-router-dom'
import HomePage from "./pages/homepage/homepage";
import MovieDetails from "./pages/moviedetails page/movieDetails";
import { AppContext } from "./context/appContext";


export default function App(){
const [topRated, setTopRated]=useState([])
const [isFetched, setIsFetched]=useState(false)

const fetchApi = async () => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const movieArray = await response.json();
      const newMovieArray = movieArray.results;
      setTopRated(newMovieArray);
      setIsFetched(true);
    } catch (err) {
    //   setError(err);
    }
  };
           

    useEffect(()=>{
        fetchApi()
        console.log(isFetched)
    },[])

   return(
    <div className="App">
        <AppContext.Provider value={{topRated, isFetched}}>
            <BrowserRouter> 
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/movies/:imdb_id" element={<MovieDetails/>} />
                </Routes>
            </BrowserRouter>
    </AppContext.Provider>
</div>
   )
}