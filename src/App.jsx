import React from "react";
import {Route, Routes,BrowserRouter} from 'react-router-dom'
import HomePage from "./pages/homepage/homepage";
import MovieDetails from "./pages/moviedetails page/movieDetails";

export default function App(){
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MovieDetails/>} />
        </Routes>


        </BrowserRouter>
    </div>
}