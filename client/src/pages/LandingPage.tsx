import React, {
    FormEvent,
    useEffect,
    useState,
} from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = ({}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    useEffect(() => {
        console.log("effected");

        setTimeout(() => {
            setPassword("");
            setEmail("");
            setUsername("");
        }, 1000);
    }, []);

    const onClickHandler = () => {
        console.log("clicked");
    };

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("clicked");
    };

    return (
        <div className="landing-page">
            <div className="sign-form">
                <div className="slider">
                    <FiArrowLeft className="slider-arrow" />
                    <p>
                        The ultimate platfform for learning your desired
                        language.
                    </p>
                    <FiArrowRight className="slider-arrow" />
                </div>
                <div className="switcher">
                    <button>Sign in</button>
                    <button>Sign up</button>
                </div>
                <form
                    className="form-sign"
                    autoComplete="off"
                    onSubmit={submitHandler}
                >
                    <input
                        className="form-input"
                        type="email"
                        name="email"
                        value={email}
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* <input
                            id="username"
                            type="text"
                            style={{ display: "none" }}
                            name="fakeusernameremembered"
                        /> */}
                    <input
                        className="form-input"
                        type="text"
                        name="username"
                        value={username}
                        placeholder="username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className="form-input"
                        type="password"
                        name="password"
                        // autoComplete="new-password"
                        value={password}
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={onClickHandler}>Sign up</button>
                </form>
                <div className="sign-up-text">
                    <hr />
                    <p>Or sign up with</p>
                    <hr />
                </div>
                <div className="form-icons">
                    <FcGoogle className="form-icon" />
                    <SiFacebook
                        style={{ color: "#45619d" }}
                        className="form-icon"
                    />
                    {/* <img
                            src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
                            alt="facebookIcon"
                            className="form-icon"
                        /> */}
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
