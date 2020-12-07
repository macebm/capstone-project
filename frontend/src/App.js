import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import SingleStore from "./components/SingleStore";
import Stores from "./components/Stores";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/stores">
          <Stores />
        </Route>
        <Route path="/stores/:storeId">
          <SingleStore />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
