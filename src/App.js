import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Nosotros from './componentes/nosotros';
import Inicio from './componentes/inicio';
import Contacto from './componentes/contacto';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="btn-group">
          <Link to="/nosotros" className="btn btn-info">
            Nosotros
          </Link>
          <Link to="/contacto" className="btn btn-info">
            Contacto
          </Link>
          <NavLink to="/" className="btn btn-info">
            Inicio
          </NavLink>
        </div>
        <hr />
        <Switch>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/contacto">
            <Contacto/>
          </Route>
          <Route path="/" exact>
            <Inicio/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
