import Home from "pages/Home";
import Register from "pages/Register";
import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminHome from "pages/AdminHome";
import Login from "pages/Login";
import LandingPage from "pages/LandingPage";
import CoursesPage from "pages/CoursesPage";
import ArticlesPage from "pages/ArticlesPage";
import ResourcesPage from "pages/ResourcesPage";
import PersonalSettingsPage from "pages/PeronalSettingsPage";
import CourseDetailPage from "pages/CourseDetailPage";
import ArticleDetailPage from "pages/ArticleDetailPage";
import CardPage from "pages/CardPage";

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
    return (
        <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/cards/:courseName" component={CardPage} />
            <Route exact path="/courses" component={CoursesPage} />
            <Route exact path="/course/:id" component={CourseDetailPage} />
            <Route exact path="/articles" component={ArticlesPage} />
            <Route exact path="/article/:id" component={ArticleDetailPage} />
            <Route exact path="/resources" component={ResourcesPage} />
            <Route exact path="/settings" component={PersonalSettingsPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/admin" component={AdminHome} />
        </Switch>
    );
};

export default Routes;
