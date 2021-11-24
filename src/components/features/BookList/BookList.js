import { useContext, useEffect, useState } from "react";
import BookTile from "../BookTile/BookTile";

import { GlobalContext } from "../../../context/StoreContext/GlobalContext";

import "./BookList.scss";

const BookList = () => {
  const { books } = useContext(GlobalContext);

  return (
    <section className="bookList">
      {books.map((book) => (
        <BookTile key={book._id} book={book} />
      ))}
    </section>
  );
};

export default BookList;
