import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React from "react";

interface AuthPageProps {}

const AuthPage: React.FC<AuthPageProps> = ({}) => {
    return (
        <div className="appWrapper">
            <Navbar />
            <div className="bodyWrapper">
                <div className="auth-page">Auth page</div>
            </div>
            <Footer />
        </div>
    );
};

export default AuthPage;
