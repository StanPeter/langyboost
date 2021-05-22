import React from "react";
import "styles/main.css";
import { useHistory } from "react-router";
import { useGetUserQuery, useLogoutMutation } from "generated/graphql";
import { setAccessToken } from "utils/getToken";
import MenuIcon from "@material-ui/icons/Menu";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
    const history = useHistory();

    const { data, loading } = useGetUserQuery();
    const [logout, { client }] = useLogoutMutation();

    return (
        <nav className="navbar">
            <div className="left">
                <ul className="nav">
                    <li className="logo">
                        <MenuIcon />
                    </li>
                    <li onClick={() => history.push("/")}>Home page</li>
                    <li onClick={() => history.push("/admin")}>Admin secret</li>
                </ul>
            </div>
            <div className="right">
                <ul className="nav">
                    {data?.getUser && (
                        <li
                            onClick={async () => {
                                await logout();
                                setAccessToken("");
                                await client.resetStore();
                            }}
                        >
                            Logout
                        </li>
                    )}
                    {!data?.getUser && !loading && (
                        <li
                            onClick={() => {
                                history.push("/login");
                            }}
                        >
                            Login
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
