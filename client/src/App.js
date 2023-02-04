
import {Route} from "react-router-dom"

import Home from './components/home';
import Navbar from './components/navbar';
import Contact from "./components/contact/index"
import Projects from "./components/projects";
import Skills from "./components/skills";
import ContactMe from "./components/contact/contactMe";
import EmailSended from "./components/contact/emailSended";

function App() {
  return (
    <div>
      
        <Route path='/' component={Navbar} />
        <Route exact path='/' component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/skills" component={Skills} />
        <Route path="/" component={Contact} />
        <Route exact path="/contactme" component={ContactMe} />
        <Route exact path="/contactme/emailsended" component={EmailSended}  />
      
    </div>
  );
}

export default App;
