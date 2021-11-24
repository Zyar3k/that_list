import { Switch, Route } from "react-router-dom";
import { ContextProvider } from "./context/StoreContext/GlobalContext";

import Header from "./components/layout/Header/Header";
import Home from "./components/views/Home/Home";
import UserList from "./components/views/UserList/UserList";
import Stats from "./components/views/Stats/Stats";

function App() {
  return (
    <ContextProvider>
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
    </ContextProvider>
  );
}

export default App;
