import React from "react";
import reducer from "./reducer";

const initialState = {
  isLoading: false,
  searchTerm: "a",
  cocktails: [],
};

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const setSearchTerm = (term) => {
    dispatch({ type: "SET_SEARCH_TERM", payload: { term } });
  };

  const fetchDrinks = React.useCallback(
    async (url) => {
      dispatch({ type: "SET_LOADING", payload: { loading: true } });

      try {
        const response = await fetch(`${url}${state.searchTerm}`);
        const data = await response.json();
        const { drinks } = data;

        if (drinks) {
          const newCocktails = drinks.map((drinkObj) => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcoholic,
              strGlass,
            } = drinkObj;

            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            };
          });

          dispatch({
            type: "SET_COCKTAILS",
            payload: { cocktails: newCocktails },
          });
        } else dispatch({ type: "SET_COCKTAILS", payload: { cocktails: [] } });

        dispatch({ type: "SET_LOADING", payload: { loading: false } });
      } catch (error) {
        console.log(error);
        dispatch({ type: "SET_LOADING", payload: { loading: false } });
        throw new Error("Failed to fetch the data");
      }
    },
    [state.searchTerm]
  );

  React.useEffect(() => {
    fetchDrinks(url);
  }, [state.searchTerm, fetchDrinks]);

  return (
    <AppContext.Provider value={{ ...state, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
