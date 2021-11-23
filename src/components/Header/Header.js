import { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const dataHeader = {
    logo: "LOGO",
    navItems: [
      {
        name: "NavItemOne",
        href: "/",
      },
      {
        name: "NavItemTwo",
        href: "/",
      },
      {
        name: "NavItemThree",
        href: "/",
      },
    ],
    openIcon: "fa-bars",
    closeIcon: "fa-times",
  };

  return (
    <header>
      <div className="header">
        <div className="header__logo">{dataHeader.logo}</div>
        <nav className="header__nav">
          <ul className={isOpen ? "header__nav-list open" : "header__nav-list"}>
            {dataHeader.navItems.map((item, index) => (
              <li key={index} className="header__nav-item">
                <a
                  href={item.href}
                  className="header__nav-link"
                  onClick={closeMenu}
                >
                  {item.name}
                </a>
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
