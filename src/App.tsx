import React, { useState } from "react";
import { Home } from "./components/Home";
import { NoPage } from "./components/NoPage";
import { Credits } from "./components/Credits";
import { Games } from "./components/Games";
import { Layout } from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FarmersWorld } from "./components/FarmersWorld";
import { ArenaOfGlory } from "./components/ArenaOfGlory";
import { waxpriceContext } from "./Context";

function App() {
  const [waxprice, setWaxprice] = useState(0);
  return (
    <waxpriceContext.Provider value={{ waxprice, setWaxprice }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="credits" element={<Credits />} />
            <Route path="games">
              <Route index element={<Games></Games>}></Route>
              <Route path="farmersworld" element={<FarmersWorld />} />
              <Route path="arenaofglory" element={<ArenaOfGlory />} />
            </Route>
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </waxpriceContext.Provider>
  );
}
export default App;
