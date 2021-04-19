
import './App.css';
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
            <div class="home1"><Link className="home" to="/">Home</Link></div>
            <div class="bio1"><Link className="bio" to="/Biography">Biography</Link></div>
            <div class="tour1"><Link className="tour" to="/Tourdates">Tour Dates</Link></div>
            <div class="news1"> <Link className="news" to="/News">News</Link></div>
            <div class='merch1'>  <Link className="merch" to="/Merch">Merch</Link></div>
          </header> 
        </div>  

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
    </Router>
  );
}

export default App;