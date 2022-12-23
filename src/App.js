import React from "react";
import { useAppContext } from "./context";

const App = () => {
  const { isLoading } = useAppContext();
  console.log(isLoading);

  return (
    <main>
      <h2>APP COMPONENT</h2>
    </main>
  );
};

export default App;
