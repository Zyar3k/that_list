import "./BookContent.scss";

import star from "../../../images/star.png";
import lc from "../../../images/lc-logo.png";

const BookContent = ({ book }) => {
  const {
    title,
    link,
    page,
    author: { name, lastName },
    list,
    readed,
    available,
    stars,
  } = book;
  console.log(stars);

  const reviewStars = (num) => {
    let stars = [];
    for (let i = 0; i < num; i++) {
      stars.push(<img key={i} src={star} alt="star" className="star" />);
    }
    return <>{stars}</>;
  };

  const renderEle = <img key={Math.random()} src={star} alt="star" />;
  return (
    <div className="bookContent">
      <div className="bookContent__stars">{reviewStars(stars)}</div>
      <div className="bookContent__title">{title}</div>
      <div className="bookContent__author">
        {name}-{lastName}
      </div>
      <a className="bookContent__link" rel="stylesheet" href={link}>
        Więcej na: <img src={lc} alt="logo lubimyczytac.pl" />
      </a>
      <div className="bookContent__page">
        <p>
          <i className="fas fa-book-open"></i>Liczba stron: {page}
        </p>
        <p>
          <i className="fas fa-clock"></i>Czas czytania: 10 godz. 55 min.
        </p>
      </div>

      <div className="bookContent__lists">
        <h4>Listy:</h4>

        <p className={list.ama && "onList"}>amazon</p>
        <p className={list.bbc && "onList"}>bbc</p>
        <p className={list.emp && "onList"}>empik</p>
        <p className={list.gan && "onList"}>gandalf</p>
        <p className={list.pozy && "onList"}>propozycje</p>
      </div>
      <div className="bookContent__checkInfo">
        <p>
          {readed && (
            <>
              <i className="fas fa-book-open"></i>
            </>
          )}
        </p>
        <p>
          {available && (
            <>
              <i className="fas fa-tablet-alt"></i>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default BookContent;
