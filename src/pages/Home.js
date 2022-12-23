import React from "react";

// Components
import CocktailList from "../components/CocktailList";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <main>
      <SearchBar />
      <CocktailList />
    </main>
  );
};

export default Home;
