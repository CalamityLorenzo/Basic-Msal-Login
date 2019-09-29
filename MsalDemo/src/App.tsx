import React from "react";
import "./App.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PopUpPages } from "./Pages/Popup/Popup";
import { HomePage } from "./Pages/Home/HomePage";

import { loginManager } from "./Services/loginmanager";
import { RedirectPage } from "./Pages/Redirect/RedirectPage";
import { AppPage } from "./Pages/AppPage/AppPage";
import NavigationLinks from "./Pages/Navigation/NavigationLinks";
import { AltAppPage } from "./Pages/AltAppPage/AltAppPage";

// The same redirect Uri as the Azure App Registration.
// INCLUDING CASE!! 
const returnUri:string = "https://localhost:3000/app";
const login = loginManager.SetUp(returnUri);

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <NavigationLinks />
                <div className="pageContent">
                    <Switch>
                        <Route path="/redirect" render={props => <RedirectPage loginManager={login} {...props} />} />
                        <Route path="/popup" render={props => <PopUpPages loginManager={login} {...props} />} />
                        <Route path="/app" render={props => <AppPage loginManager={login} {...props} />} />

                        <Route path="/" >
                            <HomePage />
                        </Route>

                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
