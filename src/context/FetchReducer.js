export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export default function fetchReducer(state, action) {
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

    default:
      return state;
  }
}
