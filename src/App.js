import React from "react";
import { useAppContext } from "./context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import SingleCocktail from "./pages/SingleCocktail";

// Import components
import Navbar from "./components/Navbar";

const App = () => {
  const { isLoading } = useAppContext();
  console.log(isLoading);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/cocktail/:id" element={<SingleCocktail />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
