import "./Sidebar.scss";

const Sidebar = () => {
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
          <i className="sidebar__icon fa fa-arrow-up" aria-hidden="true"></i>
        </div>
        <div className="sidebar__cell sidebar__cell--content">
          <i className="sidebar__icon sidebar__icon--static fas fa-user-graduate"></i>
          <span>Po nazwisku</span>
        </div>
        <div className="sidebar__cell">
          <i className="sidebar__icon fa fa-arrow-down" aria-hidden="true"></i>
        </div>
      </div>
      <div className="sidebar__row">
        <div className="sidebar__cell">
          <i className="sidebar__icon fa fa-arrow-up" aria-hidden="true"></i>
        </div>
        <div className="sidebar__cell sidebar__cell--content">
          <i
            className="sidebar__icon sidebar__icon--static fa fa-user"
            aria-hidden="true"
          ></i>
          <span>Po imieniu</span>
        </div>
        <div className="sidebar__cell">
          <i className="sidebar__icon fa fa-arrow-down" aria-hidden="true"></i>
        </div>
      </div>
      <div className="sidebar__row">
        <div className="sidebar__cell">
          <i className="sidebar__icon fas fa-sort-numeric-down"></i>
        </div>
        <div className="sidebar__cell sidebar__cell--content">
          <i className="sidebar__icon sidebar__icon--static fas fa-book-open "></i>
          <span>Po ilości stron</span>
        </div>
        <div className="sidebar__cell">
          <i className="sidebar__icon fas fa-sort-numeric-down-alt"></i>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
