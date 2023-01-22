
import {Route} from "react-router-dom"

import LandingPage from './components/landingPage';
import Home from './components/home';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      
        <Route exact path='/' component={LandingPage} />
        <Route path='/home' component={Navbar} />
        <Route path='/home' component={Home} />
        
      
    </div>
  );
}

export default App;
