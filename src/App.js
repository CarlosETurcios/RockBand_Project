
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
            <div class="home"><Link to="/">Home</Link></div>
            <div class="bio"><Link to="/Biography">Biography</Link></div>
            <div class="tour"><Link to="/Tourdates">Tour Dates</Link></div>
            <div class="news"> <Link to="/News">News</Link></div>
            <div class='merch'>  <Link to="/Merch">Merch</Link></div>
          </header> 
        </div>  

          <div className="body">
            <Route path="/" exact component={Home}/>
            <Route path="/Biography" component={Biography}/>
            <Route path="/Tourdates" component={Tourdates}/>
            <Route path="/News" component={News}/>
            <Route path="/Merch" component={Merch}/>
          </div>
      
      </div>
    </Router>
  );
}

export default App;