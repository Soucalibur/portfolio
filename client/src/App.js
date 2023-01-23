
import {Route} from "react-router-dom"


import Home from './components/home';
import Navbar from './components/navbar';
import Contact from "./components/contact/index"
import Projects from "./components/projects";
import Skills from "./components/skills";
import ContactMe from "./components/contact/contactMe";

function App() {
  return (
    <div>
      
        <Route path='/' component={Navbar} />
        <Route path='/home' component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/skills" component={Skills} />
        <Route path="/contactme" component={ContactMe} />
        <Route path="/" component={Contact} />
      
    </div>
  );
}

export default App;
