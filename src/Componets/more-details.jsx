import React, { useContext } from "react";
import { MovieContext } from "../context/movieContext";

export default function MoreDetails(){
    const {selectedMovie} = useContext(MovieContext)
    return(
        <div className="more-details">
            <div className="flex-left">
                <p data-testid="movie-overview">{selectedMovie.overview} </p>
                <div className="crew">
                    <p>status : <span>{selectedMovie.status}</span></p>
                    <p>original Title : <span>{selectedMovie.original_title}</span></p>
                    <p>Tagline : <span>{selectedMovie.tagline}</span></p>
                </div>
                <div className="awards">
                    <span><p>top rated movie #65</p></span>
                    <select name="nomination" id="drp-dwn">
                        <option selected value="Nomination">Awards 9 nominations</option>
                    </select>
                </div>
                    
            </div>

            <div className="flex-right">
                <>
                <button className="btn-1"><img src="/Two Tickets.png" alt="tickets" />See Showtimes</button>
                <button className="btn-2"><img src="/Menu.png" alt="menu" />More watch options</button>
                </>
                <div className="shows-of-the-month">
                    <div className="poster">
                        <img src="/Rectangle 37.png" alt="" />
                    </div>
                    <span><img src="/Menu.png" alt="menu" /> <p>The Best Movies and Shows in September</p></span>
                </div>
            </div>
        </div>
    )
}