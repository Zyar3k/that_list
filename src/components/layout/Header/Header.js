import { useEffect, useState, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { GlobalContext } from "../../../context/GlobalContext";

import "./Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const [subtitle, setSubtitle] = useState("");
  const { filterByList } = useContext(GlobalContext);
  let location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (location.pathname === "/twoja-lista") {
      setIsHome(false);
      setSubtitle("Twoja lista");
    } else if (location.pathname === "/statystyki") {
      setIsHome(false);
      setSubtitle("Statystyki");
    } else {
      setIsHome(true);
    }
  }, [location]);

  const dataHeader = {
    logo: { name: "ONElist", href: "/" },
    navItems: [
      // {
      //   name: "Home",
      //   href: "/",
      // },
      {
        name: "Twoja lista",
        href: "/twoja-lista",
      },
      {
        name: "Statystyki",
        href: "/statystyki",
      },
    ],
    listItems: [
      {
        id: "allBooks",
        name: "1Lista",
        defaultValue: true,
        icon: "fas fa-network-wired",
        func: () => filterByList("allBooks"),
      },
      {
        id: "amazon",
        name: "Amazon",
        defaultValue: false,
        icon: "fas fa-dice-one",
        func: () => filterByList("amazon"),
      },
      {
        id: "bbc",
        name: "BBC",
        defaultValue: false,
        icon: "fas fa-dice-two",
        func: () => filterByList("bbc"),
      },
      {
        id: "empik",
        name: "Empik",
        defaultValue: false,
        icon: "fas fa-dice-three",
        func: () => filterByList("empik"),
      },
      {
        id: "gandalf",
        name: "Gandalf",
        defaultValue: false,
        icon: "fas fa-dice-four",
        func: () => filterByList("gandalf"),
      },
      {
        id: "pozycje",
        name: "Pozycje",
        defaultValue: false,
        icon: "fas fa-dice-five",
        func: () => filterByList("pozycje"),
      },
    ],
    openIcon: "fa-bars",
    closeIcon: "fa-times",
  };

  return (
    <header>
      <div className="header">
        <div className="header__logo">
          <NavLink to={dataHeader.logo.href}>{dataHeader.logo.name}</NavLink>
        </div>
        {isHome && (
          <form className="header__form form" action="">
            <input type="text" />
            <i className="fa fa-search" aria-hidden="true"></i>
          </form>
        )}
        <nav className="header__nav">
          <ul className={isOpen ? "header__nav-list open" : "header__nav-list"}>
            {dataHeader.navItems.map((item, index) => (
              <li key={index} className="header__nav-item">
                <NavLink
                  to={item.href}
                  className="header__nav-link"
                  onClick={closeMenu}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__toggleWrapper">
          <span
            onClick={toggleMenu}
            className={
              isOpen
                ? `fas ${dataHeader.closeIcon}`
                : `fas ${dataHeader.openIcon}`
            }
          ></span>
        </div>
      </div>
      <div className="listBar">
        {isHome ? (
          <>
            {dataHeader.listItems.map((item, index) => (
              <span key={index}>
                <input
                  type="radio"
                  id={item.id}
                  name="chosenList"
                  value={item.id}
                  onChange={item.func}
                  className="listBar__input"
                  defaultChecked={item.defaultValue}
                />

                <label className="listBar__label" htmlFor={item.id}>
                  <i className={item.icon}></i>
                  <div className="listBar__displayBox">{item.name}</div>
                </label>
              </span>
            ))}
          </>
        ) : (
          <p className="listBar__subtitle">{subtitle}</p>
        )}
      </div>
    </header>
  );
};

export default Header;
