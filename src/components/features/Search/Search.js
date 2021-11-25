import { useContext, useEffect, useState } from "react";

import { GlobalContext } from "../../../context/GlobalContext";

import "./Search.scss";

const Search = () => {
  const { searchBook, clearFilter } = useContext(GlobalContext);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue !== "") {
      searchBook(searchValue);
    } else {
      clearFilter();
    }
  }, [searchValue]);

  return (
    <form className="form" action="">
      <input type="text" onChange={handleChange} placeholder="Wyszukaj..." />
      <i className="fa fa-search" aria-hidden="true"></i>
    </form>
  );
};

export default Search;
