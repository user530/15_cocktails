import React from "react";
import { useAppContext } from "./context";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CocktailList from "./components/CocktailList";

const App = () => {
  const { isLoading } = useAppContext();
  console.log(isLoading);

  return (
    <React.Fragment>
      <Navbar />
      <main>
        <SearchBar />
        <CocktailList />
      </main>
    </React.Fragment>
  );
};

export default App;
