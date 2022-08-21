// import Home from "pages/Home";
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import AdminHome from "components/pages/AdminHome/AdminHome";
import LandingPage from "components/pages/LandingPage/LandingPage";
import CoursesPage from "components/pages/CoursesPage/CoursesPage";
import ArticlesPage from "components/pages/ArticlesPage/ArticlesPage";
import ResourcesPage from "components/pages/ResourcesPage/ResourcesPage";
import PersonalSettingsPage from "components/pages/PersonalSettingsPage/PersonalSettingsPage";
import CourseDetailPage from "components/pages/CourseDetailPage/CourseDetailPage";
import ArticleDetailPage from "components/pages/ArticleDetailPage/ArticleDetailPage";
import CardPage from "components/pages/CardPage/CardPage";
import AuthPage from "components/pages/AuthPage/AuthPage";
import TermsConditionsPage from "components/pages/TermsConditionsPage/TermsConditionsPage";

interface RoutesProps {}

const Routess: React.FC<RoutesProps> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/cards/:courseName" element={<CardPage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/course/:id" element={<CourseDetailPage />} />
                <Route path="/articles" element={<ArticlesPage />} />
                <Route path="/article/:id" element={<ArticleDetailPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/settings" element={<PersonalSettingsPage routeMode="settings" />} />
                <Route path="/profile" element={<PersonalSettingsPage routeMode="profile" />} />
                <Route path="/admin" element={<AdminHome />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/termsConditions" element={<TermsConditionsPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routess;
