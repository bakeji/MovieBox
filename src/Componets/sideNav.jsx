import React from "react";

export default function SideNav(){
    return(
        <div className="side-nav">
            <img className="logo" src="/Logo2.png" alt="logo" />
            <nav>
                <a> <img src="/Home.png" alt="home-icon" />Home</a>
                <a> <img src="/Movie.png" alt="movie-icon" />Movies</a>
                <a> <img src="/TV Show.png" alt="tv-icon" />Tv Series</a>
                <a> <img src="/upcoming.png" alt="calendar-icon" />Upcoming</a>
            </nav>

            <div className="games">
                <p className="play">Play movie quizes and earn free tickets</p>
                <p className="play2">50k people are playing now</p>
                <button>Start playing</button>
            </div>

            <a className="logout"> <img src="/Logout.png" alt="logout-icon" />Logout</a>

            
        </div>
    )
}