import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BookTile.scss";

const BookTile = ({ book }) => {
  const { title, author, stars } = book;
  const { name, lastName } = author;

  const [isStar, setIsStar] = useState(false);

  useEffect(() => {
    if (stars === 5) {
      setIsStar(true);
    }
  }, []);

  return (
    <Link to={`book/${book._id}`}>
      <article className={isStar ? "bookTile star" : "bookTile"}>
        <h2 className="bookTile__title">{title}</h2>
        <p className="bookTile__author">
          {name} {lastName}
        </p>
      </article>
    </Link>
  );
};

export default BookTile;
