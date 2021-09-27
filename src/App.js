import AboutMe from './components/AboutMe';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import { Navbar, Nav } from 'react-bootstrap'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="body">
        <div>
          <Navbar className="nav-bar">

            <Navbar.Brand className="portfolio" to="/">Portfolio</Navbar.Brand>
            <Nav className="me-auto">
              <Link className="links" to="/">About Me</Link>
              <Link className="links" to="/Projects">Projects</Link>
              <Link className="links" to="/Contact">Contact</Link>
              {/* <Link className="links" href="https://drive.google.com/file/d/15BQkaZ7LDausDRZ2HK_1TCpFxSw9JHGr/view" target="_blank">Resume</Link> */}
              <ul class="navbar-nav">
            <li className="links">
              <a class="nav-link active" aria-current="page"
                href="https://drive.google.com/file/d/15BQkaZ7LDausDRZ2HK_1TCpFxSw9JHGr/view" target="_blank">Resume</a>
            </li>
            </ul>
            </Nav>

          </Navbar>
        </div>


        <Switch>
          <Route exact path="/">
            {" "}
            <AboutMe />
          </Route>
          <Route exact path="/Projects">
            {" "}
            <Projects />
          </Route>
          <Route exact path="/Contact">
            {" "}
            <Contact />
          </Route>
        </Switch>
        {/* footer */}
        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
