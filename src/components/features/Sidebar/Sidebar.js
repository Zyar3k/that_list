import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

import "./Sidebar.scss";

const Sidebar = () => {
  const { sortBy } = useContext(GlobalContext);

  const sidebarData = {
    title: { name: "Sortowanie", icon: "fas fa-sort" },
    sortItems: [
      {
        firstIcon: "fa fa-arrow-up",
        firstFunc: () => sortBy("lastNameUp"),
        centerIcon: "fas fa-user-graduate",
        title: "Po nazwisku",
        secondIcon: "fa fa-arrow-down",
        secondFunc: () => sortBy("lastNameDown"),
      },
      {
        firstIcon: "fa fa-arrow-up",
        firstFunc: () => sortBy("nameUp"),
        centerIcon: "fa fa-user",
        title: "Po imieniu",
        secondIcon: "fa fa-arrow-down",
        secondFunc: () => sortBy("nameDown"),
      },
      {
        firstIcon: "fas fa-sort-numeric-down",
        firstFunc: () => sortBy("pageUp"),
        centerIcon: "fas fa-book-open",
        title: "Po ilości stron",
        secondIcon: "fas fa-sort-numeric-down-alt",
        secondFunc: () => sortBy("pageDown"),
      },
      {
        firstIcon: "fas fa-sort-numeric-down",
        firstFunc: () => sortBy("starUp"),
        centerIcon: "fas fa-star",
        title: "Gwiazdki",
        secondIcon: "fas fa-sort-numeric-down-alt",
        secondFunc: () => sortBy("starDown"),
      },
    ],
  };
  return (
    <aside className="sidebar">
      <div className="sidebar__row">
        <div className="sidebar__cell sidebar__cell--content">
          <i className={`sidebar__icon ${sidebarData.title.icon}`}></i>
          <span>{sidebarData.title.name}</span>
        </div>
      </div>

      {sidebarData.sortItems.map((item, index) => (
        <div key={index} className="sidebar__row">
          <div className="sidebar__cell">
            <i
              className={`sidebar__icon ${item.firstIcon}`}
              aria-hidden="true"
              onClick={item.firstFunc}
            ></i>
          </div>
          <div className="sidebar__cell sidebar__cell--content">
            <i
              className={`sidebar__icon sidebar__icon--static ${item.centerIcon}`}
            ></i>
            <span>{item.title}</span>
          </div>
          <div className="sidebar__cell">
            <i
              className={`sidebar__icon ${item.secondIcon}`}
              aria-hidden="true"
              onClick={item.secondFunc}
            ></i>
          </div>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
