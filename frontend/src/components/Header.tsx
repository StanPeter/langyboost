import { useGetUserQuery, useLogoutMutation } from "generated/graphql";
import React from "react";
import { Link } from "react-router-dom";
import { setAccessToken } from "utils/getToken";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    const { data, loading } = useGetUserQuery();
    const [logout, { client }] = useLogoutMutation();

    let body;

    if (loading) body = "its still loading";
    else if (data?.getUser) body = "Logged in as: " + data.getUser.email;
    else body = "there was an error";

    return (
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
            {!loading && data?.getUser?.id ? (
                <div>
                    <button
                        onClick={async () => {
                            await logout();
                            setAccessToken("");
                            await client.resetStore();
                        }}
                    >
                        Logout
                    </button>
                </div>
            ) : null}
            <div>{body}</div>
        </header>
    );
};

export default Header;
