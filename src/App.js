import { Switch, Route } from "react-router-dom";

import Header from "./components/layout/Header/Header";
import Home from "./components/views/Home/Home";
import UserList from "./components/views/UserList/UserList";
import Stats from "./components/views/Stats/Stats";

function App() {
  return (
    <>
      <Header />

      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/statystyki">
            <Stats />
          </Route>
          <Route path="/twoja-lista">
            <UserList />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
