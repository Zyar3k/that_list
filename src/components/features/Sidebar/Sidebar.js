import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

import "./Sidebar.scss";

const Sidebar = () => {
  const { sortBy } = useContext(GlobalContext);
  return (
    <aside className="sidebar">
      <div className="sidebar__row">
        <div className="sidebar__cell sidebar__cell--content">
          <i className="sidebar__icon fas fa-sort"></i>
          <span>Sortowanie</span>
        </div>
      </div>
      <div className="sidebar__row">
        <div className="sidebar__cell">
          <i
            className="sidebar__icon fa fa-arrow-up"
            aria-hidden="true"
            onClick={() => sortBy("lastNameUp")}
          ></i>
        </div>
        <div className="sidebar__cell sidebar__cell--content">
          <i className="sidebar__icon sidebar__icon--static fas fa-user-graduate"></i>
          <span>Po nazwisku</span>
        </div>
        <div className="sidebar__cell">
          <i
            className="sidebar__icon fa fa-arrow-down"
            aria-hidden="true"
            onClick={() => sortBy("lastNameDown")}
          ></i>
        </div>
      </div>
      <div className="sidebar__row">
        <div className="sidebar__cell">
          <i
            className="sidebar__icon fa fa-arrow-up"
            aria-hidden="true"
            onClick={() => sortBy("nameUp")}
          ></i>
        </div>
        <div className="sidebar__cell sidebar__cell--content">
          <i
            className="sidebar__icon sidebar__icon--static fa fa-user"
            aria-hidden="true"
          ></i>
          <span>Po imieniu</span>
        </div>
        <div className="sidebar__cell">
          <i
            className="sidebar__icon fa fa-arrow-down"
            aria-hidden="true"
            onClick={() => sortBy("nameDown")}
          ></i>
        </div>
      </div>
      <div className="sidebar__row">
        <div className="sidebar__cell">
          <i
            className="sidebar__icon fas fa-sort-numeric-down"
            onClick={() => sortBy("pageUp")}
          ></i>
        </div>
        <div className="sidebar__cell sidebar__cell--content">
          <i className="sidebar__icon sidebar__icon--static fas fa-book-open "></i>
          <span>Po ilości stron</span>
        </div>
        <div className="sidebar__cell">
          <i
            className="sidebar__icon fas fa-sort-numeric-down-alt"
            onClick={() => sortBy("pageDown")}
          ></i>
        </div>
      </div>
      <div className="sidebar__row">
        <div className="sidebar__cell">
          <i
            className="sidebar__icon fas fa-sort-numeric-down"
            onClick={() => sortBy("starUp")}
          ></i>
        </div>
        <div className="sidebar__cell sidebar__cell--content">
          <i className="sidebar__icon sidebar__icon--static fas fa-star "></i>
          <span>Gwiazdki</span>
        </div>
        <div className="sidebar__cell">
          <i
            className="sidebar__icon fas fa-sort-numeric-down-alt"
            onClick={() => sortBy("starDown")}
          ></i>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
