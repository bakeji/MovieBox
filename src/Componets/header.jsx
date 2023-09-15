import React, { useContext } from "react";
import { AppContext } from "../context/appContext";
export default function Header(props){
    const {isFetched, topRated}= useContext(AppContext)
    // get random movie object from toprated array for header
    const randomindex = Math.floor(Math.random() * topRated.length)
    const randomMovie = isFetched && topRated[randomindex]
    return(
        <header style={isFetched?{ backgroundRepeat:"no-repeat", backgroundSize: "cover", background: `url(https://image.tmdb.org/t/p/original${randomMovie.backdrop_path})` }: {background:"#6B7280"}}>
            <nav>
            <img className="logo" src="./Logo.png" alt="logo" />

            <div className="search-box">
                <input type="text" placeholder="What do you want to watch?" />
                <button onClick={props.searchBtn}><img src="./Search.png" alt="search" /></button>
            </div>

            <div className="sign-in">
                <p>Sign in</p>
                <button><img src="./Menu.png" alt="Menu" /></button>
            </div>
            </nav>

            <div className="description">
                <h1>{randomMovie.title}</h1>
                <div className="ratings">
                    <span><img src="./imdb.png" alt="imdb logo" /> {`${randomMovie.vote_average}/10`}</span>
                    <span><img src="./tomato.png" alt="imdb logo" /> 88.0/100</span>
                </div>
                <p className="desc-text"> {randomMovie.overview} </p>
                <button className="watch-trailer">
                    <img src="./Play.png" alt="play-icon" />
                    Watch Trailer
                </button>
            </div>

            
        </header>

    )
}