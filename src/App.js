
import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavTop from "./pages/home/components/navtop/navtop"
import Home from "./pages/home/home"
import Data from "./pages/Databases/data"
import Language from "./pages/Langauges/language"
import Dock from "./pages/Docker/dock"
import CMD from "./pages/CMD/CMD"
import notFound from "./pages/404/notFound"

function App() {
  return (
    <Router>
      <NavTop/>
      <Switch>
        <Route exact path= "/" component={Home}/>
        <Route exact path= "/docker" component={Dock}/>
        <Route exact path="/languages" component={Language} />
        <Route exact path="/cmd" component={CMD} />
        <Route exact path="/data" component={Data} />
        <Route component ={notFound} />
      </Switch>
    
    </Router>
  );
}

export default App;
