import { useContext, useEffect, useState } from "react";

import { GlobalContext } from "../../../context/GlobalContext";

import "./BookList.scss";
import BookTile from "../BookTile/BookTile";

// TODO: Add loading animation
const Loading = () => <h1>Loading</h1>;

const BookList = () => {
  const { books, filtered, all, searched } = useContext(GlobalContext);
  const [displayData, setDisplayData] = useState(books);

  useEffect(() => {
    if (searched) {
      setDisplayData(searched);
    } else if (all) {
      setDisplayData(books);
    } else {
      setDisplayData(filtered);
    }
  }, [all, books, filtered, searched]);

  return (
    <section className="bookList">
      {displayData.length > 0 ? (
        displayData.map((book) => <BookTile key={book._id} book={book} />)
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default BookList;
