// Componenty
import Spinner from 'components/UI/Spinner';
import ErrorBoundaryHoc from 'components/hoc/ErrorBoundaryHoc';
import NotFound from 'pages/NotFound/NotFound';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routeMapa from 'utils/routeMap';

const AppRouter: React.FC = () => {
    // useEffect(() => {
    //     fetch("http://localhost:4000/refreshToken", {
    //         method: "POST",
    //         credentials: "include",
    //     }).then(async (data) => {
    //         const { accessToken } = await data.json();

    //         if (accessToken) {
    //             setAccessToken(accessToken);
    //         }

    //         setTimeout(() => {
    //             setLoading(false);
    //         }, 1000);
    //     });
    // }, []);

    // if (loading) return <Spinner />;

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<ErrorBoundaryHoc />}>
                    <Route path={'*'} element={<NotFound />} />
                    {routeMapa().map((route, index: number) => {
                        const RouteComponent:
                            | React.FC<{ routeMode?: string }>
                            | React.LazyExoticComponent<React.FC<{ routeMode?: string }>> = route.component;

                        // wrap components with Spinner until they load properly
                        const Component = (
                            <Suspense
                                fallback={
                                    <div
                                        style={{
                                            padding: '15px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Spinner />
                                    </div>
                                }
                            >
                                <RouteComponent routeMode={route.routeMode} />
                            </Suspense>
                        );

                        return <Route path={route.path} element={Component} key={index.toString() + route.path} />;

                        // return route.private ? (
                        //     <Route key={index} element={<MainWrapper />}>
                        //         <Route path={route.path} element={<PrivateRoute element={Component} />} />
                        //     </Route>
                        // ) : (
                        //     <Route key={index} element={<AuthWrapper />}>
                        //         <Route path={route.path} element={Component} />
                        //     </Route>
                        // );
                    })}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
