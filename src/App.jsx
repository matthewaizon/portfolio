import "./App.css";

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Work from "./pages/Work";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route 
            exact 
            path="portfolio/" 
            element={<Home />}
          />
          <Route 
            path="portfolio/work" 
            element={<Work />}
          />
        </Routes>
      </Router>  
    </>
  );
}

export default App;