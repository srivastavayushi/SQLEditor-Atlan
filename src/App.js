import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Editor from "./Pages/Editor";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/editor" component={Editor} />
      </Switch>
    </Router>
  );
}

export default App;
