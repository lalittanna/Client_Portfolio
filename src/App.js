import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { About, Footer, Header, Skills, Work } from "./container";
import { Navbar } from "./components";
import WorkDetail from "./container/Work/WorkDetail"; // New detail component
import "./App.scss";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <About />
                <Work />
                <Skills />
                <Footer />
              </>
            }
          />
          <Route path="/work/:id" element={<WorkDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
