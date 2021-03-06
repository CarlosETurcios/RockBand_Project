
import './styling/App.css';
import Biography from './pages/biography'
import Tourdates from './pages/tourdates'
import News from './pages/news'
import Merch from './pages/merch'
import Home from './pages/home'
import {Route, BrowserRouter as Router, Link} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App" >
        <div className="main">
          <header className="App-header">
            <navbar>
              <ul className="nav">
                <li className="item"><Link className="home" to="/">Home</Link></li>
                <li className="item"><Link className="bio" to="/Biography">Biography</Link></li>
                <li className="item"><Link className="tour" to="/Tourdates">Tour Dates</Link></li>
                <li className="item"> <Link className="news" to="/News">News</Link></li>
                <li className= "item">  <Link className="merch" to="/Merch">Merch</Link></li>
              </ul>
            </navbar>
          </header> 
        

          <div className="body">
              <Route path="/" exact component={Home}/>
              <Route path="/Biography" component={Biography}/>
              <Route path="/Tourdates" component={Tourdates}/>
              <Route path="/News" component={News}/>
              <Route path="/Merch" component={Merch}/>
          </div>
         

          <footer className="footer">
              <p>this is the footer</p>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;