import "./App.css";

import Login from "./Login";
import Home from "./Home";
import Register from "./Register";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/home" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;