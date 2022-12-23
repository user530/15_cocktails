import React from "react";
import reducer from "./reducer";

const initialState = {
  isLoading: false,
};

const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
