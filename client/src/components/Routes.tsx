// import Home from "pages/Home";
import Register from "components/pages/AuthPage/Register";
import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminHome from "components/pages/AdminHome/AdminHome";
import Login from "components/pages/AuthPage/Login";
import LandingPage from "components/pages/LandingPage/LandingPage";
import CoursesPage from "components/pages/CoursesPage/CoursesPage";
import ArticlesPage from "components/pages/ArticlesPage/ArticlesPage";
import ResourcesPage from "components/pages/ResourcesPage/ResourcesPage";
import PersonalSettingsPage from "components/pages/PeronalSettingsPage/PeronalSettingsPage";
import CourseDetailPage from "components/pages/CourseDetailPage/CourseDetailPage";
import ArticleDetailPage from "components/pages/ArticleDetailPage/ArticleDetailPage";
import CardPage from "components/pages/CardPage/CardPage";
import AuthPage from "components/pages/AuthPage/AuthPage";
import TermsConditionsPage from "components/pages/TermsConditionsPage/TermsConditionsPage";

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
            <Route exact path="/auth" component={AuthPage} />
            <Route exact path="/termsConditions" component={TermsConditionsPage} />
        </Switch>
    );
};

export default Routes;
