import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Fib from "./Fib";
import OtherPage from "./OtherPage";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <Link to="/"> HOME </Link>
          <Link to="/otherpage"> Other page </Link>
        </div>
        <div>
          <Route exact path={"/"} component={Fib} />
          <Route path={"/otherpage"} component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
