import React from "react";

import { Routes, Route } from "react-router-dom";

import Series from "../../containers/Series/Series.js";
import Seasons from "../../containers/Seasons/Seasons";
import Episodes from "../../containers/Episodes/Episodes";

function Main(props) {
  return (
    <Routes>
      <Route exact path="/" element={<Series />} />
      <Route exact path="/show/:id/seasons" element={<Seasons />} />
      <Route exact path="/season/:id/episodes" element={<Episodes />} />
    </Routes>
  );
}

export default Main;
