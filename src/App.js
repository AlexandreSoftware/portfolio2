import logo from './logo.svg';
import './App.css';
import ProjectContainer from './ProjectsContainer';
import { Switch,Route} from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from "./Home"
import Skills from "./Skills"
import About from './About';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/">
          <Home>a</Home>
        </Route>
        <Route exact path={"/projects"}>
          <ProjectContainer></ProjectContainer>
        </Route>
        <Route path="/skills">
          <Skills></Skills>
        </Route>
        <Route path="/About"><About></About></Route>
      </Switch>
    </div>
  );
}

export default App;
