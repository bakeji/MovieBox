import React, { useContext, useEffect, useState } from "react";
import Header from "../../Componets/header";
import TopMovies from "../../Componets/topMovies";
import Footer from "../../Componets/footer";
import { AppContext } from "../../context/appContext";
import "./homepage.css";

export default function HomePage() {
  const { isFetched, error } = useContext(AppContext);
  if (error) {
    return <div>{error.message}</div>;
  } else if (!isFetched) {
    return <div>loading........</div>;
  } else
    return (
      <div className="homepage">
        {isFetched && (
          <>
            <Header />
            <TopMovies />
          </>
        )}
        <Footer />
      </div>
    );
}
