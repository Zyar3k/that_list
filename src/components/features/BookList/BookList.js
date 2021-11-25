import { useContext, useEffect, useState } from "react";

import { GlobalContext } from "../../../context/GlobalContext";

import "./BookList.scss";
import BookTile from "../BookTile/BookTile";

// TODO: Add loading animation
const Loading = () => <h1>Loading</h1>;

const BookList = () => {
  const { books, filtered, all } = useContext(GlobalContext);
  const [displayData, setDisplayData] = useState(books);

  useEffect(() => {
    if (all || all === undefined) {
      setDisplayData(books);
    } else {
      setDisplayData(filtered);
    }
  }, [all, books, filtered]);

  return (
    <section className="bookList">
      {displayData.length > 0 ? (
        displayData.map((book) => <BookTile key={book.id} book={book} />)
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default BookList;
