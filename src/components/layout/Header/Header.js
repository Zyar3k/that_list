import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const dataHeader = {
    logo: { name: "LOGO", href: "/" },
    navItems: [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "Twoja lista",
        href: "/twoja-lista",
      },
      {
        name: "Statystyki",
        href: "/statystyki",
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
    </header>
  );
};

export default Header;
