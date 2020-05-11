import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Jugadores from "./components/Jugadores";
import Registrase from "./components/Registrase";
import IniciarSesion from "./components/IniciarSesion";

function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Iniciar Sesion</Link>
              </li>
              <li>
                <Link to="/registrarse">Registrarse</Link>
              </li>
              <li>
                <Link to="/jugadores">Jugadores</Link>
              </li>
            </ul>
          </nav>

        
          <Switch>
            <Route path="/jugadores">
              <Jugadores />
            </Route>
            <Route path="/registrarse">
              <Registrase />
            </Route>
            <Route path="/">
              <IniciarSesion />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
