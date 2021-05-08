import React, { useState, FormEvent } from "react";
import { useRegisterMutation } from "generated/graphql";
import { RouteComponentProps } from "react-router";

const Register: React.FC<RouteComponentProps> = ({ history }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register] = useRegisterMutation();

    const onSubmitHandler = async (e: FormEvent) => {
        e.preventDefault();

        const response = await register({ variables: { email, password } });
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
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
