import React, { useEffect, useState } from "react";
import SideNav from "../../Componets/sideNav";
import Trailer from "../../Componets/trailer";
import MoreDetails from "../../Componets/more-details";
import "./moviedetails.css"
import { useParams } from "react-router-dom";
import { MovieContext } from "../../context/movieContext";

export default function MovieDetails(){
    const [selectedMovie, setSelectedMovie]= useState({})
    const { imdb_id }=useParams()


const fetchMovieData = async () => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const response = await fetch(`https://api.themoviedb.org/3/movie/${imdb_id}`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

     const movieDataArray = await response.json();
       setSelectedMovie(movieDataArray)
    } catch (err) {
    //   setError(err);
    }
  };
  useEffect(()=>{
    fetchMovieData()
  },[])


    return(
        <div className="movie-details">
            <MovieContext.Provider value={{selectedMovie}}>
            <SideNav />
            <div className="flex-items">
                <Trailer  />
                <MoreDetails  />
            </div>
            </MovieContext.Provider>
        </div>
    )
}