import Home from "pages/Home";
import Register from "pages/Register";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminHome from "pages/AdminHome";
import Header from "components/Header";
import Navbar from "components/Navbar";
import LoginForm from "components/LoginForm";

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={LoginForm} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/admin" component={AdminHome} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default Routes;
