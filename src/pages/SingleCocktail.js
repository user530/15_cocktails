import React from "react";
import { Link, useParams } from "react-router-dom";

// Component
import Loading from "../components/Loading";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();

  const [isPageLoading, setIsPageLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  const getSingleCocktail = async (url) => {
    setIsPageLoading(true);

    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();

      if (data.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0];

        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];

        const newCocktail = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        };

        setCocktail(newCocktail);
      } else setCocktail(null);

      setIsPageLoading(false);
    } catch (error) {
      console.log(error);
      setIsPageLoading(false);
      throw new Error("Failed to fetch cocktail data!");
    }
  };

  React.useEffect(() => {
    getSingleCocktail(url);
  }, [id]);

  if (isPageLoading) return <Loading />;

  if (!cocktail)
    return <h2 className="section-title">No cocktail to display...</h2>;

  const {
    name,
    image,
    info,
    category,
    glass,
    instructions,
    ingredients,
  } = cocktail;

  return (
    <section className="section cocktail-section">
      <Link to={"/"} className="btn btn-primary">
        Back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">Name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">Category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">Info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">Glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">Instructions:</span>
            {instructions}
          </p>

          <p>
            <span className="drink-data">Ingredients:</span>
            {ingredients.map((item, ind) =>
              item ? <span key={ind}>{item}</span> : null
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
