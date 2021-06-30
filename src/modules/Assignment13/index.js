import React, { useReducer } from "react";
import MainScreen from "./MainScreen";
import { initialState, Reducer } from "./reducer";

export const AppContext = React.createContext(initialState);

function Assignment13() {
  const [newState, dispatch] = useReducer(Reducer, initialState);
  return (
    <AppContext.Provider value={[newState, dispatch]}>
      <MainScreen />
    </AppContext.Provider>
  );
}

export default Assignment13;