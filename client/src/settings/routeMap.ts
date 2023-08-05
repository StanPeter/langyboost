import React, { LazyExoticComponent } from 'react';

/* 'LazyLoading' - gets downloaded when required -> multiple smaller JS 'chunks' after the build */

// const AdminHome = React.lazy(() => import('components/pages/AdminHome/AdminHome'));
const LandingPage = React.lazy(() => import('components/pages/LandingPage/LandingPage'));
const CoursesPage = React.lazy(() => import('components/pages/CoursesPage/CoursesPage'));
const ArticlesPage = React.lazy(() => import('components/pages/ArticlesPage/ArticlesPage'));
const ResourcesPage = React.lazy(() => import('components/pages/ResourcesPage/ResourcesPage'));
const PersonalSettingsPage = React.lazy(() => import('components/pages/PersonalSettingsPage/PersonalSettingsPage'));
const CourseDetailPage = React.lazy(() => import('components/pages/CourseDetailPage/CourseDetailPage'));
const ArticleDetailPage = React.lazy(() => import('components/pages/ArticleDetailPage/ArticleDetailPage'));
const CardPage = React.lazy(() => import('components/pages/CardPage/CardPage'));
const AuthPage = React.lazy(() => import('components/pages/AuthPage/AuthPage'));
const TermsConditionsPage = React.lazy(() => import('components/pages/TermsConditionsPage/TermsConditionsPage'));

const routes = {
    LANDING_PAGE: '/',
    AUTH_PAGE: '/auth',
    CARD_PAGE: '/cards/:courseName',
    COURSES_PAGE: '/courses',
    COURSE_DETAIL_PAGE: '/course/:id',
    ARTICLES_PAGE: '/articles',
    ARTICLE_DETAIL_PAGE: '/articles/:id',
    RESOURCES_PAGE: '/resources',
    SETTINGS_PAGE: '/settings',
    PROFILE_PAGE: '/profile',
    TERMS_CONDITIONS_PAGE: '/termsConditions',
};

interface IRouteMapa<T> {
    component: LazyExoticComponent<React.FC<T>> | React.FC<{}>; // component
    path: string; // URL defined in ENUM routePathEnum
    private?: boolean; // private = token required for access (auth login)
    routeMode?: string;
}

/* For now all routes are public, later on they will be accessed via different Wrapper -> (AuthWrapper vs MainWrapper) */
export function routeMapa<T>(): IRouteMapa<T>[] {
    return [
        {
            component: LandingPage,
            path: routes.LANDING_PAGE,
            private: false,
        },
        {
            component: AuthPage,
            path: routes.AUTH_PAGE,
            private: false,
        },
        {
            component: CardPage,
            path: routes.CARD_PAGE,
            private: false,
        },
        {
            component: CoursesPage,
            path: routes.COURSES_PAGE,
            private: false,
        },
        {
            component: CourseDetailPage,
            path: routes.COURSE_DETAIL_PAGE,
            private: false,
        },
        {
            component: ArticlesPage,
            path: routes.ARTICLES_PAGE,
            private: false,
        },
        {
            component: ArticleDetailPage,
            path: routes.ARTICLE_DETAIL_PAGE,
            private: false,
        },
        {
            component: ResourcesPage,
            path: routes.RESOURCES_PAGE,
            private: false,
        },
        {
            component: PersonalSettingsPage,
            path: routes.SETTINGS_PAGE,
            private: false,
            routeMode: 'settings',
        },
        {
            component: PersonalSettingsPage,
            path: routes.PROFILE_PAGE,
            private: false,
            routeMode: 'profile',
        },
        {
            component: TermsConditionsPage,
            path: routes.TERMS_CONDITIONS_PAGE,
            private: false,
        },
    ];
}
