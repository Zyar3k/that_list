export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const RENDER_LIST = "RENDER_LIST";
export const SEARCH_BOOK = "SEARCH_BOOK";
export const CLEAR_FILTER = "CLEAR_FILTER";
export const SORT_BY = "SORT_BY";

export default function appReducer(state, action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        loading: false,
        books: action.payload,
        error: "",
        all: true,
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
            all: false,
            ...state,
            filtered: state.books.filter((book) => book.list.ama),
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
    case SEARCH_BOOK:
      return {
        ...state,
        searched: state.books.filter((book) => {
          return (
            book.title.toLowerCase().includes(action.payload.toLowerCase()) ||
            book.author.name
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            book.author.lastName
              .toLowerCase()
              .includes(action.payload.toLowerCase())
          );
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        searched: null,
      };

    case SORT_BY:
      const value = action.payload.name;
      let sortedList;
      if (state.all) {
        sortedList = state.books;
      } else {
        sortedList = state.filtered;
      }
      let sorted;
      if (value === "nameDown") {
        console.log(state.all);
        console.log(sortedList);
        sorted = sortedList.sort((a, b) =>
          a.author.name < b.author.name ? "1" : "-1"
        );
      } else if (value === "nameUp") {
        sorted = sortedList.sort((a, b) =>
          a.author.name > b.author.name ? "1" : "-1"
        );
      } else if (value === "lastNameDown") {
        sorted = sortedList.sort((a, b) =>
          a.author.lastName < b.author.lastName ? "1" : "-1"
        );
      } else if (value === "lastNameUp") {
        sorted = sortedList.sort((a, b) =>
          a.author.lastName > b.author.lastName ? "1" : "-1"
        );
      } else if (value === "pageDown") {
        sorted = sortedList.sort((a, b) => (a.page < b.page ? "1" : "-1"));
      } else if (value === "pageUp") {
        sorted = sortedList.sort((a, b) => (a.page > b.page ? "1" : "-1"));
      } else if (value === "starDown") {
        console.log(sortedList);
        sorted = sortedList.sort((a, b) => (a.stars < b.stars ? "1" : "-1"));
      } else if (value === "starUp") {
        sorted = sortedList.sort((a, b) => (a.stars > b.stars ? "1" : "-1"));
      }

      return {
        ...state,
      };

    default:
      return state;
  }
}
