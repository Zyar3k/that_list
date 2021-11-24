import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { BASE_URL } from "../../config";

import fetchReducer, { FETCH_ERROR, FETCH_SUCCESS } from "../FetchReducer";

import { dbBooks } from "../../dummyData";

const initialState = {
  books: [],
};

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  console.log(state);
  useEffect(() => {
    axios
      .get(`${BASE_URL}books`)
      .then((res) => {
        // console.log(res.data);
        // dispatch({ type: FETCH_SUCCESS, payload: res.data });
        dispatch({ type: FETCH_SUCCESS, payload: dbBooks });
      })
      .catch((error) => {
        dispatch({ tpy: FETCH_ERROR });
      });
  }, []);

  return (
    <GlobalContext.Provider value={{ state, books: state.books }}>
      {children}
    </GlobalContext.Provider>
  );
};
