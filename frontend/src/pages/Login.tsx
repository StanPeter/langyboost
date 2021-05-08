import { useLoginMutation } from "generated/graphql";
import React, { FormEvent, useState } from "react";
import { RouteComponentProps } from "react-router";

// interface LoginProps {}

const Login: React.FC<RouteComponentProps> = ({ history }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login] = useLoginMutation();

    const onSubmitHandler = async (e: FormEvent) => {
        e.preventDefault();

        const response = await login({ variables: { email, password } });
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
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;

