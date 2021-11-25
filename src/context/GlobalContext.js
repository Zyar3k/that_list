import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

import appReducer, {
  FETCH_ERROR,
  FETCH_SUCCESS,
  RENDER_LIST,
} from "./AppReducer";

import { dbBooks } from "./../dummyData";

const initialState = {
  loading: true,
  error: "",
  books: [],
  filtered: null,
  all: true,
};

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    axios
      .get(`${BASE_URL}books`)
      .then((res) => {
        // dispatch({ type: FETCH_SUCCESS, payload: res.data });
        dispatch({ type: FETCH_SUCCESS, payload: dbBooks });
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR });
      });
  }, []);

  const filterByList = (name) => {
    dispatch({ type: RENDER_LIST, payload: { name } });
  };

  return (
    <GlobalContext.Provider
      value={{
        loading: state.loading,
        state,
        books: state.books,
        filtered: state.filtered,
        filterByList,
        all: state.all,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
