import { Route, Routes } from "react-router";

import Home from "./pages/Home";
import Clubs from "./pages/Clubs";
import Nationals from "./pages/Nationals";
import Players from "./pages/Players";
import Stadiums from "./pages/Stadiums";
import Trophies from "./pages/Trophies";
import ClubDetails from "./pages/ClubDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <main className="app">
      <div className="container max-w-5xl mx-auto py-10">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/clubs" element={<Clubs />}></Route>
          <Route path="/nationals" element={<Nationals />}></Route>
          <Route path="/players" element={<Players />}></Route>
          <Route path="/stadiums" element={<Stadiums />}></Route>
          <Route path="/trophies" element={<Trophies />}></Route>
          <Route path="/club/:id" element={<ClubDetails />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
