import { useState, useEffect } from "react";
import "./BookTile.scss";

const BookTile = ({ book }) => {
  const { title, author, list, stars } = book;
  const { name, lastName } = author;

  const [isStar, setIsStar] = useState(false);

  useEffect(() => {
    if (stars === 5) {
      setIsStar(true);
    }
  }, []);

  return (
    <article className={isStar ? "bookTile star" : "bookTile"}>
      <h2 className="bookTile__title">{title}</h2>
      <p className="bookTile__author">
        {name} {lastName}
      </p>
    </article>
  );
};

export default BookTile;
