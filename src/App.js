import React from "react";
import Navi from "./components/Navi";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieList from "./pages/List";
import MoviDetails from "./pages/MoviDetails";
import BookTicket from "./pages/BookTicket";

function App() {
  return (
    <>
      <Navi />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/list" element={<MovieList />} />
        <Route path="/movies/:name" element={<MoviDetails />} />
        <Route path="/movies/bookTicket/:name" element={<BookTicket />} />
      </Routes>
    </>
  );
}

export default App;
