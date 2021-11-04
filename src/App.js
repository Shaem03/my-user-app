import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "./App.css";

import AddTutorial from "./component/AddTutorial";
import Tutorial from "./component/Tutorial";
import TutorialsList from "./component/TutorialsList";

function App() {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a href="/users" className="navbar-brand">
                    My App
                </a>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/users"} className="nav-link">
                            List
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/add"} className="nav-link">
                            Add
                        </Link>
                    </li>
                </div>
            </nav>

            <div className="container mt-3">
                <Switch>
                    <Route exact path={["/", "/users"]} component={TutorialsList} />
                    <Route exact path="/add" component={AddTutorial} />
                    <Route path="/users/:id" component={Tutorial} />
                </Switch>
            </div>
        </div>
    );
}

export default App;