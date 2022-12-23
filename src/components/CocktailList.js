import React from "react";
import { useAppContext } from "../context";

// Other components
import Loading from "./Loading";
import Cocktail from "./Cocktail";

const CocktailList = () => {
  const { isLoading, cocktails } = useAppContext();

  if (isLoading) return <Loading />;

  if (cocktails.length === 0)
    return (
      <h2 className="section-title">No cocktails match your criteria...</h2>
    );

  return (
    <section className="section">
      <h2 className="section-title">Cocktails:</h2>
      <div className="cocktails-center">
        {cocktails.map((cocktailObj) => (
          <Cocktail key={cocktailObj.id} {...cocktailObj} />
        ))}
      </div>
    </section>
  );
};

export default CocktailList;
