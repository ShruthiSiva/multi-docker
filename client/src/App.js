import logo from './logo.svg';
import './App.css';
import Fib from './Fib';
import OtherPage from './OtherPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />  
          <Link to="/">Home</Link>   
          <Link to="/otherPage">Other Page</Link>  
        </header>
        <div>
          <Route exact path="/" component={Fib}/>
          <Route exact path="/otherPage" component={OtherPage}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
