import {Route} from "react-router-dom"
import Index from "./components/index/landingPage";

function App() {
  return (
    <div >
      <Route path="/" component={Index}></Route>
    </div>
  );
}

export default App;
