
import './App.css';
import Biography from './pages/biography'
import Tourdates from './pages/tourdates'
import News from './pages/news'
import Merch from './pages/news'
import Home from './pages/home'
import {Route, BrowserRouter as Router, Link} from 'react-router-dom'


function App() {
  return (
    <Router>
    <div className="App" >
      <header className="App-header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Biography">Biography</Link>
          <Link to="/Tourdates">Tour Dates</Link>
          <Link to="/News">News</Link>
          <Link to="/Merch">Merch</Link>
        </nav>

       <p>this is for Deacon Hill</p>
       <Route path="/" exact component={Home}/>
       <Route path="/Biography" component={Biography}/>
       <Route path="/Tourdates" component={Tourdates}/>
       <Route path="/News" component={News}/>
       <Route path="/Merch" component={Merch}/>

      </header>
    </div>
    </Router>
  );
}

export default App;