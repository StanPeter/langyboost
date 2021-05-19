import {
    GetUserDocument,
    GetUserQuery,
    useLoginMutation,
} from "generated/graphql";
import React, { FormEvent, useState } from "react";
import { RouteComponentProps } from "react-router";
import { setAccessToken } from "utils/getToken";
import {
    Button,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
} from "@material-ui/core";
import Form from "components/Form";

// interface LoginProps {}

const Login: React.FC<RouteComponentProps> = ({ history }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login] = useLoginMutation();

    const onSubmitHandler = async (e: FormEvent) => {
        e.preventDefault();

        const response = await login({
            variables: { email, password },
            update: (store, { data }) => {
                if (data) {
                    store.writeQuery<GetUserQuery>({
                        query: GetUserDocument,
                        data: {
                            getUser: data.login.user,
                        },
                    });
                }
            },
        });

        if (response.data?.login) {
            const token = setAccessToken(response.data.login.accessToken);
            console.log(token, "token");
        }

        console.log(response, "response");
        history.push("/");
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                />
            </div>
            <div>
                <input
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                />
            </div>
            <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">
                    We'll never share your email.
                </FormHelperText>
            </FormControl>
            <Button variant="contained" color="primary">
                Primary
            </Button>
            <button type="submit">Login</button>
            <div style={{marginBottom: '100px'}}></div>
            <Form />
        </form>
    );
};

export default Login;
