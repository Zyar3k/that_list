import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

import appReducer, {
  FETCH_ERROR,
  FETCH_SUCCESS,
  RENDER_LIST,
  SEARCH_BOOK,
  CLEAR_FILTER,
} from "./AppReducer";

import { dbBooks } from "./../dummyData";

const initialState = {
  loading: true,
  error: "",
  books: [],
  filtered: null,
  all: true,
  searched: null,
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

  const searchBook = (id) => {
    dispatch({ type: SEARCH_BOOK, payload: id });
  };
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <GlobalContext.Provider
      value={{
        loading: state.loading,
        state,
        books: state.books,
        filtered: state.filtered,
        searchBook,
        clearFilter,
        filterByList,
        all: state.all,
        searched: state.searched,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
