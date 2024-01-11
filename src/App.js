import "./App.css";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/tours" component={Tours} />
      </Switch>
    </>
  );
}
export default App;
