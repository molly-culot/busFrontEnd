import React from "react";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import SignUp from "./pages/signup";
import LogSched from "./pages/logSched";
import ViewSched from "./pages/viewSched";

function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route
                  path="/contact"
                  element={<Contact />}
              />
              <Route path="/blogs" element={<Blogs />} />
              <Route
                  path="/sign-up"
                  element={<SignUp />}
              />
          </Routes>
      </Router>
  );
}

export default App;
