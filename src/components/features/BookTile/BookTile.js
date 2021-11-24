import "./BookTile.scss";

const BookTile = ({ book }) => {
  const { title, author } = book;
  const { name, lastName } = author;

  //   console.log(book.author);
  return (
    <article className="bookTile">
      <h2 className="bookTile__title">{title}</h2>
      <p className="bookTile__author">
        {name} {lastName}
      </p>
    </article>
  );
};

export default BookTile;
