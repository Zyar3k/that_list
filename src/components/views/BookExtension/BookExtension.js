import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { useParams, useHistory } from "react-router";

import BookContent from "../../features/BookContent/BookContent";

const BookExtension = () => {
  const { books } = useContext(GlobalContext);
  const params = useParams();
  const history = useHistory();
  const path = history.location.pathname;

  console.log(params);

  const bookElement = books
    .filter((book) => params.id.includes(book._id))
    .map((book) => <BookContent key={book._id} book={book} />);

  return <>{bookElement}</>;
};

export default BookExtension;
