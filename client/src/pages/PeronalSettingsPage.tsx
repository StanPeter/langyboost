import React, { useState } from "react";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Button2 from "components/Button2";
import { VscEdit } from "react-icons/vsc";

interface PeronalSettingsPageProps {}

const PeronalSettingsPage: React.FC<PeronalSettingsPageProps> = ({}) => {
    const [opacityImg, setOpacityImg] = useState("0.8");

    return (
        <div className="appWrapper">
            <Navbar />
            <div className="bodyWrapper">
                <div className="personal-settings-page">
                    <h2 className="header">Personal Settings</h2>
                    <div className="settings-container">
                        <div className="settings-buttons">
                            <Button2
                                text="My profile"
                                style={{
                                    borderRadius: "25px 0px 0px 0px",
                                }}
                                onClick={() => {}}
                            />
                            <Button2
                                text="My Settings"
                                active={false}
                                style={{
                                    borderRadius: "0 25px 0px 0px",
                                }}
                                onClick={() => {}}
                            />
                        </div>
                        <div className="settings-image">
                            <img
                                src="https://pyxis.nymag.com/v1/imgs/64a/ad3/5896a5cd3008c6fe87b18cc78a99466035-the-witcher-ep-07-placeholder.rsocial.w1200.jpg"
                                alt=""
                                style={{
                                    opacity: opacityImg ? opacityImg : "unset",
                                }}
                            />
                            <VscEdit
                                onMouseEnter={() => {
                                    setOpacityImg("0.5");
                                }}
                                onMouseLeave={() => {
                                    setOpacityImg("0.8");
                                }}
                                className="settings-edit-icon"
                            />
                        </div>
                        <form className="settings-form" action="">
                            <div className="form-item">
                                <div className="form-label">
                                    <label htmlFor="sex">Sex</label>
                                </div>
                                <input type="text" name="sex" />
                            </div>
                            <div className="form-item">
                                <div className="form-label">
                                    <label htmlFor="firstName">
                                        First name
                                    </label>
                                </div>
                                <input type="text" name="firstName" />
                            </div>
                            <div className="form-item">
                                <div className="form-label">
                                    <label htmlFor="lastName">Last name</label>
                                </div>
                                <input type="text" name="lastName" />
                            </div>
                            <div className="form-item">
                                <div className="form-label">
                                    <label htmlFor="email">E-mail</label>
                                </div>
                                <input type="email" name="email" />
                            </div>
                            <div className="form-item">
                                <div className="form-label">
                                    <label htmlFor="birthDate">Birthdate</label>
                                </div>
                                <input type="date" name="birthDate" />
                            </div>
                            <div className="form-item">
                                <div className="form-label">
                                    <label htmlFor="phoneNumber">
                                        Phone number
                                    </label>
                                </div>
                                <input type="text" name="phoneNumber" />
                            </div>
                            <div className="form-item">
                                <div className="form-label">
                                    <label htmlFor="address">Address</label>
                                </div>
                                <input type="text" name="address" />
                            </div>
                            <div className="form-item">
                                <div className="form-label">
                                    <label htmlFor="nationality">
                                        Nationality
                                    </label>
                                </div>
                                <input type="text" name="nationality" />
                            </div>
                            <button>Save changes</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PeronalSettingsPage;
