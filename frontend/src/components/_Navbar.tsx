import {
    AppBar,
    Button,
    IconButton,
    makeStyles,
    Toolbar,
    Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { useHistory } from "react-router";
import { useGetUserQuery, useLogoutMutation } from "generated/graphql";
import { setAccessToken } from "utils/getToken";
import "styles/main.css";

interface NavbarProps {}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navbar: React.FC<NavbarProps> = ({}) => {
    const classes = useStyles();
    const history = useHistory();

    const { data, loading } = useGetUserQuery();
    const [logout, { client }] = useLogoutMutation();

    let body;

    if (loading) body = "its still loading";
    else if (data?.getUser) body = "Logged in as: " + data.getUser.email;
    else body = "there was an error";

    console.log(body, "body");

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        onClick={() => history.push("/")}
                        variant="h6"
                        className={classes.title.concat(" link")}
                    >
                        Home page
                    </Typography>
                    <Typography
                        onClick={() => history.push("/admin")}
                        variant="h6"
                        className={classes.title.concat(" link")}
                    >
                        Secret Admin
                    </Typography>
                    {data?.getUser && (
                        <Button
                            color="inherit"
                            onClick={async () => {
                                await logout();
                                setAccessToken("");
                                await client.resetStore();
                            }}
                        >
                            Logout
                        </Button>
                    )}
                    {!data?.getUser && !loading && (
                        <Button
                            color="inherit"
                            onClick={() => history.push("/login")}
                        >
                            Login
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
