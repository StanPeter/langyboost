import React, { LazyExoticComponent } from 'react';

/* 'LazyLoading' - gets downloaded when required -> multiple smaller JS 'chunks' after the build */
const LandingPage = React.lazy(() => import('pages/LandingPage/LandingPage'));
const CoursesPage = React.lazy(() => import('pages/CoursesPage/CoursesPage'));
const ArticlesPage = React.lazy(() => import('pages/ArticlesPage/ArticlesPage'));
const ResourcesPage = React.lazy(() => import('pages/ResourcesPage/ResourcesPage'));
const PersonalSettingsPage = React.lazy(() => import('pages/profile'));
const CourseDetailPage = React.lazy(() => import('pages/CourseDetailPage/CourseDetailPage'));
const ArticleDetailPage = React.lazy(() => import('pages/ArticleDetailPage/ArticleDetailPage'));
const CardPage = React.lazy(() => import('pages/cards'));
const AuthPage = React.lazy(() => import('pages/auth'));
const TermsConditionsPage = React.lazy(() => import('pages/policy'));

export const ROUTES = {
    LANDING_PAGE: '/',
    AUTH_PAGE: '/auth',
    CARD_PAGE: '/cards',
    COURSES_PAGE: '/courses',
    COURSE_DETAIL_PAGE: '/courses/:id',
    ARTICLES_PAGE: '/articles',
    ARTICLE_DETAIL_PAGE: '/articles/:id',
    RESOURCES_PAGE: '/resources',
    SETTINGS_PAGE: '/profile',
    PROFILE_PAGE: '/profile',
    TERMS_CONDITIONS_PAGE: '/policy',

};

interface IRouteMapa<T> {
    component: LazyExoticComponent<React.FC<T>> | React.FC<object>; // component
    path: string; // URL defined in ENUM routePathEnum
    private?: boolean; // private = token required for access (auth login)
    routeMode?: string;
}

/* For now all routes are public, later on they will be accessed via different Wrapper -> (AuthWrapper vs MainWrapper) */
function routeMapa<T>(): IRouteMapa<T>[] {
    return [
        {
            component: LandingPage,
            path: ROUTES.LANDING_PAGE,
            private: false,

        },
        {
            component: AuthPage,
            path: ROUTES.AUTH_PAGE,
            private: false,
        },
        {
            component: CardPage,
            path: ROUTES.CARD_PAGE,
            private: false,
        },
        {
            component: CoursesPage,
            path: ROUTES.COURSES_PAGE,
            private: false,
        },
        {
            component: CourseDetailPage,
            path: ROUTES.COURSE_DETAIL_PAGE,
            private: false,
        },
        {
            component: ArticlesPage,
            path: ROUTES.ARTICLES_PAGE,
            private: false,
        },
        {
            component: ArticleDetailPage,
            path: ROUTES.ARTICLE_DETAIL_PAGE,
            private: false,
        },
        {
            component: ResourcesPage,
            path: ROUTES.RESOURCES_PAGE,
            private: false,
        },
        {
            component: PersonalSettingsPage,
            path: ROUTES.SETTINGS_PAGE,
            private: false,
            routeMode: 'settings',
        },
        {
            component: PersonalSettingsPage,
            path: ROUTES.PROFILE_PAGE,
            private: false,
            routeMode: 'profile',
        },
        {
            component: TermsConditionsPage,
            path: ROUTES.TERMS_CONDITIONS_PAGE,
            private: false,
        },
    ];
}

export default routeMapa;
