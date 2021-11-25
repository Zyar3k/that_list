export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const RENDER_LIST = "RENDER_LIST";

export default function appReducer(state, action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        loading: false,
        books: action.payload,
        error: "",
      };
    case FETCH_ERROR:
      return {
        loading: false,
        books: [],
        error: "Something went wrong!",
      };
    case RENDER_LIST:
      const listName = action.payload.name;

      switch (listName) {
        case "allBooks":
          return { ...state, books: state.books, filtered: [], all: true };
        case "amazon":
          return {
            ...state,
            filtered: state.books.filter((book) => book.list.ama),
            all: false,
          };
        case "bbc":
          return {
            ...state,
            filtered: state.books.filter((book) => book.list.bbc),
            all: false,
          };
        case "empik":
          return {
            ...state,
            filtered: state.books.filter((book) => book.list.emp),
            all: false,
          };
        case "gandalf":
          return {
            ...state,
            filtered: state.books.filter((book) => book.list.gan),
            all: false,
          };
        case "pozycje":
          return {
            ...state,
            filtered: state.books.filter((book) => book.list.pozy),
            all: false,
          };

        default:
          return state;
      }

    default:
      return state;
  }
}
