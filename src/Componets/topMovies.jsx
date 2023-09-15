import React,  {useContext} from "react";
import { AppContext } from "../context/appContext";
import { Link } from "react-router-dom";


export default function TopMovies(){
    
const {topRated}=useContext(AppContext)
    return(
        <div className="top-movies">

            <div className="head-text">
                <h3>Top Rated movie</h3>
                <a href="#">See more <img src="./right.png" alt="right-arrow" /></a>
            </div>
           
            <div className="grid">
            {topRated.slice(0, 10).map((movies, id)=>(
            
    
                <div key={id} data-testid="movie-card">
                    <Link to={`/movies/${movies.id}`} style={{textDecoration: "none"}}>
                    <img data-testid="movie-poster" src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`} alt="movie-poster" />
                    <div className="like-series">
                    <p></p>
                    <button> <img src="./Heart.png" alt="like-btn" /></button>
                    
                    </div>
                    <div className="more-info">
                        <p data-testid= "movie-release-date">{new Date(movies.release_date).toUTCString()}</p>
                        <h2 data-testid="movie-title">{movies.title} </h2>
                        <div className="ratings2">
                            <span><img src="/imdb.png" alt="" />{`${movies.vote_average}/10`}</span>
                            <span><img src="./tomato.png" alt="" />97%</span>
                        </div>
                        <p className="genre">Action, Adventure, Horror</p>
                    </div>
                    </Link>
                </div>
                
                   ))} 
            </div>

           
        </div>
    )
}