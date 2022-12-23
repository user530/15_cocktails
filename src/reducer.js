const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH_TERM": {
      console.log(`SET SEARCH TERM FIRED!`);
      return { ...state, searchTerm: action.payload.term };
    }

    case "SET_LOADING": {
      console.log(`SET LOADING FIRED!`);
      return { ...state, isLoading: action.payload.loading };
    }

    case "SET_COCKTAILS": {
      console.log(`SET COCKTAILS FIRED!`);
      return { ...state, cocktails: action.payload.cocktails };
    }

    default:
      throw new Error("Reducer Error: Action is not recognized");
  }
};

export default reducer;
