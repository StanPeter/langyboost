import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import AdminHome from "pages/AdminHome";

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <div>
                        <Link to="/register">Register</Link>
                    </div>
                    <div>
                        <Link to="/login">Login</Link>
                    </div>
                    <div>
                        <Link to="/">Home page</Link>
                    </div>
                    <div>
                        <Link to="/admin">Admin home page</Link>
                    </div>
                </header>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/admin" component={AdminHome} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default Routes;
