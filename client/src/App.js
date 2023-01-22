
import {Route} from "react-router-dom"

import LandingPage from './components/landingPage';
import Home from './components/home';
import Navbar from './components/navbar';
import Contact from "./components/contact/index"

function App() {
  return (
    <div>
      
        <Route exact path='/' component={LandingPage} />
        <Route path='/home' component={Navbar} />
        <Route path='/home' component={Home} />
        <Route path="/home" component={Contact} />
        
      
    </div>
  );
}

export default App;
