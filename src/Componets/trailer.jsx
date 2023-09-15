import React, { useContext } from "react";
import { MovieContext } from "../context/movieContext";
export default function Trailer(){
     const {selectedMovie}=useContext(MovieContext)
const releaseDate = new Date(selectedMovie?.release_date);
const UTCReleaseDate = releaseDate.toUTCString();
   return(
    <div className="trailer">

        <div className="video">
            <img className="trailer-img" src={`https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path} `} alt="" />
            <span className="span">
                <button><img src="/Play-btn.png" alt="Play" /></button>
                <p>Watch Trailer</p></span>
            
        </div>


        <div className="movie-info">
            <div className="details">
                <p data-testid="movie-title">{selectedMovie.title}</p>
                <span></span>
                <p data-testid="movie-release-date">{UTCReleaseDate}</p>
                <span></span>
                <p className="cr">pg-13</p>
                <span></span>
                <p data-testid="movie-runtime">{selectedMovie.runtime}</p>
                <div className="genre">
                    <p>Action</p>
                    <p>Drama</p>
                </div>
            </div>

            <span className="ratings1"> <img src="/Star.png" alt="rates" /> <span>{selectedMovie.vote_average}</span>|350k</span>
        </div>
   </div>
   )
}