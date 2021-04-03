
import './App.css';
import Biography from './pages/Biography'
import Tourdates from './pages/Tourdates'
import Merch from './pages/Merch'
import News from './pages/News'
import {Route, BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Route path='/Home' component={home}></Route>
        <Route path='/Biography' component={Biography}></Route>
        <Route path='/Tourdates' component={Tourdates}></Route>
        <Route path='/Merch' component={Merch}></Route>
        <Route path='/News' component={News}></Route>
       <p>this is for Deacon Hill band</p>
      </header>
    </div>
    </Router>
  );
}

export default App;
