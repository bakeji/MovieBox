import React, { useContext, useEffect, useState } from "react";
import Header from "../../Componets/header";
import TopMovies from "../../Componets/topMovies";
import Footer from "../../Componets/footer";
import { AppContext } from "../../context/appContext";
import "./homepage.css"

export default function HomePage(){
    const {isFetched} = useContext(AppContext)
    return(
        <div>
            {isFetched &&
            <>
            <Header/>
            <TopMovies />
            </>
}
            <Footer />
        </div>
    )
}