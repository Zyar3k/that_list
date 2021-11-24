import Sidebar from "../../features/Sidebar/Sidebar";

import "./Home.scss";

import BookList from "../../features/BookList/BookList";

const Home = () => {
  return (
    <>
      <Sidebar />
      <BookList />
    </>
  );
};

export default Home;
