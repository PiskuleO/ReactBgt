import React, { useState } from "react";
import { Home } from "./components/Home";
import { NoPage } from "./components/NoPage";
import { Credits } from "./components/Credits";
import { Games } from "./components/Games";
import { Layout } from "./components/Layout";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FarmersWorld } from "./components/FarmersWorld";
import { ArenaOfGlory } from "./components/ArenaOfGlory";
import "./App.css";

function App() {
  const [waxprice, setWaxprice] = useState<number>(0);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout waxprice={waxprice} setWaxprice={setWaxprice} />}
        >
          <Route index element={<Home />} />
          <Route path="games" element={<Games />} />
          <Route path="credits" element={<Credits />} />
          <Route path="farmersworld" element={<FarmersWorld />} />
          <Route
            path="arenaofglory"
            element={
              <ArenaOfGlory waxprice={waxprice} setWaxprice={setWaxprice} />
            }
          />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
export default App;
